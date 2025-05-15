var jsPsychImageButtonResponseCST = (function (jspsych) {
  'use strict';

  const info = {
      name: "image-button-response",
      parameters: {
          /** The image to be displayed */
          stimulus: {
              type: jspsych.ParameterType.IMAGE,
              pretty_name: "Stimulus",
              default: undefined,
          },
          discardPile: {
              type: jspsych.ParameterType.IMAGE,
              pretty_name: "Discard",
              default: undefined,
          },          
          /** Set the image height in pixels */
          stimulus_height: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Image height",
              default: null,
          },
          /** Set the image width in pixels */
          stimulus_width: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Image width",
              default: null,
          },
          /** Maintain the aspect ratio after setting width or height */
          maintain_aspect_ratio: {
              type: jspsych.ParameterType.BOOL,
              pretty_name: "Maintain aspect ratio",
              default: true,
          },
          /** Array containing the label(s) for the button(s). */
          choices: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Choices",
              default: undefined,
              array: true,
          },
          feedback: {
            type: jspsych.ParameterType.STRING,
            pretty_name: "Feedback",
            default: ['Correct','Incorrect'],
            array: true,
          },
          /** The HTML for creating button. Can create own style. Use the "%choice%" string to indicate where the label from the choices parameter should be inserted. */
          button_html: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Button HTML",
              default: '<button class="jspsych-btn">%choice%</button>',
              array: true,
          },
          /** Any content here will be displayed under the button. */
          prompt: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Prompt",
              default: null,
          },
          discardPileText: {
            type: jspsych.ParameterType.HTML_STRING,
            pretty_name: "Prompt",
            default: 'Discard Pile',
          },
          BlankCard: {
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
          feedback_duration: {
            type: jspsych.ParameterType.INT,
            pretty_name: "Feedback duration",
            default: null,
        },
        rule_change_count: {
            type: jspsych.ParameterType.INT,
            pretty_name: "Rule Change Count",
            default: 10,
        },
        number_of_cards: {
            type: jspsych.ParameterType.INT,
            pretty_name: "Number of Cards",
            default: 64,
        },
        rule_list: {
            type: jspsych.ParameterType.INT,
            pretty_name: "Rule List",
            default: [0],
        },
        rule_mapping: {
            type: jspsych.ParameterType.STRING,
            pretty_name: "Rule Mapping String",
            default: "NCF",
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
          /**
           * If true, the image will be drawn onto a canvas element (prevents blank screen between consecutive images in some browsers).
           * If false, the image will be shown via an img element.
           */
          render_on_canvas: {
              type: jspsych.ParameterType.BOOL,
              pretty_name: "Render on canvas",
              default: true,
          },
      },
  };
  /**
   * **image-button-response**
   *
   * jsPsych plugin for displaying an image stimulus and getting a button response
   *
   * @author Josh de Leeuw
   * @see {@link https://www.jspsych.org/plugins/jspsych-image-button-response/ image-button-response plugin documentation on jspsych.org}
   */
  
    

  class ImageButtonResponsePlugin {
      constructor(jsPsych) {
          this.jsPsych = jsPsych;

      }
    make_shuffle(trial) {
        
        console.log(trial)
        console.log("NTrials is: " + trial.number_of_cards ) 
        var flag = true
        
        var temp = [...Array(trial.stimulus.FileNames.length).keys()]
        var t = shuffle(temp)
        
        if ( t.length <= trial.number_of_cards )
            { t = t.concat(shuffle(temp)) }
            if ( t.length <= trial.number_of_cards )
            { t = t.concat(shuffle(temp)) }
            t = t.slice(0, trial.number_of_cards)
        trial.t = t
        
        var ShuffledImages = []
        var ShuffledFactors = []
        for ( var i = 0; i < trial.number_of_cards; i++ )
        {   
            ShuffledImages.push(trial.stimulus.FileNames[t[i]]) 
            ShuffledFactors.push(trial.stimulus.FactorMapping[t[i]]) 
        }

        
        trial.ShuffledImages = ShuffledImages
        trial.ShuffledFactors = ShuffledFactors
        console.log(trial)

    }

      trial(display_element, trial) {
          var height, width;
          var correct_pile
            var CorrectInRowCount = 0
          var end_time = 0
            var rt = 0
          // make the trial shuffle list
          this.make_shuffle(trial)
          console.log(trial)
          var html;
          var count = 0
          var CurrentRuleCount = 0
          var PreviousRule = 2
          if (trial.render_on_canvas) {
            console.log("RENDER ON CANVAS")
              var image_drawn = false;
              // first clear the display element (because the render_on_canvas method appends to display_element instead of overwriting it with .innerHTML)
              if (display_element.hasChildNodes()) {
                  // can't loop through child list because the list will be modified by .removeChild()
                  while (display_element.firstChild) {
                      display_element.removeChild(display_element.firstChild);
                  }
              }
              // create canvas element and image
              var canvas = document.createElement("canvas");
              canvas.id = "jspsych-image-button-response-stimulus";
              canvas.style.margin = "0";
              canvas.style.padding = "0";
              var ctx = canvas.getContext("2d");
              var img = new Image();

              img.onload = () => {
                  // if image wasn't preloaded, then it will need to be drawn whenever it finishes loading
                  if (!image_drawn) {
                      getHeightWidth(); // only possible to get width/height after image loads
                      ctx.drawImage(img, 0, 0, width, height);
                  }
              };
              img.src = trial.stimulus;
              // get/set image height and width - this can only be done after image loads because uses image's naturalWidth/naturalHeight properties
              const getHeightWidth = () => {
                  if (trial.stimulus_height !== null) {
                      height = trial.stimulus_height;
                      if (trial.stimulus_width == null && trial.maintain_aspect_ratio) {
                          width = img.naturalWidth * (trial.stimulus_height / img.naturalHeight);
                      }
                  }
                  else {
                      height = img.naturalHeight;
                  }
                  if (trial.stimulus_width !== null) {
                      width = trial.stimulus_width;
                      if (trial.stimulus_height == null && trial.maintain_aspect_ratio) {
                          height = img.naturalHeight * (trial.stimulus_width / img.naturalWidth);
                      }
                  }
                  else if (!(trial.stimulus_height !== null && trial.maintain_aspect_ratio)) {
                      // if stimulus width is null, only use the image's natural width if the width value wasn't set
                      // in the if statement above, based on a specified height and maintain_aspect_ratio = true
                      width = img.naturalWidth;
                  }
                  canvas.height = height;
                  canvas.width = width;
              };
              getHeightWidth(); // call now, in case image loads immediately (is cached)
              // create buttons
              var buttons = [];
              if (Array.isArray(trial.button_html)) {
                  if (trial.button_html.length == trial.choices.length) {
                      buttons = trial.button_html;
                  }
                  else {
                      console.error("Error in image-button-response plugin. The length of the button_html array does not equal the length of the choices array");
                  }
              }
              else {
                  for (var i = 0; i < trial.choices.length; i++) {
                      buttons.push(trial.button_html);
                  }
              }
              var btngroup_div = document.createElement("div");
              btngroup_div.id = "jspsych-image-button-response-btngroup";
              html = "";
            // add prompt
              if (trial.prompt !== null) {
                  html += trial.prompt;
              }
              
              for (var i = 0; i < trial.choices.length; i++) {
                  var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
                  html +=
                      '<div class="jspsych-image-button-response-button" style="display: inline-block; margin:' +
                          trial.margin_vertical +
                          " " +
                          trial.margin_horizontal +
                          '" id="jspsych-image-button-response-button-' +
                          i +
                          '" data-choice="' +
                          i +
                          '">' +
                          str +
                          "</div>";
              }
              btngroup_div.innerHTML = html;
              // add canvas to screen and draw image
              display_element.insertBefore(canvas, null);
              if (img.complete && Number.isFinite(width) && Number.isFinite(height)) {
                  // if image has loaded and width/height have been set, then draw it now
                  // (don't rely on img onload function to draw image when image is in the cache, because that causes a delay in the image presentation)
                  ctx.drawImage(img, 0, 0, width, height);
                  image_drawn = true;
              }
              // add buttons to screen
              display_element.insertBefore(btngroup_div, canvas.nextElementSibling);
              // add prompt if there is one
              //if (trial.prompt !== null) {
              //    display_element.insertAdjacentHTML("beforeend", trial.prompt);
              //}
          }
          else {
            // DO NOT RENDER ON CANVAS
            html = ''
            
              //display buttons
              var buttons = [];
              if (Array.isArray(trial.button_html)) {
                  if (trial.button_html.length == trial.choices.length) {
                      buttons = trial.button_html;
                  }
                  else {
                      console.error("Error in image-button-response plugin. The length of the button_html array does not equal the length of the choices array");
                  }
              }
              else {
                  for (var i = 0; i < trial.choices.length; i++) {
                      buttons.push(trial.button_html);
                  }
              }


              
              // Make row for the stimuli at the top

              html += '<table border="0" class="CardSortTable" id="CSTtable"><thead><tr>'
              html += '<div id="jspsych-image-button-response-btngroup">';
              for (var i = 0; i < trial.choices.length; i++) {
                  var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
                  console.log(str)
                  html +=
                      '<th><div class="jspsych-image-button-response-button" style="display: inline-block; ' +
                          
                          '" id="jspsych-image-button-response-button-' +
                          i +
                          '" data-choice="' +
                          i +
                          '">' +
                          str +
                          "</div></th>";
              }
              html += "</div><p>";
              html += '</tr></thead><tbody>'
              // Second row for the prompt/feedback
              html += '<tr max-height="50px"><td colspan="4"><div id="id_feedback"><h2>'+trial.prompt
              html += '</h2></div></td></tr>'
              // Third row for discard pile
              var Rotation = 0//(Math.random() * 10) - 5;
              html += '<tr><td colspan="1">'
              html += '<img src="' + trial.discardPile + '" id="jspsych-image-button-response-discard"  style="transform:rotate('+Rotation+'deg)";>';
              html += '<p></td><td width="70%" align="left"  colspan="1"> &#8592; '+trial.discardPileText
              html += '</td></tr>'
              // Fourth row for the stimulus card
              html += '<tr><td colspan="4">'
              // display stimulus as an image element
              console.log(document.getElementById("jspsych-image-button-response-stimulus"))
              
              // MODIFIED STUFF
              console.log(trial.ShuffledImages[count])
              html += '<img  src="' + trial.ShuffledImages[count] + '"style="height:25%" id="jspsych-image-button-response-stimulus" >';

              //html += '<img  src="' + trial.ShuffledImages[count] + 'class="CardSortTable">';


              html += '</td></tr></tbody></table>'



              // update the page content
              display_element.innerHTML = html;
              // set image dimensions after image has loaded (so that we have access to naturalHeight/naturalWidth)
              var img = display_element.querySelector("#jspsych-image-button-response-stimulus");
              var imgDiscard = display_element.querySelector("#jspsych-image-button-response-discard");
              if (trial.stimulus_height !== null) {
                  height = trial.stimulus_height;
                  if (trial.stimulus_width == null && trial.maintain_aspect_ratio) {
                      width = img.naturalWidth * (trial.stimulus_height / img.naturalHeight);
                  }
              }
              else {
                  height = img.naturalHeight;
              }
              if (trial.stimulus_width !== null) {
                  width = trial.stimulus_width;
                  if (trial.stimulus_height == null && trial.maintain_aspect_ratio) {
                      height = img.naturalHeight * (trial.stimulus_width / img.naturalWidth);
                  }
              }
              else if (!(trial.stimulus_height !== null && trial.maintain_aspect_ratio)) {
                  // if stimulus width is null, only use the image's natural width if the width value wasn't set
                  // in the if statement above, based on a specified height and maintain_aspect_ratio = true
                  width = img.naturalWidth;
              }
              img.style.height = height.toString() + "px";
              img.style.width = width.toString() + "px";
              imgDiscard.style.height = height.toString() + "px";
              imgDiscard.style.width = width.toString() + "px";
          }
          // start timing
          var start_time = performance.now();
          for (var i = 0; i < trial.choices.length; i++) {
              display_element
                  .querySelector("#jspsych-image-button-response-button-" + i)
                  .addEventListener("click", (e) => {
                  var btn_el = e.currentTarget;
                  var choice = btn_el.getAttribute("data-choice"); // don't use dataset for jsdom compatibility
                  after_response(choice);
              });
          }
          // store response
          var response = {
              rt: [],
              button: [],
              accuracy: [],
              correct_pile: [],
              current_rule: [],
              perseverative_error: [],
              correctInRow: [],
              CardNumber: [],
              PreviousRule: []
          };
          // function to end trial when it is time
          const end_trial = () => {
              // kill any remaining setTimeout handlers
              this.jsPsych.pluginAPI.clearAllTimeouts();
              // gather the data to store for the trial
              var trial_data = {
                  rt: response.rt,
                  //stimulus: trial.stimulus,
                  response: response.button,
                  accuracy: response.accuracy,
                  correct_pile: response.correct_pile,
                  current_rule: response.current_rule,
                  perseverative_error: response.perseverative_error,
                  correctInRow: response.correctInRow,
                  CardNumber: response.CardNumber,
                  PreviousRule: response.PreviousRule 
              };
              // clear the display
              display_element.innerHTML = "";
              // move on to the next trial
              this.jsPsych.finishTrial(trial_data);
          };
          // function to handle responses by the subject
          function after_response(choice) {
              // NEW STUFF

              var previous_rule = 2
              end_time = performance.now();
              rt = Math.round(end_time - start_time);
              response.button.push(parseInt(choice));
              response.CardNumber.push(count+1)
              response.rt.push(rt);
            //console.log(trial.ShuffledFactors)
                correct_pile = trial.ShuffledFactors[count]
                response.correct_pile.push(Number(correct_pile[0][trial.rule_list[CurrentRuleCount]]))
                response.current_rule.push(trial.rule_mapping[Number(trial.rule_list[CurrentRuleCount])])
                //console.log("The choice was: "+choice)
                //console.log("Current Rule Count is: "+CurrentRuleCount)
                //console.log('Correct response is :'+correct[0][trial.rule_list[CurrentRuleCount]])
                //correct[0][CardSort_parameters.RuleList[CurrentRuleCount]])
                
                document.getElementById("jspsych-image-button-response-stimulus").src = trial.BlankCard;
                document.getElementById("jspsych-image-button-response-discard").src = trial.ShuffledImages[count];
                if ( choice == correct_pile[0][trial.rule_list[CurrentRuleCount]] )
                { 
                    // Correct response
                    document.getElementById("id_feedback").innerHTML = '<h1>'+trial.feedback[0]+'</h1>'
                    response.accuracy.push(1)
                    // Increase the correct responses in a row counter
                    CorrectInRowCount += 1
                    response.perseverative_error.push(0)
                    response.correctInRow.push(CorrectInRowCount)
                    response.PreviousRule.push(trial.rule_mapping[PreviousRule])
                }
                else { 
                    // Incorrect response
                    document.getElementById("id_feedback").innerHTML = '<h1>'+trial.feedback[1]+'</h1>' 
                    response.accuracy.push(0)
                    CorrectInRowCount = 0
                    response.correctInRow.push(CorrectInRowCount)
                    response.PreviousRule.push(trial.rule_mapping[PreviousRule])
//                    console.log("Choice: "+choice)
  //                  console.log("Correct Pile: "+correct_pile[0])
    //                console.log("Previous Rule: "+PreviousRule)
                    // what type of error is this?
                    if ( choice == correct_pile[0][PreviousRule] )
                    {   
                        response.perseverative_error.push(1)
                    }
                    else { response.perseverative_error.push(0) }
                }          
                count++
                // Check for accuracy
                if ( ( CorrectInRowCount == trial.rule_change_count ))
                { 
                    PreviousRule = trial.rule_list[CurrentRuleCount]
                    CurrentRuleCount++ 
                }
        
        
                setTimeout(function(){
                    document.getElementById("id_feedback").innerHTML = '<h1>'+trial.prompt+'</h1>'
                    document.getElementById("jspsych-image-button-response-stimulus").src = trial.ShuffledImages[count];
                    if ( count == trial.number_of_cards ) 
                    { end_trial() }
                }, trial.feedback_duration);
                start_time = performance.now();
                jsPsych.setProgressBar(count/trial.number_of_cards)
                console.log('============================')
                console.log("Count is: "+count)
                console.log("Response: "+parseInt(choice))
                console.log("CurrentRuleCount: "+CurrentRuleCount)
                console.log("Check for rule change: "+( CorrectInRowCount % trial.rule_change_count ))
                console.log("Correct Pile is: "+Number(correct_pile[0][trial.rule_list[CurrentRuleCount]]))
                console.log("Current rule is: " + Number(trial.rule_list[CurrentRuleCount]))
                console.log("NTrials is: " + trial.number_of_cards)
                console.log("Correct in a row: "+CorrectInRowCount)
                console.log("PreviousRule: "+PreviousRule)
                
                // END NEW STUFF

              // measure rt
              
              // after a valid response, the stimulus will have the CSS class 'responded'
              // which can be used to provide visual feedback that a response was recorded
              
              //display_element.querySelector("#jspsych-image-button-response-stimulus").className +=
              //    " responded";
              // disable all the buttons after a response
              
              var btns = document.querySelectorAll(".jspsych-image-button-response-button button");
              /*
              for (var i = 0; i < btns.length; i++) {
                  //btns[i].removeEventListener('click');
                  btns[i].setAttribute("disabled", "disabled");
              }
              */
              if (trial.response_ends_trial) {
                  end_trial();
              }
          }
          // hide image if timing is set
          if (trial.stimulus_duration !== null) {
              this.jsPsych.pluginAPI.setTimeout(() => {
                  display_element.querySelector("#jspsych-image-button-response-stimulus").style.visibility = "hidden";
              }, trial.stimulus_duration);
          }
          // end trial if time limit is set
          if (trial.trial_duration !== null) {
              this.jsPsych.pluginAPI.setTimeout(() => {
                  end_trial();
              }, trial.trial_duration);
          }
          else if (trial.response_ends_trial === false) {
              console.warn("The experiment may be deadlocked. Try setting a trial duration or set response_ends_trial to true.");
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
  ImageButtonResponsePlugin.info = info;

  return ImageButtonResponsePlugin;

})(jsPsychModule);
