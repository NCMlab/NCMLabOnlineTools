# Useful Tools & Commands — NCMBattery

A cheat sheet of day-to-day commands for working with this project. For full setup from
scratch, see [SetupInstructions.md](SetupInstructions.md). This doc assumes the database and
PHP API are already set up and just collects the commands you'll reach for repeatedly.

---

## Configuration database (MySQL)

Connect (prompts for the `ncmuser` password):

```bash
mysql -u ncmuser -p ncmbattery_config
```

Or run a single query without an interactive session:

```bash
mysql -u ncmuser -p ncmbattery_config -e "SOME QUERY;"
```

### Check the admin usernames

Admin (battery-builder website) logins live in the `admin_users` table —
`username`, a bcrypt `password_hash`, whether the account is `active`, and `created_at`.
Passwords are never stored in plain text or recoverable, so this only lists *who* has an
account, not their passwords.

```sql
SELECT admin_user_id, username, active, created_at FROM admin_users;
```

One-liner from the shell:

```bash
mysql -u ncmuser -p ncmbattery_config -e "SELECT admin_user_id, username, active, created_at FROM admin_users;"
```

To check a single username exists and is active:

```sql
SELECT username, active FROM admin_users WHERE username = 'your_username';
```

To deactivate an account without deleting it (there's no DELETE endpoint for this on purpose):

```sql
UPDATE admin_users SET active = 0 WHERE username = 'someone_who_left';
```

To create a new admin account or reset a password, don't write to the table directly — use the
CLI script, which hashes the password correctly:

```bash
cd MySQL/ConfigurationDatabase/admin
php create_admin_user.php a_username
# prompts for a password (hidden), 12+ characters; re-running for an
# existing username updates their password
```

### Show all MySQL server accounts

This is different from the `admin_users` table above — that's app-level logins for the
battery-builder website; this is the actual MySQL server accounts (`ncmuser`, `readonly_user`,
`root`, etc.), the ones you'd change passwords for or audit for access. Needs a login with
rights to the `mysql` system database, e.g. `root`:

```bash
sudo mysql -e "SELECT user, host FROM mysql.user;"
```

or from an interactive root session:

```sql
SELECT user, host FROM mysql.user;
```

### Other quick lookups

```sql
-- All task types
SELECT task_type_id, task_name FROM task_types ORDER BY task_name;

-- Parameter sets for one task type
SELECT parameter_name, language
FROM task_parameters tp
JOIN task_types tt ON tt.task_type_id = tp.task_type_id
WHERE tt.task_name = 'Word Recall';

-- Instruction sets for one task type
SELECT instruction_set_id, instruction_name FROM instruction_sets
WHERE task_type_id = (SELECT task_type_id FROM task_types WHERE task_name = 'Word Recall');

-- A full battery, tasks in order
SELECT * FROM v_battery_tasks WHERE battery_index = 16;

-- Which tables exist
SHOW TABLES;
```

---

## PHP API (local dev server)

Run straight from the working copy — no Apache needed for local testing:

```bash
cd MySQL/ConfigurationDatabase
php -S localhost:8000
```

Smoke-test the public API:

```bash
curl "http://localhost:8000/API_task_config.php?type=parameters&task=Word+Recall&name=RAVLT_Spoken_Immediate"
curl "http://localhost:8000/API_battery.php?index=16"
curl "http://localhost:8000/API_list_config.php?resource=task_types"
```

`{"error": "Database connection failed."}` means `db_config.php` has the wrong credentials, or
MySQL isn't running (`sudo systemctl status mysql` / `pgrep -fl mysqld` on a Mac).

Smoke-test the admin API (needs an admin account first — see above):

```bash
curl -i -X POST http://localhost:8000/admin/API_admin_login.php \
  -H 'Content-Type: application/json' \
  -d '{"username":"your_username","password":"your_password"}' \
  -c cookies.txt

curl -b cookies.txt http://localhost:8000/admin/API_admin_whoami.php
```

---

## NCMBatteryWebsite (React admin UI)

```bash
cd ~/Documents/Github/NCMBatteryWebsite/user-website
npm start
```

If you see `sh: 1: react-scripts: Permission denied`, a binary in `node_modules/.bin` lost its
execute bit (usually from a copy/zip that didn't preserve permissions). Fix with a clean
reinstall:

```bash
rm -rf node_modules
npm install
```

Check which branch/commit you're actually running, and whether it matches GitHub, before
assuming local changes are missing or extra:

```bash
git status
git fetch origin
git log HEAD..origin/main --oneline   # commits on GitHub you don't have
git log origin/main..HEAD --oneline   # commits you have that aren't pushed
```

---

## Git gotchas specific to this repo

- `db_config.php` is gitignored on purpose (real DB credentials). If `git status` doesn't show
  it after you create it from `db_config.example.php`, that's correct, not a bug.
- `NCMBatteryWebsite`'s `node_modules` was accidentally committed to git with no `.gitignore`
  until 2026-10-14 (commit `bc26efd6`). If you're working from a clone made *before* that fix,
  expect a large diff under `node_modules/` the first time you reinstall packages — that's the
  old tracked copy vs. a fresh `npm install`, not real changes. Pull latest `main` to get the
  `.gitignore` and avoid this.

---

*Generated by Claude Sonnet 5 (Claude Code) on 2026-10-15.*
