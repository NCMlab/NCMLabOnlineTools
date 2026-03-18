# Installation and Setup

## For a Local Installation
1. Download the latest version of the 3C Platform for JATOS 
    a. https://github.com/NCMlab/JATOS_NCM_export
    b. This is the entire repository organized within the JATOS environment.
    c. This has the advantage of already having the JATOS components created and in the correct order.
2. Download the Distribution Archive of jsPsych version 7.3
    a. https://github.com/jspsych/jsPsych/releases/download/jspsych%407.3.0/jspsych.zip 
3. Download and install the latest version of JATOS
    a. https://www.jatos.org/Installation.html 
4. Once the JATOS server is running, go to the following local site and login:
    a. http://localhost:9000/
5. Once in the JATOS interface, you will need to import the NCM Study
    a. Press the Studies button in the top left corner.
    b. Then press the “Import Study” button and select the ncm_battery.jzip file downloaded in step 1.
    c. You will now see all the components with the Central Executive being the first component. 
        i. The order is not important for the other components, as long as the Central Executive is first.
    d. This will also create the folder named NCMBattery in the “study_assessts_root” folder of the JATOS directory.
    e. The NCMBattery is the primary repository for the 3C Platform. It can be linked to the remote GitHub repository to pull updates:
        i. https://github.com/NCMlab/NCMLabOnlineTools 

## Setup an Experiment 
1. Within the Batteries.js file add the text shown in Figure 2 and reprinted below:

> Var List = []
> List.push({
>   Task: "Word Recognition",
>   Parameters: "WordRecog_Spoken",
>   Instructions: "Default",
>   IconName: "Word Recog",
> });
> List.push({
>   Task: "Matrix Questionnaire",
>   Parameters: "GAS_001",
>   Instructions: "Default",
>   IconName: "GAS",
> });
> 
> List.push({
>   Task: "Matrix Questionnaire",
>   Parameters: "GDS_001",
>   Instructions: "Default",
>   IconName: "GDS",
> });
> BatteryList.push({
>   index: 123, 
>   name:'Neural Cognitive Mapping Lab', 
>   description: '',
>   TaskList: List,
>   BatteryInstructions: "Neural Cognitive Mapping Lab",
>   HeaderButtonsToShow: ['Home','Quit','Stop'],
>   Redirect: www.uottawa.ca
> })


Within the JATOS interface setup a new Batch following the JATOS instructions:
https://www.jatos.org/3.6.x/Run-your-Study-with-Worker-and-Batch-Manager.html 
Create a study link and add URL parameters for the usage type and the battery index:
https://127.0.0.1/publix/8BexzI7alDM?UsageType=UserChoice&Battery=123 

Setup the NeuroClinic
The NeuroClinic is a ReactJS site that requires that JATOS was installed using a MySQL database. 
By default JATOS is installed with a builtin database. 
Modify the JATOS install to use MySQL using these instructions
https://www.jatos.org/JATOS-with-MySQL.html 
Install Yarn
This can be done using the Yarn instructions
https://yarnpkg.com/getting-started/install 
It can also be installed using Homebrew 
Install Homebrew via: https://brew.sh/ 


Install Yarn using Homebrew
brew install brew
brew install yarn
Install NVM
https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/
Install the NeuroClinic
cd ~ &&
git clone https://github.com/NCMLab/NeuroClinicPublic &&
cd NeuroClinic
cd server
yarn install
cd ..
cd client
yarn install
yarn build

Ensure that the NeuroClinic can access the MySQL database
Update the file server/app.js 
Enter your credentials where you see:
user: 'MYSQL-USERNAME',
 password: 'MYSQL-PASSWORD',
Start NeuroClinic
sudo yarn dev
Open the interface by visiting the URL:
http://localhost:3000/clinic_app 











