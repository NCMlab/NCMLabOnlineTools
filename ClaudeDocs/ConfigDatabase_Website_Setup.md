# Battery Config Website: setup and daily start (Mac)

## Original prompt

> This looks great. I need a file in the ClaudeDocs about how to set the Config database and website installed. Then a section about how to start it, once it is setup. I need these instructions need to be very clear and simple. Then update the Jason_ToDo.md to outline exacty what I need to do. I have changed the passwords for my local mysql. I still need to update the remote dBs. I need to go through the CHECKS for digit span and word recall. I also need to start converting all of the HTML files to use the new configuration dB.

## What changed

- New file: this guide.
- Updated: [Jason_ToDo.md](Jason_ToDo.md).
- No code changed.

This guide is the short version for running everything on a Mac. The background and the
Linux-server steps are in [MacSetup_ConfigurationDatabase.md](MacSetup_ConfigurationDatabase.md),
`MySQL/ConfigurationDatabase/SetupInstructions.md` and `admin/AdminSetupInstructions.md`.

## How to use it

There are three pieces. All three must be running to use the website.

| Piece | What it is | Where it lives |
|---|---|---|
| **Database** | MySQL, holding the batteries, parameter sets and instructions | MySQL on your Mac |
| **API** | Small PHP programs the website talks to | `NCMBattery/MySQL/ConfigurationDatabase/` |
| **Website** | The pages you click on | `NCMBatteryWebsite/user-website/` |

---

## Part 1: One-time setup

Do this once per computer. If this Mac is already set up, skip to **Part 2**.

### Step 1. Check the tools are installed

Open Terminal and run each line. Each should print a version number.

```bash
/usr/local/mysql/bin/mysql --version     # needs 8.0 or newer
php --version                            # needs 8.1 or newer
node --version                           # needs 18 or newer
```

If one is missing:

- **MySQL:** download "MySQL Community Server" (macOS, DMG) from dev.mysql.com and run the
  installer. **Write down the root password you choose.**
- **PHP:** `brew install php`
- **Node:** `brew install node`

### Step 2. Make `mysql` mean the right program

Your Mac also has an older `mysql` from Anaconda, which can't log in to MySQL 8. Run this once:

```bash
echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
which mysql          # must print /usr/local/mysql/bin/mysql
```

### Step 3. Make sure MySQL is running

Open **System Settings → MySQL**. It should say the server is running; if not, click **Start**.

### Step 4. Create the database user

Pick a password for the database user `ncmuser`. Write it down; you need it in Steps 5 and 6.

```bash
mysql -u root -p
```

Type the MySQL **root** password. At the `mysql>` prompt, paste these three lines, putting
your chosen password between the quotes:

```sql
CREATE USER 'ncmuser'@'localhost' IDENTIFIED BY 'PUT-NCMUSER-PASSWORD-HERE';
GRANT ALL PRIVILEGES ON ncmbattery_config.* TO 'ncmuser'@'localhost';
EXIT;
```

### Step 5. Create the tables and load the data

Run these one at a time. Each asks for the **ncmuser** password.

```bash
cd ~/Documents/jatos_mac_java/study_assets_root/NCMBattery/MySQL/ConfigurationDatabase

mysql --default-character-set=utf8mb4 -u ncmuser -p < CreateSchema.sql
mysql --default-character-set=utf8mb4 -u ncmuser -p ncmbattery_config < SeedData_TaskTypes.sql
mysql --default-character-set=utf8mb4 -u ncmuser -p ncmbattery_config < migrate/Migrated_TaskConfig.sql
mysql --default-character-set=utf8mb4 -u ncmuser -p ncmbattery_config < migrate/Migrated_Batteries.sql
mysql --default-character-set=utf8mb4 -u ncmuser -p ncmbattery_config < migrate/Load_ParameterSchemas.sql
```

- **Keep `--default-character-set=utf8mb4`.** Without it, French accents and © are stored garbled.
- Run `CreateSchema.sql` only once. Running it a second time stops at "Duplicate key name";
  that is harmless.

### Step 6. Tell the API the database password

```bash
cd ~/Documents/jatos_mac_java/study_assets_root/NCMBattery/MySQL/ConfigurationDatabase
cp db_config.example.php db_config.php
open -e db_config.php
```

In TextEdit, change these two lines and save:

```php
define('DB_USER', 'ncmuser');
define('DB_PASS', 'PUT-NCMUSER-PASSWORD-HERE');
```

This file is never uploaded to GitHub (it's in `.gitignore`), so the password stays on this Mac.

Check that it works:

```bash
php -r 'require "db_config.php"; new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASS); echo "connection OK\n";'
```

It must print `connection OK`.

### Step 7. Create your website login

```bash
cd ~/Documents/jatos_mac_java/study_assets_root/NCMBattery/MySQL/ConfigurationDatabase/admin
php create_admin_user.php jason
```

Type a password of 12 or more characters. Nothing appears while you type; that is normal.
This is the password you'll use on the website. Run the same command again any time to reset it.

### Step 8. Allow the website to talk to the API

Open `MySQL/ConfigurationDatabase/admin/admin_common.php` and check this line reads exactly:

```php
define('ADMIN_ALLOWED_ORIGIN', 'http://localhost:3000');
```

It already does in the repo (since commit `322fa769`), so normally there's nothing to change.
On a real server it must instead be the website's real address; see Jason_ToDo.md.

### Step 9. Download the website code

```bash
cd ~/Documents/GitHub
git clone https://github.com/Keynaan-I/NCMBatteryWebsite.git    # skip if the folder already exists
cd NCMBatteryWebsite
git checkout config-library      # the new version; skip once it's merged into main
cd user-website
npm install
```

`npm install` takes a minute or two and prints some warnings. Those are normal.

### Step 10. Tell the website where the API is

```bash
cd ~/Documents/GitHub/NCMBatteryWebsite/user-website
printf 'REACT_APP_API_BASE=http://localhost:8000\nREACT_APP_ADMIN_API_BASE=http://localhost:8000/admin\n' > .env.local
```

Setup is done. Continue with Part 2.

---

## Part 2: Starting the website (every time)

You need **two Terminal windows**. Leave both open while you use the website.

**Terminal 1: start the API**

```bash
cd ~/Documents/jatos_mac_java/study_assets_root/NCMBattery/MySQL/ConfigurationDatabase
php -S localhost:8000
```

It prints `Development Server (http://localhost:8000) started`.

**Terminal 2: start the website**

```bash
cd ~/Documents/GitHub/NCMBatteryWebsite/user-website
npm start
```

After about 20 seconds a browser tab opens at http://localhost:3000.

**Log in**

- Use **Chrome**. Safari may not keep you logged in.
- Use the address `http://localhost:3000`, not `127.0.0.1`.
- Username `jason`, with the password from Step 7.

**If MySQL isn't running** (e.g. after a restart), start it first in **System Settings → MySQL**.

## Part 3: Stopping

Click each Terminal window and press **Ctrl+C**. MySQL can keep running.

## Part 4: After pulling new code

| What changed | What to run |
|---|---|
| The website (`NCMBatteryWebsite`) | `cd ~/Documents/GitHub/NCMBatteryWebsite/user-website && git pull && npm install`, then restart Terminal 2 |
| A parameter form (`schemas/*.json`) | `cd …/MySQL/ConfigurationDatabase/migrate && node load_schemas.js`, then load `migrate/Load_ParameterSchemas.sql` as in Step 5; refresh the browser |
| The PHP API files | Nothing; they're read fresh on every request |

## If something goes wrong

| What you see | What to do |
|---|---|
| "Database connection failed" | MySQL isn't running (System Settings → MySQL), or the password in `db_config.php` is wrong. Re-run the Step 6 check. |
| "Access denied for user 'ncmuser'" | The password in `db_config.php` doesn't match MySQL's. Fix it in `db_config.php`. |
| "Authentication plugin 'caching_sha2_password' cannot be loaded" | The old Anaconda `mysql` is being used. Redo Step 2. |
| Login seems to work, then you're back at the login page | Use Chrome at `http://localhost:3000`, and check Step 8. |
| Website says "Failed to fetch" / "Request failed" | Terminal 1 isn't running, or `.env.local` is wrong (Step 10). |
| "Invalid username or password" | Reset it: Step 7. |
| `Something is already running on port 3000` | The website is already open in another Terminal. Use that one, or close it with Ctrl+C. |
| `Address already in use` on port 8000 | The API is already running in another Terminal. Use that one, or close it with Ctrl+C. |

---

*Generated by Claude Opus 5.5 (Claude Code) on 2026-10-11.*
