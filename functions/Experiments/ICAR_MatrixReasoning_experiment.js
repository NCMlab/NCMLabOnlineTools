
// =======================================================================
// Define internal variables
var timeline = [];

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Define all of the different the stimuli 

var trial = {
    type: jsPsychImageButtonResponse,
    stimulus: '../assets/MatrixReasoning/ICAR/12043/12043_stim.png',
    choices: [
      '<img src="../assets/MatrixReasoning/ICAR/12043/12043_optionA.png" alt="Girl in a jacket" width="50" height="50">',
      '<img src="../assets/MatrixReasoning/ICAR/12043/12043_optionB.png" alt="Girl in a jacket" width="50" height="50">',
      '<img src="../assets/MatrixReasoning/ICAR/12043/12043_optionC.png" alt="Girl in a jacket" width="50" height="50">',
      '<img src="../assets/MatrixReasoning/ICAR/12043/12043_optionD.png" alt="Girl in a jacket" width="50" height="50">',
      '<img src="../assets/MatrixReasoning/ICAR/12043/12043_optionE.png" alt="Girl in a jacket" width="50" height="50">',
      '<img src="../assets/MatrixReasoning/ICAR/12043/12043_optionF.png" alt="Girl in a jacket" width="50" height="50">',
      ],
    prompt: "<p>Please indicate which is the best answer to complete the figure below.</p>"
};

timeline.push(trial)