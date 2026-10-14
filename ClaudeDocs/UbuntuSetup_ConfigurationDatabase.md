# Ubuntu Setup — NCMBattery Configuration Database (public + admin API)

This is a single, start-to-finish walkthrough for installing the NCMBattery Configuration
Database on an Ubuntu machine — MySQL, the public read-only API, and the authenticated admin
write API. It consolidates and sequences two existing guides so you can follow it top to bottom
on a fresh box:

- [`MySQL/ConfigurationDatabase/SetupInstructions.md`](../MySQL/ConfigurationDatabase/SetupInstructions.md) — schema, seed data, public API
- [`MySQL/ConfigurationDatabase/admin/AdminSetupInstructions.md`](../MySQL/ConfigurationDatabase/admin/AdminSetupInstructions.md) — admin write API

Those two files remain the detailed reference for *why* each piece exists (CORS design, CSRF,
copy-on-edit, etc.). This document is the *how*, in one pass, for Ubuntu specifically. If you only
need the public read-only API (no battery-builder admin UI), stop after Step 6.

Tested against Ubuntu 22.04/24.04 LTS with MySQL 8.0 and Apache 2.4 + PHP 8.1+.

## 0. What you need before starting

- A fresh or existing Ubuntu server/VM/desktop with `sudo` access.
- This repo checked out somewhere on that machine, e.g.:
  ```bash
  cd /home/jason/jatos_linux_java/study_assets_root/NCMBattery
  ```
  All paths below are relative to the repo root unless marked otherwise.
- Decide, before you start, which of the two deployment shapes you want:
  - **Local/dev**: run PHP's built-in server straight from the working copy — nothing copied
    anywhere, fastest to test. See Step 5, Option A.
  - **Lab/production**: Apache serving files copied to `/var/www/html/api/`. See Step 5, Option B.
    Use this if other machines on the network (or the real JATOS server) need to reach the API.

---

## Step 1 — Install and start MySQL

```bash
mysql --version
```

If that fails:

```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
sudo systemctl enable mysql
sudo mysql_secure_installation
```

`mysql_secure_installation` sets the root password and removes test/anonymous accounts — run it
once on a fresh install.

Check it's running at any time with:

```bash
sudo systemctl status mysql
```

---

## Step 2 — Create the database user

Log in as root (note the `sudo` — Ubuntu's default MySQL root account authenticates via the OS,
not a password, until you change that):

```bash
sudo mysql -u root -p
```

At the `mysql>` prompt, create a dedicated app user. Replace `ncmuser` and the password with your
own — write them down, you'll need them again in Step 4:

```sql
CREATE USER 'ncmuser'@'localhost' IDENTIFIED BY 'StrongPassword123!';
GRANT ALL PRIVILEGES ON ncmbattery_config.* TO 'ncmuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

---

## Step 3 — Load the schema and seed data

From the repo root:

```bash
mysql -u ncmuser -p < MySQL/ConfigurationDatabase/CreateSchema.sql
mysql -u ncmuser -p ncmbattery_config < MySQL/ConfigurationDatabase/SeedData_TaskTypes.sql
```

Verify:

```bash
mysql -u ncmuser -p ncmbattery_config -e "SHOW TABLES;"
```

Expected tables:

```
batteries
battery_tasks
session_chooser_configs
task_instructions
task_parameters
task_types
ui_labels
admin_users
```

`admin_users` is only needed if you plan to do Steps 7–10 (the admin API) — it's created either
way since `CreateSchema.sql` makes all tables unconditionally. Every `CREATE TABLE` uses
`IF NOT EXISTS`, so re-running this file later (e.g. after a `git pull` that adds a table) is
always safe.

Spot-check the seed data:

```bash
mysql -u ncmuser -p ncmbattery_config -e "SELECT task_type_id, task_name FROM task_types;"
mysql -u ncmuser -p ncmbattery_config -e "SELECT parameter_name, JSON_KEYS(parameters_json) FROM task_parameters LIMIT 5;"
mysql -u ncmuser -p ncmbattery_config -e "SELECT instruction_name, language FROM task_instructions;"
```

---

## Step 4 — (Optional) Insert a test battery

Useful for exercising `API_battery.php` end-to-end before wiring up real data. This inserts
battery index 16, the main English battery:

```bash
mysql -u ncmuser -p ncmbattery_config
```

```sql
INSERT INTO batteries (
    battery_index, battery_name, description,
    battery_instructions, language, run_audio_test,
    footer, short_name, header_buttons, redirect_url
) VALUES (
    16,
    'H-10-23-9755',
    'Main English Battery',
    'Welcome to the University of Ottawa''s Neural Cognitive Mapping Laboratory - Cognitive Evaluation',
    'EN', 1,
    '©NCMLab 2025',
    'NCMLab',
    '["Quit","Stop"]',
    'https://docs.google.com/forms/d/e/1FAIpQLSf7icO9lOneaStuFgt0O5abVpTMhOfNJ2c9Y_SiXoG04Oe2hA/viewform?usp=sf_link'
);

