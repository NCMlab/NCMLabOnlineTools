/* var x=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;

// add variables for square width, square height, and font size
// add font selection also

https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-6.php
*/
var trial_data

var jsPsychCancellationMouse = (function (jspsych) {
  'use strict';
  const info = {
      name: "cancellation-mouse",
      parameters: {
          /** This array represents the grid of boxes shown on the screen. */
          grid: {
              type: jspsych.ParameterType.BOOL,
              pretty_name: "Grid",
              array: true,
              default: [[1, 1, 1, 1]],
          },
          // labels does not seem to be implemented
          labels: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Labels",
              default: "b",
          },
          non_target_labels: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Labels",
              default: "N",
          },          
          target_labels: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Labels",
              default: "Y",
          },          

          /** The location of the target. The array should be the [row, column] of the target. */
          target: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Target",
              array: true,
              default: undefined,
          },
          /** The width and height in pixels of each square in the grid. */
          grid_square_width: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Grid square width",
              default: 100,
          },
          grid_square_height: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Grid square height",
              default: 100,
          },
          font_family: {
            type: jspsych.ParameterType.STRING,
              pretty_name: "Font",
              default: "Courier",
          },
          font_size: {
            type: jspsych.ParameterType.INT,
              pretty_name: "Font-Size",
              default: 12,
          },
          /** The color of the target square. */
          target_color: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Target color",
              default: "#999",
          },
          /** If true, the trial ends after a mouse click. */
          response_ends_trial: {
              type: jspsych.ParameterType.BOOL,
              pretty_name: "Response ends trial",
              default: true,
          },
          /** The number of milliseconds to display the grid before the target changes color. */
          pre_target_duration: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Pre-target duration",
              default: 0,
          },
          /** How long to show the trial */
          trial_duration: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Trial duration",
              default: null,
          },
          /** If a positive number, the target will progressively change color at the start of the trial, with the transition lasting this many milliseconds. */
          fade_duration: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Fade duration",
              default: null,
          },
          /** If true, then user can make nontarget response. */
          allow_nontarget_responses: {
              type: jspsych.ParameterType.BOOL,
              pretty_name: "Allow nontarget response",
              default: false,
          },
          /** Any content here will be displayed below the stimulus */
          prompt: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Prompt",
              default: null,
          },
          border_width: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Border Width",
              default: 2,
          },
           /* Whether to show the button that ends the trial
           */
          show_finished_button: {
              type: jspsych.ParameterType.BOOL,
              default: true,
          },
          /**
           * The label for the button that ends the trial
           */
          finished_button_label: {
              type: jspsych.ParameterType.STRING,
              default: "Finished",
          },
          GIFRecord: {              
            type: jspsych.ParameterType.BOOL,
            default: false,
        },
      },
  };
  /**
   * **serial-reaction-time-mouse**
   *
   * jsPsych plugin for running a serial reaction time task with mouse responses
   *
   * @author Josh de Leeuw
   * @see {@link https://www.jspsych.org/plugins/jspsych-serial-reaction-time-mouse/ serial-reaction-time-mouse plugin documentation on jspsych.org}
   */
  class SerialReactionTimeMousePlugin {
      constructor(jsPsych) {
          this.jsPsych = jsPsych;
      }
      
      getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }

      trial(display_element, trial) {
          var startTime = -1;
          this.params = trial;
          var response = {
              rt: null,
              row: null,
              column: null,
          };
          const showTarget = (target) => {
              var resp_targets;


              // NON TARGET ALOWANCE
              if (!trial.allow_nontarget_responses) {
                // IF NON TARGET IS ALLOWED THEN ONLY ONE CELL IS CONSIDERED A TARGET
                  resp_targets = [
                      display_element.querySelector("#jspsych-serial-reaction-time-stimulus-cell-" + trial.target[0] + "-" + trial.target[1]),
                  ];
              }
              else {
                // IF NON TARGETS ARE ALLOWED THEN ALL CELLS ARE CONSIDERED TARGETS
                  resp_targets = display_element.querySelectorAll(".jspsych-serial-reaction-time-stimulus-cell");
              }
              // CYCLE OVER THE TARGETS AND LISTEN FOR MOUSE CLICKS IN THEM
              for (var i = 0; i < resp_targets.length; i++) {
                  resp_targets[i].addEventListener("mousedown", (e) => {
                      if (startTime == -1) {
                          return;
                      }
                      else {
                            
                          var info = {};
                          info.row = e.currentTarget.getAttribute("data-row");
                          info.column = e.currentTarget.getAttribute("data-column");
                          console.log("A LETTER WAS CLICKED: "+info)
                          info.rt = Math.round(performance.now() - startTime);
                          after_response(info);
                          
                      }
                  });
              }
              
              /*trial.querySelector("#sketchpad-end").addEventListener("click", () => {
                  end_trial();
              });*/
          
              startTime = performance.now();
              // I DO NOT SEE WHAT THE FADE DOES
              if (trial.fade_duration == null) {
                // THE COLOR OF THE TARGET CELL IS CHANGED
                // THIS ASSUMES A SINGLE TARGET

               /* if ( trial.target.length > 0 ) {
                  for (var index = 0; index < trial.target.length; index++ ) {
                    display_element.querySelector("#jspsych-serial-reaction-time-stimulus-cell-" + trial.target[index][0] + "-" + trial.target[index][1]).style.backgroundColor = trial.target_color;
                  }
                } */
              }
              else {
                  display_element.querySelector("#jspsych-serial-reaction-time-stimulus-cell-" + trial.target[0] + "-" + trial.target[1]).style.transition = "background-color " + trial.fade_duration;
                  display_element.querySelector("#jspsych-serial-reaction-time-stimulus-cell-" + trial.target[0] + "-" + trial.target[1]).style.backgroundColor = trial.target_color;
              }
              if (trial.trial_duration !== null) {
                  this.jsPsych.pluginAPI.setTimeout(endTrial, trial.trial_duration);
              }

            //   if ( this.params.GIFRecord )
            //   {
            //     this.enc = encoder
            //     this.enc.start()
            //     this.capture_frame();
            //   }
          };


          // display stimulus
          var stimulus = this.stimulus(trial.grid, trial.grid_square_width, trial.grid_square_height, trial.target, trial.target_color, trial.non_target_labels, trial.target_labels, trial.border_width,trial.font_family, trial.font_size);
          display_element.innerHTML = stimulus;
          if (trial.pre_target_duration <= 0) {
              showTarget();
          }
          else {
              this.jsPsych.pluginAPI.setTimeout(showTarget, trial.pre_target_duration);
          }
          //show prompt if there is one
          if (trial.prompt !== null) {
              display_element.insertAdjacentHTML("afterbegin", trial.prompt);
          }

          if (trial.show_finished_button) {
              trial.finish_button_html = `<p id="finish-btn"><button class="jspsych-btn" id="sketchpad-end">${trial.finished_button_label}</button></p>`;
              display_element.insertAdjacentHTML("beforeend", trial.finish_button_html);
          }

          display_element.querySelector("#sketchpad-end").addEventListener("click", () => {endTrial()});

          const endTrial = () => {
            // if ( this.params.GIFRecord )
            // { 
            //     this.enc.finish();
            //     clearInterval(this.capture_frame_interval)
            //     var binary_gif = encoder.stream().getData() //notice this is different from the as3gif package!
            //     var data_url = 'data:image/gif;base64,'+encode64(binary_gif);
            // };

              // kill any remaining setTimeout handlers
              this.jsPsych.pluginAPI.clearAllTimeouts();            
              trial_data = {
                rt: response.rt,
                grid: trial.grid,
                target: trial.target,
                response: [parseInt(response.row, 10), parseInt(response.column, 10)],
                correct: response.row == trial.target[0] && response.column == trial.target[1],
                
              };
            //   trial_data.gif = data_url



              
              // score trials
              var TotalScore = 0
              var LeftScore = 0
              var RightScore = 0
              var LeftMaxScore = 0
              var RightMaxScore = 0
              var MidLineSplit = trial.grid[0].length/2
              
              for ( var i = 0; i < trial.target.length; i ++ ) {
                if ( trial.target[i][1] < MidLineSplit ) { LeftMaxScore += 1}
                else {RightMaxScore += 1}
                if ( 'response' in trial.target[i] ) { 
                  TotalScore += 1 

                  if ( trial.target[i][1] < MidLineSplit )
                    {LeftScore += 1}
                  else {RightScore += 1}
                  // score left and right
                }
              }

              //SingleLetterCancellation_Scoring(data, trial)
              // clear the display
              display_element.innerHTML = "";
              // move on to the next trial

              this.jsPsych.finishTrial(trial_data);
          };
          // function to handle responses by the subject

          function after_response(info, target) {
              // only record first response
              response = response.rt == null ? info : response;
              var clickedItem = document.getElementById("jspsych-serial-reaction-time-stimulus-cell-"+info.row+"-"+info.column)
              //console.log(clickedItem)
              clickedItem.classList.toggle("strikethrough-diagonal")
              
              for (var i = 0; i < trial.target.length; i++ )
              {
                if (trial.target[i][0].toString() == info.row & trial.target[i][1].toString() == info.column) {  
                  trial.target[i].response = "Correct"
                }
              }

          }
      }
      stimulus(grid, square_width, square_height, target, target_color, non_target_labels, target_labels, border_width, font_family, font_size) {
        // make another grid that contains the  
        
        var stimulus = "<div id='jspsych-serial-reaction-time-stimulus' style='margin:auto; display: table; table-layout: fixed; border-spacing:" +
              square_width / 4 +
              "px'>";
          

          for (var i = 0; i < grid.length; i++) {

              stimulus += "<div class='jspsych-serial-reaction-time-stimulus-row' style='display:table-row;'>";
              for (var j = 0; j < grid[i].length; j++) {
                  var classname = "jspsych-serial-reaction-time-stimulus-cell";
                  stimulus +=
                      "<div class='" +
                          classname +
                          "' id='jspsych-serial-reaction-time-stimulus-cell-" +
                          i +
                          "-" +
                          j +
                          "' " +
                          "data-row=" +
                          i +
                          " data-column=" +
                          j +
                          " " +
                          "style='width:" +
                          square_width +
                          "; height:" +
                          square_height +
                          "; display:table-cell; vertical-align:middle; text-align: center; cursor: pointer; font-family: font_family; font-size:" +
                          font_size +
                          "px;";
                  if (grid[i][j] == 1) {
                      stimulus += "border: solid black " + border_width +"px;"
                  }
                  
                  if (typeof target !== "undefined" && target[0] == i && target[1] == j) {
                      stimulus += "background-color: " + target_color + ";";
                    }
                  stimulus += "'>";    
                  
                  var LettersToDisplay = ''
                  for ( var index = 0; index < target.length; index++ ) {
                    if (typeof target !== "undefined" && target[index][0] == i && target[index][1] == j) {  
                      // check to see if the non targets are an array. If so than draw from this list
                        LettersToDisplay = target_labels;
                        break;
                    }
                    if ( LettersToDisplay == '' ) {
                      if ( non_target_labels.length > 1 ) {
                        var NNonTargets = non_target_labels.length
                        LettersToDisplay += non_target_labels[this.getRandomInt(0,NNonTargets)];
                      }
                    }
                  }
                  stimulus += LettersToDisplay
                  stimulus += "</div>";
                }
            stimulus += "</div>";
          }
          stimulus += "</div>";
          return stimulus;
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

    //   capture_frame() {
    //     //capture a frame
    //     console.log("Capturing Frame")
    //     this.capture_frame_interval = setInterval(() => { this.enc.addFrame(document.getElementById('jspsych-serial-reaction-time-stimulus'), 500)})
    //   }

      create_simulation_data(trial, simulation_options) {
          let response = this.jsPsych.utils.deepCopy(trial.target);
          if (trial.allow_nontarget_responses && this.jsPsych.randomization.sampleBernoulli(0.8) !== 1) {
              while (response[0] == trial.target[0] && response[1] == trial.target[1]) {
                  response[0] == this.jsPsych.randomization.randomInt(0, trial.grid.length);
                  //@ts-ignore array typing is not quite right
                  response[1] == this.jsPsych.randomization.randomInt(0, trial.grid[response[0]].length);
              }
          }
          const default_data = {
              grid: trial.grid,
              target: trial.target,
              response: response,
              rt: trial.pre_target_duration +
                  this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true),
              correct: response[0] == trial.target[0] && response[1] == trial.target[1],
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
              const target = display_element.querySelector(`.jspsych-serial-reaction-time-stimulus-cell[data-row="${data.response[0]}"][data-column="${data.response[1]}"]`);
              this.jsPsych.pluginAPI.clickTarget(target, data.rt);
          }
      }
  }
  SerialReactionTimeMousePlugin.info = info;

  return SerialReactionTimeMousePlugin;

})(jsPsychModule);
