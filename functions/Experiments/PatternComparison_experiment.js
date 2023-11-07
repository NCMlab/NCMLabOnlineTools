
var ImageFolder = 'assets/Images/PatternComparison/'

  PatternComparisonSetup = [
    ['AFig8a.bmp','AFig8b.bmp','right','1'],
    ['AFig7a.bmp','AFig7b.bmp','right','1'],
    ['AFig6a.bmp','AFig6b.bmp','right','1'],
    ['AFig5a.bmp','AFig5b.bmp','right','1'],
    ['AFig4a.bmp','AFig4b.bmp','right','1'],
    ['AFig3a.bmp','AFig3b.bmp','right','1'],
    ['AFig2a.bmp','AFig2b.bmp','right','1'],
    ['AFig18a.bmp','AFig18b.bmp','right','1'],
    ['AFig16a.bmp','AFig16b.bmp','right','1'],
    ['AFig15a.bmp','AFig15b.bmp','right','1'],
    ['AFig12a.bmp','AFig12b.bmp','right','1'],
    ['AFig11a.bmp','AFig11b.bmp','right','1'],
    ['AFig1a.bmp','AFig1a.bmp','left','1'],
    ['AFig1b.bmp','AFig1b.bmp','left','1'],
    ['AFig9a.bmp','AFig9a.bmp','left','1'],
    ['AFig10a.bmp','AFig10a.bmp','left','1'],
    ['AFig9b.bmp','AFig9b.bmp','left','1'],
    ['AFig10b.bmp','AFig10b.bmp','left','1'],
    ['AFig13a.bmp','AFig13a.bmp','left','1'],
    ['AFig14a.bmp','AFig14a.bmp','left','1'],
    ['AFig13b.bmp','AFig13b.bmp','left','1'],
    ['AFig14b.bmp','AFig14b.bmp','left','1'],
    ['AFig17a.bmp','AFig17a.bmp','left','1'],
    ['AFig17b.bmp','AFig17b.bmp','left','1'],
    ['BFig2a.bmp','BFig2b.bmp','right','2'],
    ['BFig4a.bmp','BFig4b.bmp','right','2'],
    ['BFig6a.bmp','BFig6b.bmp','right','2'],
    ['BFig7a.bmp','BFig7b.bmp','right','2'],
    ['BFig10a.bmp','BFig10b.bmp','right','2'],
    ['BFig11a.bmp','BFig11b.bmp','right','2'],
    ['BFig18a.bmp','BFig18b.bmp','right','2'],
    ['BFig19a.bmp','BFig19b.bmp','right','2'],
    ['BFig5a.bmp','BFig5b.bmp','right','2'],
    ['BFig20a.bmp','BFig20b.bmp','right','2'],
    ['BFig16a.bmp','BFig16b.bmp','right','2'],
    ['BFig17a.bmp','BFig17b.bmp','right','2'],
    ['BFig1a.bmp','BFig1a.bmp','left','2'],
    ['BFig1b.bmp','BFig1b.bmp','left','2'],
    ['BFig3a.bmp','BFig3a.bmp','left','2'],
    ['BFig3b.bmp','BFig3b.bmp','left','2'],
    ['BFig8a.bmp','BFig8a.bmp','left','2'],
    ['BFig9a.bmp','BFig9a.bmp','left','2'],
    ['BFig8b.bmp','BFig8b.bmp','left','2'],
    ['BFig9b.bmp','BFig9b.bmp','left','2'],
    ['BFig12a.bmp','BFig12a.bmp','left','2'],
    ['BFig13a.bmp','BFig13a.bmp','left','2'],
    ['BFig12b.bmp','BFig12b.bmp','left','2'],
    ['BFig13b.bmp','BFig13b.bmp','left','2'],
    ['Fig3a.bmp','Fig3b.bmp','right','3'],
    ['Fig4a.bmp','Fig4b.bmp','right','3'],
    ['Fig9a.bmp','Fig9b.bmp','right','3'],
    ['Fig11a.bmp','Fig11b.bmp','right','3'],
    ['Fig12a.bmp','Fig12b.bmp','right','3'],
    ['Fig15a.bmp','Fig15b.bmp','right','3'],
    ['Fig16a.bmp','Fig16b.bmp','right','3'],
    ['Fig17a.bmp','Fig17b.bmp','right','3'],
    ['Fig18a.bmp','Fig18b.bmp','right','3'],
    ['Fig19a.bmp','Fig19b.bmp','right','3'],
    ['Fig10a.bmp','Fig10b.bmp','right','3'],
    ['Fig13a.bmp','Fig13b.bmp','right','3'],
    ['Fig1a.bmp','Fig1a.bmp','left','3'],
    ['Fig2a.bmp','Fig2a.bmp','left','3'],
    ['Fig1b.bmp','Fig1b.bmp','left','3'],
    ['Fig2b.bmp','Fig2b.bmp','left','3'],
    ['Fig5a.bmp','Fig5a.bmp','left','3'],
    ['Fig6a.bmp','Fig6a.bmp','left','3'],
    ['Fig7a.bmp','Fig7a.bmp','left','3'],
    ['Fig8a.bmp','Fig8a.bmp','left','3'],
    ['Fig5b.bmp','Fig5b.bmp','left','3'],
    ['Fig6b.bmp','Fig6b.bmp','left','3'],
    ['Fig7b.bmp','Fig7b.bmp','left','3'],
    ['Fig8b.bmp','Fig8b.bmp','left','3'],
  ]
  
  const PracticeList = [1,13,25,37,49,61]
  var PracticeLeftFileNames = []
  var PracticeRightFileNames = []
  var PracticeCorrect = []
  var PracticeLoadLevel = []
  for ( var i = 0; i < PracticeList.length; i++ )
  {
    PracticeLeftFileNames.push(ImageFolder+PatternComparisonSetup[PracticeList[i]][0])
    PracticeRightFileNames.push(ImageFolder+PatternComparisonSetup[PracticeList[i]][1]) 
    PracticeCorrect.push(PatternComparisonSetup[PracticeList[i]][2])
    PracticeLoadLevel.push(PatternComparisonSetup[PracticeList[i]][3]) 
  }

  var LeftFileNames = []
  var RightFileNames = []
  var Correct = []
  var LoadLevel = []
  // shuffle
  var temp = [...Array(PatternComparisonSetup.length).keys()]
  var t = shuffle(temp)
  for ( var i = 0; i < PatternComparisonSetup.length; i++ )
  {
    LeftFileNames.push(ImageFolder+PatternComparisonSetup[t[i]][0])
    RightFileNames.push(ImageFolder+PatternComparisonSetup[t[i]][1]) 
    Correct.push(PatternComparisonSetup[t[i]][2])
    LoadLevel.push(PatternComparisonSetup[t[i]][3]) 
  }

  