SET @battery_id = (SELECT battery_id   FROM batteries      WHERE battery_index   = 16);
SET @task_id    = (SELECT task_type_id FROM task_types     WHERE task_name       = 'Word Recall');
SET @param_id   = (SELECT parameter_id FROM task_parameters WHERE parameter_name = 'RAVLT_Spoken_Immediate');
SET @instr_id   = (SELECT instruction_id FROM task_instructions WHERE instruction_name = 'Default' AND language = 'EN');

INSERT INTO battery_tasks (battery_id, task_type_id, sort_order, parameter_id, instruction_id, icon_name)
VALUES (@battery_id, @task_id, 7, @param_id, @instr_id, 'Immediate');
```

---

## Step 5 — Install Apache and PHP, and choose where the API lives

```bash
apache2 -v
php -v
php -m | grep pdo_mysql
```

If any of those are missing:

```bash
sudo apt install apache2 php php-mysql
sudo systemctl start apache2
sudo systemctl enable apache2
```

If `pdo_mysql` doesn't show up in `php -m` after that, install it explicitly and restart Apache:

```bash
sudo apt install php-mysql
sudo systemctl restart apache2
```

Now pick one of two layouts:

### Option A — Local/dev: PHP's built-in server (no Apache, no copying)

```bash
cd MySQL/ConfigurationDatabase
php -S localhost:8000
```

Leave that terminal open; `Ctrl-C` stops it. Because it serves the repo folder directly, the
layout the admin API expects (`admin/` one level below `db_config.php`) is already correct.

| Endpoint | URL |
|---|---|
| Battery | `http://localhost:8000/API_battery.php?index=16` |
| Parameters/instructions | `http://localhost:8000/API_task_config.php?...` |
| List config | `http://localhost:8000/API_list_config.php?resource=task_types` |
| Admin | `http://localhost:8000/admin/API_admin_*.php` |

Only reachable from this machine — fine for development, not for serving real participants.

### Option B — Lab/production: Apache document root

```bash
sudo mkdir -p /var/www/html/api
sudo cp MySQL/ConfigurationDatabase/API_battery.php       /var/www/html/api/
sudo cp MySQL/ConfigurationDatabase/API_task_config.php   /var/www/html/api/
sudo cp MySQL/ConfigurationDatabase/API_list_config.php   /var/www/html/api/
sudo cp MySQL/ConfigurationDatabase/db_config.example.php /var/www/html/api/
```

If you also want the admin API (Step 7 onward), copy the `admin/` folder alongside it so the
relative paths line up (`admin_common.php` loads `../db_config.php`):

```bash
sudo mkdir -p /var/www/html/api/admin
sudo cp MySQL/ConfigurationDatabase/admin/admin_common.php                   /var/www/html/api/admin/
sudo cp MySQL/ConfigurationDatabase/admin/API_admin_login.php                /var/www/html/api/admin/
sudo cp MySQL/ConfigurationDatabase/admin/API_admin_logout.php               /var/www/html/api/admin/
sudo cp MySQL/ConfigurationDatabase/admin/API_admin_whoami.php               /var/www/html/api/admin/
sudo cp MySQL/ConfigurationDatabase/admin/API_admin_get.php                  /var/www/html/api/admin/
sudo cp MySQL/ConfigurationDatabase/admin/API_admin_create_parameter.php     /var/www/html/api/admin/
sudo cp MySQL/ConfigurationDatabase/admin/API_admin_create_instruction.php   /var/www/html/api/admin/
sudo cp MySQL/ConfigurationDatabase/admin/API_admin_create_battery.php       /var/www/html/api/admin/
sudo cp MySQL/ConfigurationDatabase/admin/API_admin_delete.php               /var/www/html/api/admin/
sudo cp MySQL/ConfigurationDatabase/admin/API_admin_set_battery_active.php   /var/www/html/api/admin/
```

Do **not** copy `create_admin_user.php` into `/var/www/html` or anywhere web-accessible — it's a
CLI-only script (it refuses to run under a web server, but keep it off the web root anyway; run
it from the repo checkout instead, as in Step 8).

