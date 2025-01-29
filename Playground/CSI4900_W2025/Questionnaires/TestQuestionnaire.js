
const trial = {
    type: jsPsychSurvey,
    survey_json: {
      showQuestionNumbers: false,
      elements:
        [
          {
            type: 'radiogroup',
            title: "Which of the following do you like the most?", 
            name: 'vegetablesLike', 
            choices: ['Tomato', 'Cucumber', 'Eggplant', 'Corn', 'Peas', 'Broccoli']
          }, 
          {
            type: 'checkbox',
            title: "Which of the following do you like?", 
            name: 'fruitLike', 
            description: "You can select as many as you want.",
            choices: ['Apple', 'Banana', 'Orange', 'Grape', 'Strawberry', 'Kiwi', 'Mango'], 
            showOtherItem: true,
            showSelectAllItem: true,
            showNoneItem: true,
            required: true,
          },
      ]
    },
  };

  const timeline = [trial];