var timeline = [];
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// pre load image
var preload_imagesA = {
  type: jsPsychPreload,
  images: function(){
    return LeftFileNames
  },
}
var preload_imagesB = {
  type: jsPsychPreload,
  images: function(){
    return RightFileNames
  },
}

var PracticeTrial = {
  type: jsPsychImageButtonResponsePatternComp,
  render_on_canvas: false,
  stimulus_height: 200,
  stimulus_width: 200,
  stimulus: function()
  { return [PracticeLeftFileNames, PracticeRightFileNames, PracticeCorrect, PracticeLoadLevel]},
  
  choices:  ['Same','Different'],
  prompt: '+',
  feedback_duration: 1000,
  response_ends_trial: false,
  
  on_finish: function(data) {
    data.trial = "Practice"
    console.log(data)
  }
};


var TestTrial = {
  type: jsPsychImageButtonResponsePatternComp,
  render_on_canvas: false,
  stimulus_height: 200,
  stimulus_width: 200,
  stimulus: function()
  { return [LeftFileNames, RightFileNames, Correct, LoadLevel]},
  choices:  ['Same','Different'],
  prompt: '+',
  response_ends_trial: false,
  
  on_finish: function(data) {
    data.trial = "Test"
    console.log(data)
  }
};
timeline.push(Welcome)
timeline.push(Instructions01)
timeline.push(preload_imagesA)
timeline.push(preload_imagesB)
timeline.push(Instructions02)
timeline.push(PracticeTrial)
timeline.push(Instructions03)
timeline.push(TestTrial)
timeline.push(ThankYou)


