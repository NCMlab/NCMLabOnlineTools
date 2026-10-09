# macOS Setup — NCMBattery Configuration Database (public + admin API)

## Original prompt

> Can I do the setup described in MySQL/ConfigurationDatabase/admin/SetupInstructions.md on a mac?

followed by, in reply to the offer to write a Mac-specific version:

> " I can write a Mac-specific version of these steps into the ClaudeDocs folder." --> yes

## What changed

- **New file:** `ClaudeDocs/MacSetup_ConfigurationDatabase.md` (this document).
- **No code or config was changed.** This is a macOS translation of two existing Linux/Ubuntu guides:
  - [`MySQL/ConfigurationDatabase/SetupInstructions.md`](../MySQL/ConfigurationDatabase/SetupInstructions.md): schema, seed data and the public read-only API
  - [`MySQL/ConfigurationDatabase/admin/AdminSetupInstructions.md`](../MySQL/ConfigurationDatabase/admin/AdminSetupInstructions.md): the authenticated admin write API

  Those guides remain the reference for *what* each step does and why. This document only covers *how* to do each step on a Mac.

What this Mac already has (checked 2026-10-09):

| Component | Status |
|---|---|
| MySQL Community Server 8.0.28 | Installed at `/usr/local/mysql`, running, socket at `/tmp/mysql.sock` |
| PHP 8.5 (Homebrew) | Installed with `pdo_mysql`; its default socket is also `/tmp/mysql.sock` |
| Apache 2.4 (`/usr/sbin/httpd`) | Ships with macOS but has no PHP module, so it is **not used** here |
| `mysql` on `PATH` | ⚠️ Resolves to Anaconda's **5.7** client (`/opt/anaconda3/bin/mysql`), not the server's 8.0 client |

## How to use it

Every command assumes you start from the repo root:

```bash
cd ~/Documents/jatos_mac_java/study_assets_root/NCMBattery
```

### Step 0: Use the right `mysql` client

The Anaconda 5.7 client can fail against MySQL 8 with
`Authentication plugin 'caching_sha2_password' cannot be loaded`. Put the server's own client first on your PATH:

```bash
echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
which mysql        # should print /usr/local/mysql/bin/mysql
mysql --version    # should say 8.0.x
```

