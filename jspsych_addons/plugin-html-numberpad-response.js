var jsPsychNumberPadResponse = (function (jspsych) {
  'use strict';

  const info = {
      name: "html-numberpad-response",
      parameters: {
          /** The HTML string to be displayed */
          stimulus: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Stimulus",
              default: undefined,
          },
          /** The HTML for creating button. Can create own style. Use the "%choice%" string to indicate where the label from the choices parameter should be inserted. */
          button_html: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Button HTML",
              default: '<button class="jspsych-btn">%choice%</button>',
              array: true,
          },
          /** Any content here will be displayed under the button(s). */
          prompt: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Prompt",
              default: null,
          },
          /** How long to show the stimulus. */
          stimulus_duration: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Stimulus duration",
              default: null,
          },
          /** How long to show the trial. */
          trial_duration: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Trial duration",
              default: null,
          },
          /** The vertical margin of the button. */
          margin_vertical: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Margin vertical",
              default: "0px",
          },
          /** The horizontal margin of the button. */
          margin_horizontal: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Margin horizontal",
              default: "8px",
          },
          /** If true, then trial will end when user responds. */
          response_ends_trial: {
              type: jspsych.ParameterType.BOOL,
              pretty_name: "Response ends trial",
              default: true,
          },

          response_disables: {
              type: jspsych.ParameterType.BOOL,
              pretty_name: "Response disables buttons",
              default: true,
          },
          
      },
  };
  /**
   * html-button-response
   * jsPsych plugin for displaying a stimulus and getting a button response
   * @author Josh de Leeuw
   * @see {@link https://www.jspsych.org/plugins/jspsych-html-button-response/ html-button-response plugin documentation on jspsych.org}
   */
  class NumberPadResponsePlugin {
      constructor(jsPsych) {
          this.jsPsych = jsPsych;
      }
      trial(display_element, trial) {
          // display stimulus
          var html = '<div id="jspsych-html-button-response-stimulus">' + trial.stimulus + "</div>";
          //display buttons
          var buttons = [];

          for (var i = 0; i < trial.choices.length; i++) {
              buttons.push(trial.button_html);
          }
          
          html += '<div id="jspsych-html-button-response-btngroup">';
          html += '<table class="center"><tr>';
          console.log(trial.choices.length)
          // What to do if buttons 1 - 0 are pressed 
          for (var i = 0; i < trial.choices.length-1; i++) {
              var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
              if (i == trial.choices.length-2){
                html += '<td></td>';
              }
              html += '<td>';
              html += 
                  '<div class="jspsych-html-button-response-button" style="display: inline-block; margin:' +
                      trial.margin_vertical + " " + trial.margin_horizontal +
                      '" id="jspsych-html-button-response-button-' + i + '" data-choice="' + i + '">' +
                      str +
                      "</div>";

              html += '</td>'
              if (((i + 1 ) % 3) == 0) {
                html += '</tr><tr>'
              }
          };
          console.log(str)
          //str = buttons[trial.choices.length].replace(/%choice%/g, trial.choices[trial.choices.length]);
          var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
          html += '<tr><th colspan="3">'
          html += 
              '<div class="jspsych-html-button-response-button" style="margin:' +
                      trial.margin_vertical + " " + trial.margin_horizontal +
                      '" id="jspsych-html-button-response-button-' + i + '" data-choice="' + i + '">' +
                      str +
                      "</div></th></tr>";
          html += '</table>'

          html += "</div>";
          //show prompt if there is one
          if (trial.prompt !== null) {
              html += trial.prompt;
          }
          display_element.innerHTML = html;
          // start time
          var start_time = performance.now();
          // add event listeners to buttons
          for (var i = 0; i < trial.choices.length; i++) {
              display_element
                  .querySelector("#jspsych-html-button-response-button-" + i)
                  .addEventListener("click", (e) => {
                  var btn_el = e.currentTarget;
                  var choice = btn_el.getAttribute("data-choice"); // don't use dataset for jsdom compatibility
                  after_response(choice);
              });
          }
          // store response
          var response = {
              rt: null,
              // define the response as an array
              button: [],
          };
          // function to end trial when it is time
          const end_trial = () => {
              // kill any remaining setTimeout handlers
              this.jsPsych.pluginAPI.clearAllTimeouts();
              // gather the data to store for the trial
              var trial_data = {
                  rt: response.rt,
                  stimulus: trial.stimulus,
                  response: response.button,
              };
              // clear the display
              display_element.innerHTML = "";
              // move on to the next trial
              this.jsPsych.finishTrial(trial_data);
          };
          // function to handle responses by the subject
          function after_response(choice) {
              // measure rt
              var end_time = performance.now();
              var rt = Math.round(end_time - start_time);
              
              // after a valid response, the stimulus will have the CSS class 'responded'
              // which can be used to provide visual feedback that a response was recorded
              display_element.querySelector("#jspsych-html-button-response-stimulus").className +=
                  " responded";
              // disable all the buttons after a response
              var btns = document.querySelectorAll(".jspsych-html-button-response-button button");
              // push the response to the array 
              // What to do if the Enter button is pressed
              if (parseInt(choice) == 11) {
                console.log('End Trial')
                end_trial();
              }
              else if (parseInt(choice) == 10) {
                console.log('BACKSPACE Trial')
                response.button.pop();
                document.getElementById('jspsych-html-button-response-stimulus').innerHTML = '<p>'+response.button+'</p>';
              }
              else {
                response.button.push(parseInt(choice)+1);
                
                document.getElementById('jspsych-html-button-response-stimulus').innerHTML = '<p>'+response.button+'</p>';
                
                response.rt = rt;
              }
              

              if (trial.response_disables) {
                for (var i = 0; i < btns.length; i++) {
                    //btns[i].removeEventListener('click');
                  btns[i].setAttribute("disabled", "disabled");
                }
              }
              if (trial.response_ends_trial) {
                  end_trial();
              }
          }
          // hide image if timing is set
          if (trial.stimulus_duration !== null) {
              this.jsPsych.pluginAPI.setTimeout(() => {
                  display_element.querySelector("#jspsych-html-button-response-stimulus").style.visibility = "hidden";
              }, trial.stimulus_duration);
          }
          // end trial if time limit is set
          if (trial.trial_duration !== null) {
              this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
          }
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
          const default_data = {
              stimulus: trial.stimulus,
              rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true),
              response: this.jsPsych.randomization.randomInt(0, trial.choices.length - 1),
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
          if (data.rt !== null) {
              this.jsPsych.pluginAPI.clickTarget(display_element.querySelector(`div[data-choice="${data.response}"] button`), data.rt);
          }
      }
  }
  NumberPadResponsePlugin.info = info;

  return NumberPadResponsePlugin;

})(jsPsychModule);
