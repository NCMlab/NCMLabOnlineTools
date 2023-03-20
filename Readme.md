# Folder Structure
* assets 
	* icons
		* Icons for each tasks for displaying a battery
	* Images
		* Image files used by any task
	* SoundFiles
		* Digits
			* Set001
				* One set of recordings
			* Set002
				* A different set of recordings
			* Set_en-GB-Neural2-B_Speed70
				* Digits generated with Gooogle's text to voice function using the Neural2 algorithm with the Great Britain voice number "B" played at 70 percent speed  
		* Words
			* Same concept as the digits.
* config
	* Setup files for each tasks where parameters as specified
* InstructionsAndStimuli
	* Language_Config.js
		* File containing the langauge to use. As an example for English this file contains: `var Language = 'EN';`
	* EN
		* Instructions
			* Files for each tasks containing the written elements that participants see
		* Stimuli
			* Any language based stimuli are stored here
* jspsych_addons
	* Any jspsych plugins that have been locally adapted
* html
	* JATOS
	* LOCAL
* functions
	* Experiments
	* GeneralPurposeFunctions
	* Scoring
	* TaskSpecificFunctions
* Batteries

--- EN (English instruction files)
-- Parameters
files containing the parameters and specific functions for different tasks
- css
- functions
functions utilized by different tasks
- JATOS
- - html versions of the tasks for use with JATOS
- jspsych
Original version of jsPsych
- jspsych_addons
Modified jsPsych plugins
- local
- - html versions of the tasks for local use

HTML file naming convention:
ExperimentName_ComponentName_AnyOtherDescriptives.html
e.g. Stroop_Color_TouchScreen.html

Setup file naming convention:
ExperimentName_Setup_AnyOtherDescriptives_LANGUAGE.js
e.g. Stroop_Setup_TouchScreen_EN.js


# Intergration of Voice Recognition 
## Free Recall in Remote Administration
e.g. Verbal Learning Tasks

## Assess Spoken Responses in Remote Administration 
e.g. Tasks requiring participants to speak freely

# Modifiable Parameter Sets
Task components load up easily modifiable parameter sets. Therefore, the task component code does not need to be modified to change parameter values. 
This allows the reuse of the task component code for multiple situations.

# Immediate Modifiable Scoring
Scoring of responses in incorporated into the task administration code. The result is that at task completion summary scores are calculated and stored in teh database along with the raw data. This allows different scoring approaches based on the parameters used for task administration.
e.g. Stroop with time to complete 24 trials vs. number of trials completed in 45 seconds.

# Cognitive Batteries
A battery is a collection of task components to be administered. Batteries may differ based on the task components included, or may include the same task components but with differing parameters. An example, may be short and long versions of the same task components. Therefore, each tasks component requires its own set of parameters that describe the number of trials, timings, etc. 

Within JATOS all tasks components are listed and by default every task component that is marked as 'active' is administered. A battery is defined with a list of task components to be adminstered along with defined parameter sets. The chosen battery is defined in the URL with a single parameter, the battery index. The initial component (web-page) reads the battery index from the URL, reads through the list of all batteries to extract its definition. A list of the task components is created and administered to the user.  At the same time, the battery, and the assigned parameters, are saved into the JATOS session data. This allows each task component in the battery to have access to the entire list of task components and which task components in the battery have already been completed. This also provides feedback to the user as to how many task components have been completed and how many are left to complete.

The HTML for each task component reads the JATOS session data, identifies its assigned parameters and loads those parameters. The various parameter sets are defined in the TaskName_config.js files. The batteries are defined in the Batteries/ComponentList.js file.