(If you'd rather leave PATH alone, write `/usr/local/mysql/bin/mysql` wherever this guide says `mysql`.)

### Step 1: MySQL (replaces Part 1 of `SetupInstructions.md`)

**1.1 Install/start.** Skip `apt` and `systemctl`, because MySQL is already installed and running. To start or stop it, use **System Settings → MySQL**. To check whether it is running:

```bash
pgrep -fl mysqld
```

**1.2 Log in as root.** Use no `sudo`. The root password is the one you chose in the MySQL installer.

```bash
mysql -u root -p
```

**1.3 Create the app user.** Run the same SQL as the Linux guide:

```sql
CREATE USER 'ncmuser'@'localhost' IDENTIFIED BY 'choose-a-password';
GRANT ALL PRIVILEGES ON ncmbattery_config.* TO 'ncmuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

**1.4–1.5 Schema and seed data.** The commands are identical to the Linux guide. Only the repo path differs:

```bash
mysql -u ncmuser -p < MySQL/ConfigurationDatabase/CreateSchema.sql
mysql -u ncmuser -p ncmbattery_config < MySQL/ConfigurationDatabase/SeedData_TaskTypes.sql
mysql -u ncmuser -p ncmbattery_config -e "SHOW TABLES;"
```

`SHOW TABLES` should now also list `admin_users`, which the admin API needs. `CreateSchema.sql` uses `IF NOT EXISTS` throughout, so you can safely re-run it.

**1.6 Test battery.** Same SQL as the Linux guide, unchanged.

### Step 2: Database credentials (replaces §2.3 / admin Part 1.5)

On a Mac you do this directly in the working copy, with nothing copied to `/var/www`:

```bash
cd MySQL/ConfigurationDatabase
cp db_config.example.php db_config.php
open -e db_config.php      # or: nano db_config.php
```

Set `DB_USER` / `DB_PASS` to the values from Step 1.3. Leave `DB_HOST` as `'localhost'`. PHP and MySQL on this Mac both use `/tmp/mysql.sock`, so the socket connection works as-is. If you ever get `SQLSTATE[HY000] [2002] No such file or directory`, change it to `'127.0.0.1'`.

`db_config.php` is gitignored, so it will not show up in `git status`. That is expected.

### Step 3: Serve the PHP files (replaces §2.1–2.2 / admin Part 3 deploy)

Skip Apache. Since macOS Monterey, Apple's Apache no longer includes PHP. Use PHP's built-in development server, run **from `MySQL/ConfigurationDatabase`**:

```bash
cd MySQL/ConfigurationDatabase
php -S localhost:8000
```

Leave that terminal open. Stop it with Ctrl-C. Because it serves the repo folder directly, the layout the admin API expects (`admin/` with `db_config.php` one level up) is already correct, so you don't need to copy anything.

| Linux URL | Mac URL |
|---|---|
| `http://localhost/api/API_battery.php` | `http://localhost:8000/API_battery.php` |
| `http://localhost/api/API_task_config.php` | `http://localhost:8000/API_task_config.php` |
| `http://localhost/api/API_list_config.php` | `http://localhost:8000/API_list_config.php` |
| `http://localhost/api/admin/API_admin_*.php` | `http://localhost:8000/admin/API_admin_*.php` |

> `localhost:8000` is only reachable from this Mac. The built-in server is for development only. Do not use it to serve real participants. Production still follows the Linux/Apache guide.

### Step 4: Test the public API (replaces §2.4–2.5)

In a second terminal:

```bash
curl "http://localhost:8000/API_task_config.php?type=parameters&task=Word+Recall&name=RAVLT_Spoken_Immediate"
curl "http://localhost:8000/API_task_config.php?type=instructions&task=Word+Recall&name=Default&lang=EN"
curl "http://localhost:8000/API_battery.php?index=16"
curl "http://localhost:8000/API_list_config.php?resource=task_types"
```

If you get `{"error": "Database connection failed."}`, check `db_config.php` and confirm `pgrep -fl mysqld` shows MySQL running. Request errors are printed in the `php -S` terminal.

### Step 5: Point JATOS pages at the local API (replaces §2.6)

In `html/JATOS/WordRecallDatabaseConfig.html` (line ~67), change:

```javascript
const DB_API_URL = 'http://127.0.0.1/api/API_task_config.php';
```

to:

```javascript
const DB_API_URL = 'http://localhost:8000/API_task_config.php';
```

The public API sends `Access-Control-Allow-Origin: *`, so pages served by JATOS on `localhost:9000` can call it. Switch the URL back before committing or deploying.

### Step 6: Admin account (admin Part 2)

This step works unchanged on a Mac:

```bash
cd MySQL/ConfigurationDatabase/admin
php create_admin_user.php your_username
# prompts for a password (hidden), 12+ characters
```

### Step 7: Admin API: allowed origin and HTTPS (admin Part 3)

**Allowed origin.** In `admin/admin_common.php`, set `ADMIN_ALLOWED_ORIGIN` to exactly where NCMBatteryWebsite runs locally. For a React dev server that is usually:

```php
define('ADMIN_ALLOWED_ORIGIN', 'http://localhost:3000');
```

The value has to match exactly. `http://127.0.0.1:3000` is a different origin from `http://localhost:3000`. Do not commit this local value.

**HTTPS.** The admin session cookie is set with `secure: true`. On a real server that means HTTPS is required. Locally, **Chrome and Firefox treat `http://localhost` as secure** and still send the cookie, so login works without TLS. **Safari may not**, so test the admin UI in Chrome. If login "succeeds" but `API_admin_whoami.php` says you are not logged in, the cookie is being dropped, and this is usually why.

`localhost:3000` (React) and `localhost:8000` (PHP) count as the same *site*, because ports are ignored for SameSite purposes. The `SameSite=Strict` cookie is therefore still sent on the frontend's `fetch(..., { credentials: 'include' })` calls.

### Quick checklist

1. `which mysql` → `/usr/local/mysql/bin/mysql`
2. Schema and seed loaded, and `SHOW TABLES` includes `admin_users`
3. `MySQL/ConfigurationDatabase/db_config.php` exists with real credentials
4. `php -S localhost:8000` is running from `MySQL/ConfigurationDatabase`
5. The `curl` tests in Step 4 return JSON
6. An admin user has been created with `create_admin_user.php`
7. `ADMIN_ALLOWED_ORIGIN` matches the frontend's origin, and you are testing in Chrome

---

*Generated by Claude Opus 5.5 (Claude Code) on 2026-10-09.*
