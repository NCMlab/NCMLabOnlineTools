------------------------------------------------------------------------------------------

RAW WIKI DATA


Home

Welcome to the NeuroClinic (AKA NCM Lab Study Manager) wiki!

Here you will find information about running and configuring the web app. All documentation pages can be found in the sidebar to the right.


Auto Email System

The auto-emailing system consists of two files that can be configured:
* `/server/nodemailer.js`
* `/server/htmlEmail.js`

### nodemailer.js
This file is where the credentials for the sender email are set as well as where the send mail functionality is implemented using the nodemailer library.

The credentials format is as follows (service can remain as "hotmail" even for other services):
```javascript
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "email@somenetwork.com",
    pass: "password_here"
  }
});
```

### htmlEmail.js
This file is where the email itself is defined. The email is written with HTML to improve the styling and to be more appealing. This is just normal HTML and can be written the same way although it is good to test the email to see how it looks since it may render differently in email clients than it would as a webpage.


JATOS integrations

## Overview

This page describes some of the ways that the web app interacts with JATOS so that the website look and functionality can be adjusted via JATOS rather than needing to make code changes.

## Integration List

* All active studies are available in the home page dropdown menu.

* All active components for the chosen study appear in the side menu.

* The component/test descriptions on the Test pages correspond to the component comments.

* The Study Links page shows all active study links in active batches.

* The "Email" columns on the Study Links page corresponds with the comment for that study. If the email is invalid all email functionality will not work for that Worker/Study link.

* The Admin page shows all active JATOS users.


Running the App

# Overview

The app has two main components, the website and JATOS:

* The website portion includes the React.js client side and Node.js server side.
* The JATOS portion includes the MySQL database and JATOS framework.

To configure JATOS follow the instructions here:
https://www.jatos.org/next/JATOS-on-a-server.html

To configure the website follow the steps below depending on if you are running locally or deploying to production.

The first step in both cases is to pull that latest changes from this repo.

# Development (Local)

### Run MySQL
```
docker run --name NeuroClinicDB -e MYSQL_ROOT_PASSWORD=0swa1dC -d -p 3306:3306 mysql:latest
```
Then follow these instructions: https://www.jatos.org/JATOS-with-MySQL.html

### Run JATOS in background
```
cd ~/jatos_linux_java &&
sudo ./loader.sh start &
```

### Run Web App

```
cd ~/NeuroClinic/server &&
sudo yarn dev
```

# Production (Server)

### Log In
First SSH:
```
ssh chrisv@206.12.93.247 -i ~/.ssh/honors_key
```
Switch to account vncuser (1password - Honors Project Sudo):
```
su vncuser
```
Then enter bash (this gives arrow functions and more):
```
bash
```

### Update Files
Go to home directory and get new app files:
```
cd ~ &&
sudo rm -r NeuroClinic || true &&
git clone https://github.com/NCMLab/NeuroClinic &&
cd NeuroClinic
```

Make sure to set production to true in app.js!

### Install Server & Client
```
yarn install
```
### Build Client
```
yarn build
```
### Run
* Set to run on PORT=8081 in server/app.js.
```
cd ~/NeuroClinic/server &&
forever start app.js
```
* See running processes
```
forever list
```
* Stop the website
```
forever stopall
```

### Connect to JATOS DB
Enter MySQL Monitor (sudo pass):
```
mysql -u jatosuser -p
```

```
USE jatos;
SHOW TABLES;
```


Website Overview

## Server Overview
* IP Address: 206.12.93.247
* Location: University of Victoria (Arbutus Cloud)
* Infrastructure: OpenStack

### Domains
* https://jatos.ncmlab.ca
* http://ncmlab.ca

## Other Links
* NCM Lab GitHub: https://github.com/NCMlab
* NCM Lab Website: https://ncmlab.github.io
