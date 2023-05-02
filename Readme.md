
# Integration of Voice Recognition 
## Free Recall in Remote Administration
e.g. Verbal Learning Tasks

## Assess Spoken Responses in Remote Administration 
e.g. fluency and sentence recall tasks

# Drawing Capabilities
Administration is designed for use with touchscreen technologies. This allows the participant to perform tasks that require drawing. e.g. trail making and figure copying tasks. Drawing results are saved as PNG files for visual inspection. Components of drawing are also saved for more in-depth analysis of drawing component speed, variability (shakiness), etc.

# Adaptive Difficulty
Adaptive difficulty protocols are available for task administration. This allows for tasks to adjust their difficulty based on participant responses. e.g. digit span

# Modifiable Parameter Sets
Task components load up easily modifiable parameter sets. Therefore, the task component code does not need to be modified to change parameter values. 
This allows the reuse of the task component code for multiple situations. Parameter sets include different versions of the same test, for instance the Golden or the Victoria versions of the Stroop. It is also possible to turn on/off the welcome or thank you screen for a test. This facilitates creating screening batteries.

# Immediate Modifiable Scoring
Scoring of responses in incorporated into the task administration code. The result is that at task completion summary scores are calculated and stored in the database along with the raw data. This allows different scoring approaches based on the parameters used for task administration.
e.g. Stroop with time to complete 24 trials vs. number of trials completed in 45 seconds.

# Modifiable Languages
Once translated, the instructions and any language based stimulus (e.g. words) are easily changable through the modifiable parameters. This allows the user to choose the language of administration, and even the accent spoken by the pre-recorded audio stimuli. 

# Verbal Stimuli
Word and number stimuli are pre-recorded using text to speech technology. This allows the choice of language, accent, and speaking speed. The user can setup their tasks to match language and accent to any local population.

# Cognitive Batteries
Multiple tasks may be selected and ordered into batteries. Batteries may differ based on the task components included, or may include the same task components but with differing parameters. An example, may be short and long versions of the same task components. Therefore, each tasks component requires its own set of parameters that describe the number of trials, timings, etc. 

# Audio Assessment 
This is to ensure that participants can hear any audio and that their speakers are functioning properly.

# Speaking Assessment
This is to ensure that the speech recognition is working properly and that the participant's microphone is functioning.

# Language
All introduction, instruction, and thank you text can be translated into other languages and loaded via configuration files.

# Summary
The use of modifiable parameters and batteries means the end user does not need to modify any of the code that delivers the task components. They only need to develop their own personalized batteries. Once multiple batteries are developed they are administered based on a URL parameter in the hyperlink provided to participants.

# Tasks currently implemented
1. Stroop Color, Word, Color/Word
	- Victoria administration
	- Golden administration
1. Word Recall
	- Rey's auditory verbal learning test
	- Manual recall with an administrator to score responses
	- Speech recognition to score responses
1. Verbal fluency
	- Speech recognition to count responses (needs administrator to review and confirm responses)
	- Manual responses with administrator to count responses
1. Trail making
	- A or B 
	- Automatic scoring of duration and accuracy
	- Drawing is saved for later inspection
1. Digit span
	- forward
	- backward
	- fixed number of trials
	- continue until a set number of contiguous errors are made
	- adaptive difficulty using staircase procedures
1. Cube copy	
	- Drawing is saved for later inspection
1. Clock drawing
	- Drawing is saved for later inspection
1. Rey Osterrieth Complex Figure Drawing (DOUBLE CHECK)
	- Drawing is saved for later inspection
1. Card sort
1. Letter cancellation task (DOUBLE CHECK)
1. ICAR Matrix reasoning (DOUBLE CHECK)
1. Verbal delayed match to sample (DOUBLE CHECK)
	- adaptive difficulty using staircase procedures
1. Attention Network Test (DOUBLE CHECK)



# Questionnaires
1. Beck Depression Index
1. Cognitive Flexibility Index
1. STAI
1. Cognitive Flexibility Scale
1. Questionnaires can be incorporated into any battery.
	- Current questionnaire types
		- multiple choice
		- Likert
1. Easily edited configuartion file to add any other questionnaires.

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




GitHub submodules
https://www.youtube.com/watch?v=eJrh5IjWSGM

Dominos
https://www.htmlsymbols.xyz/unicode/U+1F08A
