var jsPsychHtmlVerticalSliderResponse = (function (jspsych) {
    'use strict';

    const info = {
        name: "html-slider-response",
        parameters: {
            /** The HTML string to be displayed */
            stimulus: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Stimulus",
                default: undefined,
            },
            /** Sets the minimum value of the slider. */
            min: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Min slider",
                default: 0,
            },
            /** Sets the maximum value of the slider */
            max: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Max slider",
                default: 100,
            },
            /** Sets the starting value of the slider */
            sliderStart: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Slider starting value",
                default: 50,
            },
            /** Sets the step of the slider */
            sliderStepSize: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Step",
                default: 1,
            },
            /** Array containing the labels for the slider. Labels will be displayed at equidistant locations along the slider. */
            labels: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Labels",
                default: [],
                array: true,
            },
            /** Width of the slider in pixels. */
            slider_width: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Slider width",
                default: null,
            },
            /** Label of the button to advance. */
            button_label: {
                type: jspsych.ParameterType.STRING,
                pretty_name: "Button label",
                default: "Continue",
                array: false,
            },
            /** If true, the participant will have to move the slider before continuing. */
            require_movement: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Require movement",
                default: false,
            },
            /** Any content here will be displayed below the slider. */
            prompt: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Prompt",
                default: null,
            },
            textAboveSlider: {
                type: jspsych.ParameterType.STRING,
                pretty_name: "Text above slider",
                default: null,
            },
            textBelowSlider: {
                type: jspsych.ParameterType.STRING,
                pretty_name: "Text below slider",
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
            /** If true, trial will end when user makes a response. */
            response_ends_trial: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Response ends trial",
                default: true,
            },
        },
    };
    /**
     * **html-slider-response**
     *
     * jsPsych plugin for showing an HTML stimulus and collecting a slider response
     *
     * @author Josh de Leeuw
     * @see {@link https://www.jspsych.org/plugins/jspsych-html-slider-response/ html-slider-response plugin documentation on jspsych.org}
     */
    class HtmlSliderResponsePlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {
            // half of the thumb width value from jspsych.css, used to adjust the label positions
            var half_thumb_width = 7.5;
            console.log(trial)
            var html

            var html = '<div id="jspsych-html-slider-response-wrapper" style="margin: 0px 0px;">';
            
/* https://stackoverflow.com/questions/20819694/how-can-i-style-two-spans-within-a-div-such-that-when-span-1s-width-increases-b */
                /*html += '<div id="jspsych-html-slider-response-stimulus">' + trial.stimulus + "</div>";            */
                html += '<div class="slider">'
            
            html += '<table border="2px" id="sliderTable" height="100%">'
            html += '<tr>'
            html += '<td rowspan="3">'
            html += trial.stimulus
            
            html += '<button id="jspsych-html-slider-response-next" class="jspsych-btn" ' +
            (trial.require_movement ? "disabled" : "") +
            ">" +
            trial.button_label +
            "</button>"
    
    '</td>'
    html += '<td id="topCell">'+trial.textAboveSlider+'</td>'
  html += '</tr>'
  html += '<tr>'
    html += '<td>'
    html += '<div class="VAScell">'


                    html += '<div class="track">'
                        html += '<div class="groove"></div>'
                        html += '<div class="ticks">'
                            var count = 0
                            for ( var j = trial.min; j <= trial.max; j += trial.sliderStepSize) {
                                if (count % 5 == 0) { html += '<span class="tickWide"><span class="tickLabel">'+count+'</span></span>' }
                                else { html += '<span class="tick"></span>' }
                                count += 1   
                            }
                        html += '</div>'
                    html += '</div>'
                    
                    html += '<input type="range" value='+ trial.sliderStart +' min='+ trial.min
                    html += 'step='+ trial.step +' max='+ trial.max +' id="jspsych-html-slider-response-response" bind:value> '
                html += '</div>'
    html += '</td>'
  html += '</tr>'
  html += '<tr>'
    html += '<td id="bottomCell">'+trial.textBelowSlider+'</td>'
  html += '</tr>'
html += '</table>'

                html += '</div>'
                

                html += '</div>'
            html += '</div>'
            display_element.innerHTML = html;

            var response = {
                rt: null,
                response: null,
            };
            if (trial.require_movement) {
                const enable_button = () => {
                    display_element.querySelector("#jspsych-html-slider-response-next").disabled = false;
                };
                display_element
                    .querySelector("#jspsych-html-slider-response-response")
                    .addEventListener("mousedown", enable_button);
                display_element
                    .querySelector("#jspsych-html-slider-response-response")
                    .addEventListener("touchstart", enable_button);
                display_element
                    .querySelector("#jspsych-html-slider-response-response")
                    .addEventListener("change", enable_button);
            }
            const end_trial = () => {
                this.jsPsych.pluginAPI.clearAllTimeouts();
                // save data
                var trialdata = {
                    rt: response.rt,
                    stimulus: trial.stimulus,
                    slider_start: trial.slider_start,
                    response: response.response,
                };
                display_element.innerHTML = "";
                // next trial
                this.jsPsych.finishTrial(trialdata);
            };
            display_element
                .querySelector("#jspsych-html-slider-response-next")
                .addEventListener("click", () => {
                    // measure response time
                    var endTime = performance.now();
                    response.rt = Math.round(endTime - startTime);
                    response.response = display_element.querySelector("#jspsych-html-slider-response-response").valueAsNumber;
                    if (trial.response_ends_trial) {
                        end_trial();
                    }
                    else {
                        display_element.querySelector("#jspsych-html-slider-response-next").disabled = true;
                    }
                    console.log(response)
                    
        

                });
            if (trial.stimulus_duration !== null) {
                this.jsPsych.pluginAPI.setTimeout(() => {
                    display_element.querySelector("#jspsych-html-slider-response-stimulus").style.visibility = "hidden";
                }, trial.stimulus_duration);
            }
            // end trial if trial_duration is set
            if (trial.trial_duration !== null) {
                this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
            }
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
            const default_data = {
                stimulus: trial.stimulus,
                slider_start: trial.slider_start,
                response: this.jsPsych.randomization.randomInt(trial.min, trial.max),
                rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true),
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
                const el = display_element.querySelector("input[type='range']");
                setTimeout(() => {
                    this.jsPsych.pluginAPI.clickTarget(el);
                    el.valueAsNumber = data.response;
                }, data.rt / 2);
                this.jsPsych.pluginAPI.clickTarget(display_element.querySelector("button"), data.rt);
            }
        }
    }
    HtmlSliderResponsePlugin.info = info;

    return HtmlSliderResponsePlugin;

})(jsPsychModule);
