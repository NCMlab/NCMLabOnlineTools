# Installation

This page walks you through installing the 3C Platform front-end and, optionally, the NeuroClinic back-end. Complete the front-end installation first; the NeuroClinic is only needed if you want the full result-review portal.

---

## Front-End (3C Platform)

The front-end requires JATOS and jsPsych. Follow these steps in order.

### 1. Download the JATOS export

Download the pre-packaged JATOS study file from the dedicated export repository:

```
https://github.com/NCMlab/JATOS_NCM_export
```

This repository contains the `ncm_battery.jzip` file you will import into JATOS in step 5.

### 2. Download jsPsych 7.3

The platform is built on jsPsych 7.3. Download the release zip directly:

```
https://github.com/jspsych/jsPsych/releases/download/jspsych%407.3.0/jspsych.zip
```

Extract the zip and place the contents inside the `jspsych/` folder of your NCMBattery study directory.

### 3. Install JATOS

Follow the official JATOS installation guide for your operating system:

```
https://www.jatos.org/Installation.html
```

JATOS can run on Windows, macOS, or Linux. For a local laptop install no database configuration is needed — JATOS uses an embedded H2 database by default.

### 4. Start JATOS and log in

Start the JATOS server, then open a browser and navigate to:

```
http://localhost:9000/
```

Log in with the default credentials (admin / admin) and change the password when prompted.

### 5. Import the study

1. In the JATOS interface, go to **Studies**.
2. Click **Import Study**.
3. Select the `ncm_battery.jzip` file you downloaded in step 1.
4. JATOS will extract the study and create a folder called `NCMBattery` inside `study_assets_root/`.

!!! warning "Keep the Central Executive first"
    The **Central Executive** component must remain the first component in the JATOS study component list. Do not reorder or delete it. Every session begins with the Central Executive, which reads the URL parameters and directs participants to the correct tasks.

### 6. Link to the NCMLabOnlineTools repository

The `NCMBattery` folder in `study_assets_root/` is a Git repository. Link it to the upstream source so you can pull updates:

```bash
cd /path/to/jatos/study_assets_root/NCMBattery
git remote add origin https://github.com/NCMlab/NCMLabOnlineTools
git fetch origin
```

You can then pull updates at any time with `git pull origin main`.

---

## Back-End (NeuroClinic) — Optional

The NeuroClinic is a ReactJS web application that connects to JATOS through MySQL. It provides a rich interface for reviewing participant results, correcting scores, and managing study links.

!!! note "MySQL required"
    The NeuroClinic requires JATOS to use MySQL rather than the default embedded H2 database. Complete the MySQL configuration before installing the NeuroClinic.

### 1. Configure JATOS to use MySQL

Follow the official guide:

```
https://www.jatos.org/JATOS-with-MySQL.html
```

Create a dedicated database and user for JATOS, then update `conf/jatos.conf` with the MySQL connection details.

### 2. Install Node.js tools

You need Yarn and NVM (Node Version Manager):

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc

# Install a recent LTS version of Node
nvm install --lts

# Install Yarn
npm install -g yarn
```

### 3. Clone the NeuroClinic repository

```bash
git clone https://github.com/NCMLab/NeuroClinicPublic
cd NeuroClinicPublic
```

### 4. Install dependencies and build

```bash
# Install server dependencies
cd server
yarn install

# Install client dependencies and build the front-end
cd ../client
yarn install
yarn build
```

### 5. Configure database credentials

Open `server/app.js` and update the MySQL connection block with your database host, port, database name, username, and password.

### 6. Start the NeuroClinic server

```bash
cd /path/to/NeuroClinicPublic
sudo yarn dev
```

### 7. Open the NeuroClinic

Navigate to:

```
http://localhost:3000/clinic_app
```

!!! tip "Running as a service"
    For a persistent deployment, consider running the NeuroClinic under a process manager such as `pm2` so it restarts automatically after reboots.