| Endpoint | URL |
|---|---|
| Battery | `http://yourserver/api/API_battery.php?index=16` |
| Parameters/instructions | `http://yourserver/api/API_task_config.php?...` |
| List config | `http://yourserver/api/API_list_config.php?resource=task_types` |
| Admin | `http://yourserver/api/admin/API_admin_*.php` |

If the server is reachable over the network and you've enabled `ufw`, open port 80/443:

```bash
sudo ufw allow 'Apache Full'
```

---

## Step 6 — Database credentials for the PHP files

Every PHP file (public and admin) reads DB credentials from one shared `db_config.php`, which
lives next to `API_battery.php` — i.e. in whichever location you chose in Step 5. `db_config.php`
is in `.gitignore`, so it never gets committed even with `git add -A`; only the placeholder
`db_config.example.php` is tracked.

**Option A (dev, working copy):**

```bash
cd MySQL/ConfigurationDatabase
cp db_config.example.php db_config.php
nano db_config.php
```

**Option B (Apache document root):**

```bash
cd /var/www/html/api
sudo mv db_config.example.php db_config.php
sudo nano db_config.php
```

Either way, fill in the values from Step 2:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'ncmbattery_config');
define('DB_USER', 'ncmuser');
define('DB_PASS', 'StrongPassword123!');
define('DB_CHARSET', 'utf8mb4');
```

`git status` should **not** show `db_config.php` as changed/untracked — that's `.gitignore`
working correctly.

---

## Step 7 — Test the public API

```bash
curl "http://localhost:8000/API_task_config.php?type=parameters&task=Word+Recall&name=RAVLT_Spoken_Immediate"   # Option A
# or, for Option B:
curl "http://localhost/api/API_task_config.php?type=parameters&task=Word+Recall&name=RAVLT_Spoken_Immediate"

curl ".../API_task_config.php?type=instructions&task=Word+Recall&name=Default&lang=EN"
curl ".../API_battery.php?index=16"
curl ".../API_list_config.php?resource=task_types"
```

A healthy response looks like:

```json
{
  "FolderName": "Set001/",
  "WordList": "RAVLT",
  "RecallType": "Spoken",
  ...
}
```

`{"error": "Database connection failed."}` means `db_config.php` has wrong credentials, or MySQL
isn't running (`sudo systemctl status mysql`). PHP-level errors (syntax, missing file) show up in
the terminal running `php -S` (Option A) or in `/var/log/apache2/error.log` (Option B).

---

## Step 8 — Point JATOS pages at the API

In `html/JATOS/WordRecallDatabaseConfig.html`, find:

```javascript
const DB_API_URL = 'http://localhost/api/API_task_config.php';
```

and change it to match wherever you deployed in Step 5 — e.g. `http://localhost:8000/API_task_config.php`
for local dev, or `http://192.168.1.50/api/API_task_config.php` / `https://lab.ncmlab.ca/api/API_task_config.php`
for a networked lab server. Switch it back (or leave it pointed at the production server) before
committing.

The public API sends `Access-Control-Allow-Origin: *` by default, which is fine for development.
**Before production**, lock it down in `API_task_config.php` and `API_battery.php`:

```php
header('Access-Control-Allow-Origin: https://your-jatos-server.ca');
```

This is the end of the setup if you only need the read-only public API. The rest of this guide
covers the authenticated admin write API used by the separate NCMBatteryWebsite battery-builder
UI.

---

## Step 9 — Create your first admin account

Admin accounts are lab-staff only — there's no HTTP sign-up endpoint on purpose. Run this on the
server itself, from the repo checkout (not a web-accessible copy):

```bash
cd MySQL/ConfigurationDatabase/admin
php create_admin_user.php your_username
# prompts for a password (not echoed), 12+ characters required
```

Re-running it for the same username updates the password. The script refuses to run under a web
server (`php_sapi_name() !== 'cli'`), so it's safe even if this folder is accidentally reachable
over HTTP.

---

## Step 10 — Configure the admin API's allowed origin and HTTPS

In `admin/admin_common.php` (the copy you deployed in Step 5 Option B, if applicable), set the
exact origin NCMBatteryWebsite will be served from. This **cannot** be `*` — these requests carry
a session cookie, and browsers reject wildcard CORS on credentialed requests:

```php
define('ADMIN_ALLOWED_ORIGIN', 'https://battery-admin.your-lab.edu');
```

For local development against a React dev server, that's typically:

```php
define('ADMIN_ALLOWED_ORIGIN', 'http://localhost:3000');
```

The value must match the frontend's origin exactly — `http://127.0.0.1:3000` is a different
origin from `http://localhost:3000`. Don't commit a local value.

**HTTPS.** The admin session cookie is set `secure: true`, so browsers refuse to send it over
plain HTTP on anything but `localhost`. For a real deployment, put Apache behind TLS (e.g. with
`certbot`/Let's Encrypt) before testing login:

```bash
sudo apt install certbot python3-certbot-apache
sudo certbot --apache -d your-domain.example
```

For local development, `http://localhost` is treated as secure by Chrome and Firefox, so login
works without TLS — but test in Chrome/Firefox, not Safari, if you're developing cross-platform.

---

## Step 11 — Test the admin API

```bash
# Log in and capture the session cookie + CSRF token
curl -i -X POST http://localhost/api/admin/API_admin_login.php \
  -H 'Content-Type: application/json' \
  -d '{"username":"your_username","password":"your_password"}' \
  -c cookies.txt

# Confirm the session is recognized
curl -b cookies.txt http://localhost/api/admin/API_admin_whoami.php
```

If `API_admin_whoami.php` reports you're not logged in right after a "successful" login, the
cookie is being dropped — almost always because `ADMIN_ALLOWED_ORIGIN` doesn't exactly match the
calling origin, or you're testing over plain HTTP against a non-localhost domain.

The real frontend client (`NCMBatteryWebsite/user-website/src/api.js`, `AuthContext.js`,
`Login.js`) always sends `credentials: 'include'` and, for writes, an `X-CSRF-Token` header with
the token returned at login — see `AdminSetupInstructions.md` Part 4 for the full request shapes.

---

## Step 12 — Security checklist before going live

- [ ] `ADMIN_ALLOWED_ORIGIN` is the real frontend origin, not `*` or a dev URL
- [ ] The admin API is served over HTTPS (session cookie is `secure`)
- [ ] `CORS` on the **public** API (`API_battery.php`/`API_task_config.php`) is scoped to your
      JATOS server's origin, not left at `*`
- [ ] `db_config.php` exists only on the server/working copies that need it, is never committed,
      and has a strong `DB_PASS`
- [ ] `create_admin_user.php` is not reachable over HTTP
- [ ] Consider adding login rate limiting (e.g. `fail2ban` watching Apache's access log for
      repeated 401s on `API_admin_login.php`) — not built into the PHP itself yet

---

## Quick checklist (fresh install, end to end)

1. `mysql --version` works; `sudo systemctl status mysql` shows active
2. `ncmuser` created with privileges on `ncmbattery_config`
3. Schema + seed data loaded; `SHOW TABLES` includes `admin_users`
4. (Optional) test battery index 16 inserted
5. Apache + PHP + `pdo_mysql` installed, or `php -S localhost:8000` running for dev
6. `db_config.php` exists next to `API_battery.php` with real credentials
7. `curl` tests against `API_task_config.php` / `API_battery.php` / `API_list_config.php` return JSON
8. `WordRecallDatabaseConfig.html`'s `DB_API_URL` points at the right host
9. Admin account created with `create_admin_user.php`
10. `ADMIN_ALLOWED_ORIGIN` matches the frontend origin exactly, and HTTPS is in place for anything beyond localhost
11. `API_admin_login.php` + `API_admin_whoami.php` round-trip succeeds
12. Security checklist above reviewed

---

## Reference: file → purpose → destination

| File | Purpose | Destination |
|---|---|---|
| `CreateSchema.sql` | Creates database, 8 tables, indexes, view | `mysql < CreateSchema.sql` |
| `SeedData_TaskTypes.sql` | 27 task types + Word Recall example | `mysql ncmbattery_config < SeedData_TaskTypes.sql` |
| `db_config.example.php` → `db_config.php` | Shared DB credentials | Next to `API_battery.php` |
| `API_battery.php`, `API_task_config.php`, `API_list_config.php` | Public, read-only, CORS `*` | Apache doc root or dev server |
| `admin/create_admin_user.php` | Creates/updates a lab-staff login | CLI only — never web-accessible |
| `admin/admin_common.php`, `admin/API_admin_*.php` | Authenticated writes, one named CORS origin | `admin/` subfolder next to the public API |
| `html/JATOS/WordRecallDatabaseConfig.html` | JATOS study page reading from the public API | Uploaded to JATOS as a study component |

---

*Generated by Claude Sonnet 5 (Claude Code) on 2026-10-14.*
