<?php
/**
 * db_config.example.php
 * Template for db_config.php, which every PHP file in this folder (and
 * admin/) loads its database credentials from.
 *
 * db_config.php itself is listed in .gitignore -- it is never committed,
 * even with `git add -A`, so real credentials never end up in source
 * control or on GitHub. This example file IS committed, with placeholder
 * values only, so anyone setting this up knows what to create.
 *
 * Setup:
 *   cp db_config.example.php db_config.php
 *   # then edit db_config.php with your real values
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'ncmbattery_config');
define('DB_USER', 'ncmuser');
define('DB_PASS', '0swa1dC');
define('DB_CHARSET', 'utf8mb4');
