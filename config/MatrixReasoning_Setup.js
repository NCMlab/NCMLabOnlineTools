
var MatrixList = [
  {"stim":"12043","correct":4},
  {"stim":"12044","correct":3},
  {"stim":"12045","correct":5},
  {"stim":"12046","correct":2},
  {"stim":"12047","correct":2},
  {"stim":"12048","correct":4},
  {"stim":"12050","correct":5},
  {"stim":"12053","correct":3},
  {"stim":"12054","correct":1},
  {"stim":"12055","correct":4},
  {"stim":"12056","correct":5}
 ]


var MatrixReasoning_ICAR = {
  StimulusFolderName: "ICAR",
  StimList: MatrixList,
  StimWidth: "70vw", // how large the options are
  StimHeight: "70vh",
  FixationTimeBetweenTrials: 2000,// milliseconds
  OptionMapping: '123456', // used for scoring
  AllowedTime: 10*60, // seconds
  ShowWelcome: true,
	ShowThankYou: false,
  ShowInstructions: true,
}


add('MatrixReasoning_ICAR', function(){ MatrixReasoning_parameters = MatrixReasoning_ICAR});