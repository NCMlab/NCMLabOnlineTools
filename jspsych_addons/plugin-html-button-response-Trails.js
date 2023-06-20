

var jsPsychHtmlButtonResponseTrails = (function (jspsych) {
  'use strict';

  const info = {
      name: "html-button-response-Trails",
      parameters: {
          /** The HTML string to be displayed */
          stimulus: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Stimulus",
              default: undefined,
          },
          Circles: {
            type: jspsych.ParameterType.INT,
            default: -99,
        },   
          /** Array containing the label(s) for the button(s). */
          choices: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Choices",
              default: undefined,
              array: true,
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
      },
  };
  /**
   * html-button-response
   * jsPsych plugin for displaying a stimulus and getting a button response
   * @author Josh de Leeuw
   * @see {@link https://www.jspsych.org/plugins/jspsych-html-button-response/ html-button-response plugin documentation on jspsych.org}
   */
  class HtmlButtonResponsePluginTouchscreen {
      constructor(jsPsych) {
          this.jsPsych = jsPsych;
      }


      add_line(centerX_start, centerY_start, centerX_stop, centerY_stop, radius) {
        // draw a line connecting circles
        this.ctx.beginPath();
        // make the line dashed
        this.ctx.setLineDash([10,10]);
        // find the equation for the line and draw it starting at the edge of the circle, intead of it's center
        // https://math.stackexchange.com/questions/175896/finding-a-point-along-a-line-a-certain-distance-away-from-another-point
        
        const dd = this.measure_distance([centerX_start, centerY_start], [centerX_stop,centerY_stop]);
        // the distance along this line is the circle radius
        var dt = radius + 2;
        // the ratio is
        var t = dt/dd
        // find the starting point
        var X_start = (1-t)* centerX_start + t*centerX_stop;
        var Y_start = (1-t)* centerY_start + t*centerY_stop;
        
        // Now set the end point
        // the distance along this line is the circle radius
        var dt = dd - radius - 2;
        // the ratio is
        var t = dt/dd
        // find the stopping point
        var X_stop = (1-t)* centerX_start + t*centerX_stop;
        var Y_stop = (1-t)* centerY_start + t*centerY_stop;
        this.ctx.moveTo(X_start, Y_start);
        this.ctx.lineTo(X_stop, Y_stop);
        this.ctx.stroke();
      }

      add_arrowHead(centerX_start, centerY_start, centerX_stop, centerY_stop, radius) {
        // length of the line
        var L = this.measure_distance([centerX_start, centerY_start], [centerX_stop,centerY_stop]);
        // Need to adjust the end point to be before the end of the line
        // the last 2 is just an adjustment of two pixels away frm the circle's edge
        var dt = L - 2*radius - 2;
        // the ratio is
        var t = dt/L
        // find the stopping point
        var X_stop = (1-t)*centerX_start + t*centerX_stop;
        var Y_stop = (1-t)*centerY_start + t*centerY_stop;
        //height of the triangle (the arrowhead)
        var h = 15;
        //width of the base of the triangle (the arrowhead)
        var w = 15 ;
        

        //first base point coordinates
        var base_x0 = X_stop + (w/2) * (Y_stop - centerY_start) / L;
        var base_y0 = Y_stop + (w/2) * (centerX_start - X_stop) / L;
    
        //second base point coordinates
        var base_x1 = X_stop - (w/2) * (Y_stop - centerY_start) / L;
        var base_y1 = Y_stop - (w/2) * (centerX_start - X_stop) / L;
        if ( X_stop == centerX_start ){
            // avoid division by 0
            var dx = 0
            dy = h
            if ( Y_stop < centerY_start ) {
                //make sure arrow head points the right way
                dy = -h 
            }
            else { dy = h }
        }
        else {
            if (X_stop < centerX_start) {
                h = -h
            }   
            var slope = (Y_stop - centerY_start) / (X_stop - centerX_start)
            var dx = h / Math.sqrt(1 + Math.pow(slope,2))
            var dy = dx*slope
        }
        var head_x = X_stop + dx
        var head_y = Y_stop + dy
        // Add arrowheads
        var path = new Path2D()
        path.moveTo(base_x0, base_y0);
        path.lineTo(head_x, head_y);
        path.lineTo(base_x1, base_y1);
        this.ctx.fill(path)
    }
    convert_circles_locations(Circles, LocationsAsProportions, WindowX, WindowY)
    {
      if (LocationsAsProportions)
      {
        for ( var i = 0; i < Circles .length; i++)
        {
          Circles[i].centerX = Circles[i].centerX*WindowX;
          Circles[i].centerY = Circles[i].centerY*WindowY;
        }
      }
      return Circles;
    }
      trial(display_element, trial) {
        this.display = display_element;
        this.params = trial;
        console.log(this)
        this.Circles = this.convert_circles_locations(this.params.Circles, LocationsAsProportions, this.params.canvas_width, this.params.canvas_height)
          // display stimulus
          //show prompt if there is one

          //display buttons
          var buttons = [];
          if (Array.isArray(trial.button_html)) {
              if (trial.button_html.length == trial.choices.length) {
                  buttons = trial.button_html;
              }
              else {
                  console.error("Error in html-button-response plugin. The length of the button_html array does not equal the length of the choices array");
              }
          }
          else {
              for (var i = 0; i < trial.choices.length; i++) {
                  buttons.push(trial.button_html);
              }
          }

          var html = '';
          for (var i = 0; i < Circles.length; i++) {
            var tempX = (Circles[i].centerX*90-50)
            var tempY = (Circles[i].centerY*90-50)
            html += '<button id=Loc'+i+' data-choice='+i+' style="background-color: red; position: relative; left:'+tempX+'vw; top:'+tempY+'vh">'+Circles[i].label+'</button>'
          }
          

         
          display_element.innerHTML = html;
          // start time
          var start_time = performance.now();
          // add event listeners to buttons
          for (var i = 0; i < Circles.length; i++) {
              display_element
                  .querySelector("#Loc" + i)
                  .addEventListener("click", (e) => {
                  var btn_el = e.currentTarget;
                  var choice = btn_el.getAttribute("data-choice"); // don't use dataset for jsdom compatibility
                  console.log(choice)
                  after_response(choice);
              });
          }
          // store response
          var response = {
              rt: null,
              button: null,
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
            console.log(choice)
            var btn = display_element.querySelector("#Loc" + choice)
            console.log(btn)
            btn.style.backgroundColor = "blue";
            
            //btn.setAttribute("style", "background-color:blue;");
            
              // measure rt
              var end_time = performance.now();
              var rt = Math.round(end_time - start_time);
              response.button = parseInt(choice);
              response.rt = rt;
              // after a valid response, the stimulus will have the CSS class 'responded'
              // which can be used to provide visual feedback that a response was recorded
              // display_element.querySelector("#jspsych-html-button-response-stimulus").className +=
              //     " responded";
              // disable all the buttons after a response
              var btns = document.querySelectorAll(".jspsych-html-button-response-button button");
              for (var i = 0; i < btns.length; i++) {
                  //btns[i].removeEventListener('click');
                  btns[i].setAttribute("disabled", "disabled");
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
  HtmlButtonResponsePluginTouchscreen.info = info;

  return HtmlButtonResponsePluginTouchscreen;

})(jsPsychModule);
