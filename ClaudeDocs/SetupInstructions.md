# NCMBattery Configuration Database & Website — Full Setup (Mac + Ubuntu)

One single, start-to-finish guide: install the database and API from scratch, import **every**
existing battery, parameter set and instruction set using the current migration scripts on
GitHub, create your admin login, and run the website. Mac and Ubuntu differences are called out
inline, right where they happen — there is no separate Mac-only or Ubuntu-only document anymore.

This replaces `MacSetup_ConfigurationDatabase.md`, `UbuntuSetup_ConfigurationDatabase.md` and
`ConfigDatabase_Website_Setup.md`. `MySQL/ConfigurationDatabase/SetupInstructions.md` and
`admin/AdminSetupInstructions.md` still exist as the deeper design reference (why each piece
works the way it does); this doc is the one you actually follow.

## The three pieces

| Piece | What it is | Where it lives |
|---|---|---|
| **Database** | MySQL, holding task types, parameter sets, instruction sets and batteries | MySQL on your machine |
| **API** | PHP programs the website and JATOS talk to | `MySQL/ConfigurationDatabase/` in this repo |
| **Website** | The admin UI you click through (battery builder) | A separate repo, `NCMBatteryWebsite` |

All three must be running to use the website. Everything below assumes you already have this
repo (`NCMBattery`, part of the `NCMLabOnlineTools` GitHub repo) checked out — if not, clone that
first; this doc only covers the database/API/website layer on top of it.

---

## Part 0 — Prerequisites

Open a terminal and check versions:

```bash
mysql --version     # need 8.0+
php --version       # need 8.1+
node --version       # need 18+
```

**Mac:** your system `mysql` may resolve to an old Anaconda client that can't talk to MySQL 8
(`Authentication plugin 'caching_sha2_password' cannot be loaded`). Fix once:
```bash
echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
which mysql   # must print /usr/local/mysql/bin/mysql
```

If anything is missing:

| Tool | Mac | Ubuntu |
|---|---|---|
| MySQL | Download "MySQL Community Server" from dev.mysql.com, run the installer, **write down the root password you choose** | `sudo apt update && sudo apt install mysql-server && sudo systemctl enable --now mysql && sudo mysql_secure_installation` |
| PHP | `brew install php` | `sudo apt install php php-mysql` |
| Node | `brew install node` | `sudo apt install nodejs npm`, or `nvm install 18` if the system Node is old (Node ≥14 is required by `react-scripts`; an old distro Node will install with `EBADENGINE` warnings and may misbehave) |

**Make sure MySQL is running:**
- **Mac:** System Settings → MySQL → should say running; click Start if not.
- **Ubuntu:** `sudo systemctl status mysql` (start it with `sudo systemctl start mysql` if needed).

---

## Part 1 — Create the database user

```bash
mysql -u root -p          # Mac: your MySQL installer password
sudo mysql -u root -p      # Ubuntu: usually no password needed the first time (auth_socket)
```

At the `mysql>` prompt, pick a password for a new app user and run:

