var EN_Instructions = {}
EN_Instructions.Instructions = [
    {'page': 'For this task you will see 3x3 arrays of geometric shapes with one of the nine shapes missing. You are to identify which of six geometric shapes presented below the grid best complete the stimuli.'},
    {'page': '<div>You will see images like this and will need to pick from a series of options (not shown here) which best fit where the question mark is.<br />'+
    'Notice the different shapes, the different colorings, and the different orientations. Use all of this information when making your decisions.'+
    '</div><div><img src='+BaseFolderName+'InstructionalImage.png alt=Instructional Image></image></div>'},
    {'page': 'You will have ten minutes to complete eleven trials. <div>Press next to begin</div>'}
  ]
EN_Instructions.ThankYouText = [{'page': 'Thank you. Press Next to Continue'}]
EN_Instructions.OptionsPrompt = "<p>Please indicate which is the best answer to complete the figure."
EN_Instructions.WelcomeText = [
  {'page': 'Welcome to the Matrix Reasoning Task.'},
]

add('EN_Instructions_Default', function(){ Instructions = EN_Instructions});
// ========================================================
// FRENCH 
var FR_Instructions = {}
FR_Instructions.Instructions = [
  {'page': 'FR: For this task you will see 3x3 arrays of geometric shapes with one of the nine shapes missing. You are to identify which of six geometric shapes presented below the grid best complete the stimuli.'},
  {'page': '<div>You will see images like this and will need to pick from a series of options (not shown here) which best fit where the question mark is.<br />'+
  'Notice the different shapes, the different colorings, and the different orientations. Use all of this information when making your decisions.'+
  '</div><div><img src='+BaseFolderName+'InstructionalImage.png alt=Instructional Image></image></div>'},
  {'page': 'You will have ten minutes to complete eleven trials. <div>Press next to begin</div>'}
]
FR_Instructions.ThankYouText = [{'page': 'FR: Thank you. Press Next to Continue'}]
FR_Instructions.OptionsPrompt = "<p>FR: Please indicate which is the best answer to complete the figure."
FR_Instructions.WelcomeText = [
{'page': 'FR: Welcome to the Matrix Reasoning Task.'},
]

add('FR_Instructions_Default', function(){ Instructions = FR_Instructions});