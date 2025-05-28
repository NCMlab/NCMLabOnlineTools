var jsPsychSurveyMatrix = (function (jspsych) {
  'use strict';

  const info = {
      name: "survey-matrix",
      parameters: {
          /** Array containing one or more objects with parameters for the question(s) that should be shown on the page. */
          JSONinput: {
              type: jspsych.ParameterType.JSON,              
              pretty_name: "Questions",
             
          },
          /** If true, the order of the questions in the 'questions' array will be randomized. */
          randomize_question_order: {
              type: jspsych.ParameterType.BOOL,
              pretty_name: "Randomize Question Order",
              default: false,
          },
        required: {
            type: jspsych.ParameterType.BOOL,
            pretty_name: "Required",
            default: false,
        },
          /** HTML-formatted string to display at top of the page above all of the questions. */
          preamble: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Preamble",
              default: null,
          },
          /** Width of the matrix scales in pixels. */
          scale_width: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Scale width",
              default: null,
          },
          /** Label of the button to submit responses. */
          button_label: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Button label",
              default: "Continue",
          },
          /** Setting this to true will enable browser auto-complete or auto-fill for the form. */
          autocomplete: {
              type: jspsych.ParameterType.BOOL,
              pretty_name: "Allow autocomplete",
              default: false,
          },
      },
  };
  /**
   * **survey-matrix**
   *
   * jsPsych plugin for gathering responses to questions on a matrix scale
   *
   * @author Josh de Leeuw
   * @see {@link https://www.jspsych.org/plugins/jspsych-survey-likert/ survey-likert plugin documentation on jspsych.org}
   */
  class SurveyMatrixPlugin {
      constructor(jsPsych) {
          this.jsPsych = jsPsych;
      }
      trial(display_element, trial) {
          if (trial.scale_width !== null) {
              var w = trial.scale_width + "px";
          }
          else {
              var w = "100%";
          }

          console.log(trial.JSONinput)
          var html = "";
          
          html += '<form id="jspsych-survey-matrix-form" autocomplete="off">';
          
          // inject CSS for trial
          
          html += '<style id="jspsych-survey-likert-css">';
          html +=
              ".jspsych-survey-likert-statement { display:block; font-size: 16px; padding-top: 40px; margin-bottom:10px; }" +
                  ".jspsych-survey-likert-opts { list-style:none; width:" +
                  w +
                  "; margin:auto; padding:0 0 35px; display:block; font-size: 14px; line-height:1.1em; }" +
                  ".jspsych-survey-likert-opt-label { line-height: 1.1em; color: #444; }" +
                  ".jspsych-survey-likert-opts:before { content: ''; position:relative; top:11px; /*left:9.5%;*/ display:block; background-color:#efefef; height:4px; width:100%; }" +
                  ".jspsych-survey-likert-opts:last-of-type { border-bottom: 0; }" +
                  ".jspsych-survey-likert-opts li { display:inline-block; /*width:19%;*/ text-align:center; vertical-align: top; }" +
                  ".jspsych-survey-likert-opts li input[type=radio] { display:block; position:relative; top:0; left:50%; margin-left:-6px; }";
          html += "</style>";
            
            html += '<div>'
            
            html += '<h2 id="tableInstructions"></h2>'
            html += '</div>'
            html += '<div class="tableFixedHead">'
                html += '<table border="1" >'
                    html += '<thead id = "tableHeader">'
                    html += '<th></th>'
                    for ( let i =0; i < trial.JSONinput.elements[0].columns.length; i++ ) {
                    
                        html += '<th>'+trial.JSONinput.elements[0].columns[i]['text']+'</th>'
                    }
                    html += '</thead>'
                    html += '<tbody id = "tableBody">'
                    for ( let i =0; i < trial.JSONinput.elements[0].rows.length; i++ ) {
                        console.log(i)
                        html += '<tr id="row_'+trial.JSONinput.elements[0].rows[i]['text']+'"><td class="item_label">' + trial.JSONinput.elements[0].rows[i]['text'] + '</td>'
                        // The 'name' for an input row makes all inputs with the same name exclusive of each other
                        for ( let j =0; j < trial.JSONinput.elements[0].columns.length; j++ ) {
                            html += '<td><input type="radio" class="sd-item__decorator" name="'+trial.JSONinput.elements[0].rows[i]['text']+'"'
                            if (trial.required) {
                               html += ' required ';
                            }
                            html+= '></td>'
                        }
                    }
                    html += '</tbody>'
                    html += '</table>'
            html += '</div>'



          // add submit button
          html +=
              '<table border="2"><tr><td colspan="2"><input type="submit" id="jspsych-survey-matrix-next" onClick="ValidateForm(this.form)" class="jspsych-survey-matrix jspsych-btn" value="' +
                  trial.button_label +
                  ' "></input>';
          html += "</form></td><td colspan='3' class='item_label' id='tableMessageBox'></td></tr></table>";
          display_element.innerHTML = html;
        console.log(display_element)
         display_element.querySelector("#jspsych-survey-matrix-form").addEventListener("submit", (e) => {
            console.log(e)  
            e.preventDefault();
              // measure response time
              var endTime = performance.now();
              var response_time = Math.round(endTime - startTime);
              // create object to hold responses
              var question_data = {};
              var matches = display_element.querySelectorAll("#jspsych-survey-matrix-form .jspsych-survey-matrix-opts");
              for (var index = 0; index < matches.length; index++) {
                  var id = matches[index].dataset["radioGroup"];
                  var el = display_element.querySelector('input[name="' + id + '"]:checked');
                  if (el === null) {
                      var response = "";
                  }
                  else {
                      var response = parseInt(el.value);
                  }
                  var obje = {};
                  if (matches[index].attributes["data-name"].value !== "") {
                      var name = matches[index].attributes["data-name"].value;
                  }
                  else {
                      var name = id;
                  }
                  obje[name] = response;
                  Object.assign(question_data, obje);
              }
              // save data
              var trial_data = {
                  rt: response_time,
                  response: question_data,
              };
              display_element.innerHTML = "";
              // next trial
              this.jsPsych.finishTrial(trial_data);
          });
          
          var startTime = performance.now();
      }
      simulate(trial, simulation_mode, simulation_options, load_callback) {
          if (simulation_mode == "data-only") {
              load_callback();
              this.simulate_data_only(trial, simulation_options);
          }
          if (simulation_mode == "visual") {
              this.simulate_visual(trial, simulation_options, load_callback);
          }
      }
      create_simulation_data(trial, simulation_options) {
          const question_data = {};
          let rt = 1000;
          for (const q of trial.questions) {
              const name = q.name ? q.name : `Q${trial.questions.indexOf(q)}`;
              question_data[name] = this.jsPsych.randomization.randomInt(0, q.labels.length - 1);
              rt += this.jsPsych.randomization.sampleExGaussian(1500, 400, 1 / 200, true);
          }
          const default_data = {
              response: question_data,
              rt: rt,
              question_order: trial.randomize_question_order
                  ? this.jsPsych.randomization.shuffle([...Array(trial.questions.length).keys()])
                  : [...Array(trial.questions.length).keys()],
          };
          const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
          this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
          return data;
      }
      simulate_data_only(trial, simulation_options) {
          const data = this.create_simulation_data(trial, simulation_options);
          this.jsPsych.finishTrial(data);
      }
      simulate_visual(trial, simulation_options, load_callback) {
          const data = this.create_simulation_data(trial, simulation_options);
          const display_element = this.jsPsych.getDisplayElement();
          this.trial(display_element, trial);
          load_callback();
          const answers = Object.entries(data.response);
          for (let i = 0; i < answers.length; i++) {
              this.jsPsych.pluginAPI.clickTarget(display_element.querySelector(`input[type="radio"][name="${answers[i][0]}"][value="${answers[i][1]}"]`), ((data.rt - 1000) / answers.length) * (i + 1));
          }
          this.jsPsych.pluginAPI.clickTarget(display_element.querySelector("#jspsych-survey-matrix-next"), data.rt);
      }
  }
  SurveyMatrixPlugin.info = info;

  return SurveyMatrixPlugin;

})(jsPsychModule);
