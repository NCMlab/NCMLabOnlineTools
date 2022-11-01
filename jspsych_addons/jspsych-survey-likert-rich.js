/**
 * jspsych-survey-likert
 * a jspsych plugin for measuring items on a likert scale
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 * Text feedback boxes added by Henry Burgess.
 *
 */

jsPsych.plugins['survey-likert-rich'] = (function() {
  const plugin = {};

  plugin.info = {
    name: 'survey-likert',
    description: '',
    parameters: {
      questions: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Questions',
        nested: {
          prompt: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Prompt',
            default: undefined,
            description: 'Questions that are associated with the slider.',
          },
          labels: {
            type: jsPsych.plugins.parameterType.STRING,
            array: true,
            pretty_name: 'Labels',
            default: undefined,
            description: 'Labels to display for individual question.',
          },
          required: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Required',
            default: false,
            description: 'Makes answering the question required.',
          },
          name: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Question Name',
            default: '',
            description: 'Controls the name of data values associated ' +
              'with this question',
          },
        },
      },
      randomize_question_order: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Randomize Question Order',
        default: false,
        description: 'If true, the order of the questions will be randomized',
      },
      preamble: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Preamble',
        default: null,
        description: 'String to display at top of the page.',
      },
      feedback_placeholder: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Feedback placeholder text',
        default: '',
        description: 'String to as a placeholder in the feedback boxes.',
      },
      scale_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Scale width',
        default: null,
        description: 'Width of the likert scales in pixels.',
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default: 'Continue',
        description: 'Label of the button.',
      },
      autocomplete: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Allow autocomplete',
        default: false,
        description: 'Setting this to true will enable browser ' +
          'auto-complete or auto-fill for the form.',
      },
    },
  };

  plugin.trial = function(displayElement, trial) {
    let w;
    if (trial.scale_width !== null) {
      w = trial.scale_width + 'px';
    } else {
      w = '100%';
    }

    let html = '';
    // inject CSS for trial
    html += '<style id="jspsych-survey-likert-css">';
    html += '.jspsych-survey-likert-statement { display:block; ' +
      'font-size: 16px; padding-top: 40px; margin-bottom:10px; }' +
      '.jspsych-survey-likert-opts { list-style:none; width:'+ w +'; ' +
      'margin:auto; padding:0 0 35px; display:block; font-size: 14px; ' +
      'line-height:1.1em; }' +
      '.jspsych-survey-likert-opt-label { line-height: 1.1em; color: #444; }' +
      '.jspsych-survey-likert-opts:before { content: \'\'; ' +
      'position:relative; top:11px; /*left:9.5%;*/ display:block; ' +
      'background-color:#efefef; height:4px; width:100%; }'+
      '.jspsych-survey-likert-opts:last-of-type { border-bottom: 0; }' +
      '.jspsych-survey-likert-opts li { display:inline-block; ' +
      '/*width:19%;*/ text-align:center; vertical-align: top; }'+
      '.jspsych-survey-likert-opts li input[type=radio] { display:block; ' +
      'position:relative; top:0; left:50%; margin-left:-6px; }';
    html += '</style>';

    // show preamble text
    if (trial.preamble !== null) {
      html += '<div id="jspsych-survey-likert-preamble" ' +
      'class="jspsych-survey-likert-preamble">' + trial.preamble + '</div>';
    }

    if (trial.autocomplete) {
      html += '<form id="jspsych-survey-likert-form">';
    } else {
      html += '<form id="jspsych-survey-likert-form" autocomplete="off">';
    }

    // add likert scale questions ///
    // generate question order. this is randomized here as opposed to
    // randomizing the order of trial.questions so that the data are
    // always associated with the same question regardless of order
    let questionOrder = [];
    for (let i = 0; i < trial.questions.length; i++) {
      questionOrder.push(i);
    }
    if (trial.randomize_question_order) {
      questionOrder = jsPsych.randomization.shuffle(questionOrder);
    }

    for (let i = 0; i < trial.questions.length; i++) {
      const question = trial.questions[questionOrder[i]];
      // add question
      html += '<label class="jspsych-survey-likert-statement">' +
        question.prompt + '</label>';
      // add options
      const width = 100 / question.labels.length;
      let optionsString = '<ul class="jspsych-survey-likert-opts" data-name="' +
        question.name + '" data-radio-group="Q' + questionOrder[i] + '">';
      for (let j = 0; j < question.labels.length; j++) {
        optionsString += '<li style="width:' + width + '%">' +
          '<label class="jspsych-survey-likert-opt-label">' +
          '<input type="radio" name="Q' + questionOrder[i] +
          '" value="' + j + '"';
        if (question.required) {
          optionsString += ' required';
        }
        optionsString += '>' + question.labels[j] + '</label></li>';
      }
      optionsString += '</ul>';
      html += optionsString;

      // Add text box
      html += '<div id="input-feedback-container">';
      html += '<textarea id="input-' + questionOrder[i] + '" ' +
        'class="jspsych-survey-text-response" data-name="' +
        question.name + '" data-input-group="Q' + questionOrder[i] + '"' +
        'name="#jspsych-survey-text-response-' + questionOrder[i] + '" ' +
        'cols=' + (trial.feedback_placeholder.length + 10) + ' rows=4 ' +
        'placeholder="' + trial.feedback_placeholder + '"></textarea>';
      html += '</div>';
    }

    // add submit button
    html += '<input type="submit" id="jspsych-survey-likert-next" ' +
      'class="jspsych-survey-likert jspsych-btn" value="' +
      trial.button_label + '"></input>';

    html += '</form>';

    displayElement.innerHTML = html;

    displayElement.querySelector('#jspsych-survey-likert-form')
        .addEventListener('submit', function(e) {
          e.preventDefault();
          // measure response time
          const endTime = performance.now();
          const responseTime = endTime - startTime;

          // create object to hold responses
          const questionData = {};
          const obje = {};
          const matchesOptions = displayElement
              .querySelectorAll('#jspsych-survey-likert-form ' +
              '.jspsych-survey-likert-opts');
          for (let index = 0; index < matchesOptions.length; index++) {
            const id = matchesOptions[index].dataset['radioGroup'];
            const el = displayElement
                .querySelector('input[name="' + id + '"]:checked');
            let response;
            if (el === null) {
              response = '';
            } else {
              response = parseInt(el.value);
            }
            let name;
            if (matchesOptions[index].attributes['data-name'].value !== '') {
              name = matchesOptions[index].attributes['data-name'].value;
            } else {
              name = id;
            }

            obje[name] = {
              response: response,
              feedback: '',
            };
          }

          const matchesFeedback = displayElement
              .querySelectorAll('#jspsych-survey-likert-form ' +
              '.jspsych-survey-text-response');
          for (let index = 0; index < matchesFeedback.length; index++) {
            const id = matchesFeedback[index].id;
            const el = displayElement
                .querySelector('#' + id);
            let feedbackText;
            if (el === null) {
              feedbackText = '';
            } else {
              feedbackText = el.value;
            }
            let name = id;
            if (matchesFeedback[index].attributes['data-name'].value !== '') {
              name = matchesFeedback[index].attributes['data-name'].value;
            }

            obje[name].feedback = feedbackText;
          }

          Object.assign(questionData, obje);

          // save data
          const trialData = {
            rt: responseTime,
            response: questionData,
            question_order: questionOrder,
          };

          displayElement.innerHTML = '';

          // next trial
          jsPsych.finishTrial(trialData);
        });

    const startTime = performance.now();
  };

  return plugin;
})();