```sql
CREATE USER 'ncmuser'@'localhost' IDENTIFIED BY 'PUT-A-STRONG-PASSWORD-HERE';
GRANT ALL PRIVILEGES ON ncmbattery_config.* TO 'ncmuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

Write that password down — you need it again in Parts 2 and 4.

---

## Part 2 — Build the database and import everything

From the repo root:

```bash
cd MySQL/ConfigurationDatabase
```

Run these **in this exact order**, once each, on a fresh database. Each prompts for the
`ncmuser` password:

```bash
mysql --default-character-set=utf8mb4 -u ncmuser -p < CreateSchema.sql
mysql --default-character-set=utf8mb4 -u ncmuser -p ncmbattery_config < SeedData_TaskTypes.sql
mysql --default-character-set=utf8mb4 -u ncmuser -p ncmbattery_config < migrate/Migrated_TaskConfig.sql
mysql --default-character-set=utf8mb4 -u ncmuser -p ncmbattery_config < migrate/Migrated_Batteries.sql
mysql --default-character-set=utf8mb4 -u ncmuser -p ncmbattery_config < migrate/Load_ParameterSchemas.sql
```

What each one does:

| File | Imports |
|---|---|
| `CreateSchema.sql` | All tables, indexes and the `v_battery_tasks` view (current schema — no separate upgrade scripts needed on a fresh install) |
| `SeedData_TaskTypes.sql` | One row per task type (`task_types`) |
| `migrate/Migrated_TaskConfig.sql` | **Every** parameter set, instruction set + its translations, session-chooser config and UI label, migrated from the old `config/*.js` files |
| `migrate/Migrated_Batteries.sql` | **Every** existing battery and its ordered task list |
| `migrate/Load_ParameterSchemas.sql` | The reviewed parameter-entry forms (currently Digit Span and Word Recall) for the admin UI — other task types get a plain JSON editor until their form is written |

Notes:

- **Keep `--default-character-set=utf8mb4`** on every command — without it, French accents and
  `©` get stored garbled.
- `CreateSchema.sql` is safe to re-run (`IF NOT EXISTS` everywhere). The other four use
  `INSERT IGNORE` **except** `Migrated_Batteries.sql`, which uses plain `INSERT` — **run it only
  once** against an empty `batteries` table. Running it twice fails on the battery's unique index
  (harmless, but don't expect it to do anything the second time).
- Don't hand-insert a "test battery" — `Migrated_Batteries.sql` already imports the real ones.

Verify the import:

```bash
mysql -u ncmuser -p ncmbattery_config -e "
  SELECT (SELECT COUNT(*) FROM task_types)   AS task_types,
         (SELECT COUNT(*) FROM task_parameters) AS parameter_sets,
         (SELECT COUNT(*) FROM instruction_sets) AS instruction_sets,
         (SELECT COUNT(*) FROM batteries)    AS batteries;"
```

You should see dozens of task types, hundreds of parameter sets, dozens of instruction sets, and
more than one battery. If `batteries` shows `1`, `Migrated_Batteries.sql` didn't run — go back and
run it.

---

## Part 3 — Point the API at the database

```bash
cd MySQL/ConfigurationDatabase          # if not already there
cp db_config.example.php db_config.php
```

Edit `db_config.php` (Mac: `open -e db_config.php`; Ubuntu: `nano db_config.php`) and set:

```php
define('DB_USER', 'ncmuser');
define('DB_PASS', 'PUT-THE-SAME-PASSWORD-FROM-PART-1-HERE');
```

`db_config.php` is gitignored — it never gets committed, so `git status` not showing it is
correct. Verify the connection:

```bash
php -r 'require "db_config.php"; new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASS); echo "connection OK\n";'
```

---

## Part 4 — Run the API

**For local development (either OS), this is all you need** — PHP's built-in server, run from
the same folder:

```bash
cd MySQL/ConfigurationDatabase
php -S localhost:8000
```

Leave this terminal open; `Ctrl-C` stops it.

**Ubuntu only — for a real lab server reachable over the network**, deploy behind Apache instead:

```bash
sudo apt install apache2
sudo mkdir -p /var/www/html/api/admin
sudo cp API_battery.php API_task_config.php API_list_config.php db_config.php /var/www/html/api/
sudo cp admin/*.php /var/www/html/api/admin/           # skip create_admin_user.php — see note below
sudo systemctl enable --now apache2
```

Do **not** deploy `admin/create_admin_user.php` to a web-accessible path — it's CLI-only (it
refuses to run under a web server, but keep it off the web root anyway). Run it from the repo
checkout instead (Part 5). If you deploy to Apache, open the firewall: `sudo ufw allow 'Apache Full'`.

**Mac cannot do this** — Apple's bundled Apache has no PHP module since Monterey. A Mac is a
development machine only here; use the `php -S` dev server above.

Smoke-test either way (adjust the host/port):

```bash
curl "http://localhost:8000/API_list_config.php?resource=task_types"
curl "http://localhost:8000/API_battery.php?index=16"
```

Both should return JSON, not an error.

---

## Part 5 — Create your admin account

```bash
cd MySQL/ConfigurationDatabase/admin
php create_admin_user.php your_username
# prompts for a password (hidden), 12+ characters
```

Re-run the same command any time to reset that password. There's no self-registration endpoint
on purpose — these are privileged lab-staff accounts.

**Confirm the allowed origin.** Open `MySQL/ConfigurationDatabase/admin/admin_common.php` and
check:

```php
define('ADMIN_ALLOWED_ORIGIN', 'http://localhost:3000');
```

That's correct for local development on either OS (the website's dev server runs on port 3000).
On a real server, this must be the website's real address instead — see the production note at
the end of this doc.

---

## Part 6 — Get and configure the website

```bash
cd ~/Documents/GitHub          # or wherever you keep repos
git clone https://github.com/NCMLab/NCMBatteryWebsite.git    # skip if already cloned
cd NCMBatteryWebsite
git checkout config-library     # the current version with the admin UI; drop this once it's merged into main
cd user-website
npm install
```

`npm install` prints warnings — normal. If you see `sh: 1: react-scripts: Permission denied`, a
binary in `node_modules/.bin` lost its execute bit (usually from a copy that didn't preserve
permissions, not a normal `npm install`); fix it with a clean reinstall:
```bash
rm -rf node_modules && npm install
```

Point the website at your local API:

```bash
printf 'REACT_APP_API_BASE=http://localhost:8000\nREACT_APP_ADMIN_API_BASE=http://localhost:8000/admin\n' > .env.local
```

(`.env.local` is gitignored, one per machine. On a real deployment, point these at the deployed
Apache URLs instead, e.g. `https://your-server/api` / `https://your-server/api/admin`.)

---

## Part 7 — Run it

Two terminals, both left open:

```bash
# Terminal 1 — the API
cd MySQL/ConfigurationDatabase
php -S localhost:8000
```

```bash
# Terminal 2 — the website
cd ~/Documents/GitHub/NCMBatteryWebsite/user-website
npm start
```

A browser tab opens at `http://localhost:3000`. **Use Chrome or Firefox** — Safari may not keep
the login session. Log in with the username/password from Part 5.

Stop both with `Ctrl-C` in their terminals; MySQL can keep running.

---

## Part 8 — Verify the import actually worked

In the website:

- **New battery** page: the task-type grid populates (no "Request failed").
- **Batteries** page: lists many batteries, not just one.
- Open any battery → its task list shows real parameter/instruction set names.
- **Parameter sets** page, filtered to **Digit Span** or **Word Recall**: "Edit as copy" opens a
  real form with labeled fields. Every other task type still opens a plain JSON editor — that's
  expected; their reviewed forms haven't been written yet (see `Jason_ToDo.md`).

If any of these 500s or shows "Request failed", see Troubleshooting below.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `{"error":"Database connection failed."}` | MySQL not running, or `db_config.php` has the wrong password | Check `systemctl status mysql` / System Settings → MySQL; recheck Part 3 |
| `Access denied for user 'ncmuser'` | Password in `db_config.php` doesn't match MySQL | Fix `db_config.php` |
| `Authentication plugin 'caching_sha2_password' cannot be loaded` | Mac's old Anaconda `mysql` client | Redo the PATH fix in Part 0 |
| 500 error mentioning `Unknown column ...` | Database was built from an older `CreateSchema.sql`/partial import, not the current one | Easiest fix: do a clean reinstall (below) rather than chasing one-off `Add*.sql` upgrade scripts |
| Battery list shows only 1 battery, or parameter sets are very few | `Migrated_Batteries.sql` / `Migrated_TaskConfig.sql` never ran | Re-run Part 2 in order |
| Login works, then you're back at the login page | Wrong browser (use Chrome/Firefox), or `ADMIN_ALLOWED_ORIGIN` doesn't exactly match the site's origin | Recheck Part 5 |
| Website says "Failed to fetch" / "Request failed" | The API terminal isn't running, or `.env.local` points at the wrong host | Recheck Parts 4 and 6 |
| `sh: 1: react-scripts: Permission denied` | `node_modules` lost its execute bits (bad copy, not `npm install`) | `rm -rf node_modules && npm install` |
| `Address already in use` (port 8000 or 3000) | The API or website is already running elsewhere | Use that terminal, or `Ctrl-C` it first |

---

## Optional — Remove a previous install (clean slate)

Use this if you want to wipe everything and start Parts 1–7 over from nothing — e.g. a database
that's been through several partial upgrades and is now in an inconsistent state.

**1. Stop everything running:**
```bash
# Ctrl-C in the php -S and npm start terminals, or:
pkill -f "php -S localhost:8000"
# Ubuntu, if deployed to Apache:
sudo systemctl stop apache2
```

**2. Drop the database and user** (⚠️ this deletes every battery, parameter set and instruction
set — make sure you don't need the data, or `mysqldump ncmbattery_config > backup.sql` first):
```bash
mysql -u root -p   # Mac
sudo mysql -u root -p   # Ubuntu
```
```sql
DROP DATABASE IF EXISTS ncmbattery_config;
DROP USER IF EXISTS 'ncmuser'@'localhost';
EXIT;
```

**3. Remove local config files:**
```bash
rm -f MySQL/ConfigurationDatabase/db_config.php
rm -f ~/Documents/GitHub/NCMBatteryWebsite/user-website/.env.local
```

**4. Ubuntu only — remove an Apache deployment, if you made one:**
```bash
sudo rm -rf /var/www/html/api
```

**5. Optional — remove the website's installed packages** (forces a completely clean
`npm install` next time):
```bash
rm -rf ~/Documents/GitHub/NCMBatteryWebsite/user-website/node_modules
```

Then start again from **Part 1**.

---

## Before this goes on a real (non-localhost) server

Briefly, since it's out of scope for a from-scratch local install but easy to forget:

- HTTPS is required — the admin session cookie is `secure`, so login silently fails without it.
- Set `ADMIN_ALLOWED_ORIGIN` in `admin_common.php` to the website's real address, not `localhost`.
- Restrict the public API's CORS header (`API_battery.php`, `API_task_config.php`) to your JATOS
  server's address instead of `*`.
- Add login rate limiting — not built into the PHP yet (see "Known gaps" in
  `MySQL/ConfigurationDatabase/admin/AdminSetupInstructions.md`).

---

*Generated by Claude Sonnet 5 (Claude Code) on 2026-10-15.*
