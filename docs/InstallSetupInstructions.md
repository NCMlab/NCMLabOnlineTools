# Installation and Setup

## For a Local Installation
1. Download the latest version of the 3C Platform for JATOS 
    1. https://github.com/NCMlab/JATOS_NCM_export
    2. This is the entire repository organized within the JATOS environment.
    3. This has the advantage of already having the JATOS components created and in the correct order.
2. Download the Distribution Archive of jsPsych version 7.3
    1. https://github.com/jspsych/jsPsych/releases/download/jspsych%407.3.0/jspsych.zip 
3. Download and install the latest version of JATOS
    1. https://www.jatos.org/Installation.html 
4. Once the JATOS server is running, go to the following local site and login:
    1. http://localhost:9000/
5. Once in the JATOS interface, you will need to import the NCM Study
    1. Press the Studies button in the top left corner.
    2. Then press the “Import Study” button and select the ncm_battery.jzip file downloaded in step 1.
    3. You will now see all the components with the Central Executive being the first component. 
        1. The order is not important for the other components, as long as the Central Executive is first.
    4. This will also create the folder named NCMBattery in the “study_assessts_root” folder of the JATOS directory.
    5. The NCMBattery is the primary repository for the 3C Platform. It can be linked to the remote GitHub repository to pull updates:
        1. https://github.com/NCMlab/NCMLabOnlineTools 

## Setup an Experiment 
1. Within the Batteries.js file add the text shown in Figure 2 and reprinted below:

```
Var List = []
List.push({
  Task: "Word Recognition",
  Parameters: "WordRecog_Spoken",
  Instructions: "Default",
  IconName: "Word Recog",
});
List.push({
  Task: "Matrix Questionnaire",
  Parameters: "GAS_001",
  Instructions: "Default",
  IconName: "GAS",
});

List.push({
  Task: "Matrix Questionnaire",
  Parameters: "GDS_001",
  Instructions: "Default",
  IconName: "GDS",
});
BatteryList.push({
  index: 123, 
  name:'Neural Cognitive Mapping Lab', 
  description: '',
  TaskList: List,
  BatteryInstructions: "Neural Cognitive Mapping Lab",
  HeaderButtonsToShow: ['Home','Quit','Stop'],
  Redirect: www.uottawa.ca
})
```

2. Within the JATOS interface setup a new Batch following the JATOS instructions:
    1. https://www.jatos.org/3.6.x/Run-your-Study-with-Worker-and-Batch-Manager.html 
    2. Create a study link and add URL parameters for the usage type and the battery index:
        1. https://127.0.0.1/publix/8BexzI7alDM?UsageType=UserChoice&Battery=123 

## Setup the NeuroClinic
1. The NeuroClinic is a ReactJS site that requires that JATOS was installed using a MySQL database. 
    1. By default JATOS is installed with a builtin database. 
    2. Modify the JATOS install to use MySQL using these instructions
        1. https://www.jatos.org/JATOS-with-MySQL.html 
2. Install Yarn
    1. This can be done using the Yarn instructions
        1. https://yarnpkg.com/getting-started/install 
    2. It can also be installed using Homebrew 
        1. Install Homebrew via: https://brew.sh/ 
    3. Install Yarn using Homebrew
        1. brew install brew
        2. brew install yarn
3. Install NVM
    1. https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/
4. Install the NeuroClinic

```
cd ~ &&
git clone https://github.com/NCMLab/NeuroClinicPublic &&
cd NeuroClinic
cd server
yarn install
cd ..
cd client
yarn install
yarn build
```

5. Ensure that the NeuroClinic can access the MySQL database
    1. Update the file server/app.js 
    2. Enter your credentials where you see:
        1. user: 'MYSQL-USERNAME',
        2. password: 'MYSQL-PASSWORD',
6. Start NeuroClinic
    1. sudo yarn dev
7. Open the interface by visiting the URL:
    1. http://localhost:3000/clinic_app 











