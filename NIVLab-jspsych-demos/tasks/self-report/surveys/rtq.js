/**
* Readiness for Therapy (RTQ) Questionnaire
*
* Ghomi, M., Wrightman, M., Ghaemian, A., Grey, N., Pickup, T., & Richardson, T. (2020).
* Development and validation of the Readiness for Therapy Questionnaire (RTQ).
* Behavioural and cognitive psychotherapy, 1–13. Advance online publication.
* https://doi.org/10.1017/S1352465820000764
*
**/

var rtq = {
  type: jsPsychSurveyTemplate,
  items: [
    "It's essential that I work on my problems as soon as possible because they are affecting the quality of my life",
    "I like to do things the way I've always done them and I don't want to change",
    "If I'm sceptical about something, I'm not willing to try it",
    "Even if therapy becomes difficult, I will stick with it to the end",
    "In between the sessions, I will dedicate time to regularly practise the things I learn in therapy",
    "I won't attend therapy if I have something more pressing or interesting planned"
  ],
  scale: [
    "Strongly agree",
    "Agree",
    "Undecided",
    "Disagree",
    "Strongly disagree",
  ],
  reverse: [
    true, false, false, true, true, false
  ],
  instructions: "",
  scale_repeat: 10,
  survey_width: 950,
  item_width: 55
}

var Instructions = {
      type: jsPsychHtmlButtonResponseTouchscreen,
      stimulus: function()
      {
        var stim = 'Answer the following questions' // Variable in the config file
        return stim
      },
      post_trial_gap: 0,
      margin_horizontal: 50,
      prompt: '',
      choices: ['Next'], 
    }

var timeline = []

    timeline.push(Instructions)
    timeline.push(rtq)
    timeline.push(Instructions)