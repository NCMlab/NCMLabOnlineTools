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



