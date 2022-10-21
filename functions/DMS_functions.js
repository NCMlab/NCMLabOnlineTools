class AdaptiveStimulusList {
  // This class is made to keep track of the stimuli and probes used in the previous trials
  constructor(CurrentStim='', PreviousStim=[], CurrentProbe='', PreviousProbe=[], CurrentCorrect = false)
  {
    // keep track of the current trial and make an array of all
    this.CurrentStim = CurrentStim;
    this.PreviousStim = [];
    this.CurrentProbe = CurrentProbe;
    this.PreviousProbe = [];
    this.CurrentCorrect = CurrentCorrect;

  }
  // return the current stimulus
  getCurrentStim() {return this.CurrentStim}
  // return the stimulus from teh previous trial
  getLastStim() {return this.PreviousStim[this.PreviousStim.length - 1]}

  getLastProbe() {return this.PreviousProbe[this.PreviousProbe.length - 1]}

  getCurrentCorrect() {return this.CurrentCorrect}
  // update the current stim and add it to the array of stimuli
  addStim(newStim) {
    this.CurrentStim = newStim;
    this.PreviousStim.push(this.CurrentStim);
  }
// update the current probe and add it to the array of probes
  addProbe(newProbe) {
    this.CurrentProbe = newProbe;
    this.PreviousProbe.push(this.CurrentProbe);
  }
  addCorrect(newCorrect) {
    this.CurrentCorrect = newCorrect
  }
}


function PutLettersInGrid(LetterList,NRows,NCols, width=600, height=300, FontSize=40)
	{
		var count = 0;
		var Table = '';
		// create the html table and assign the class which is defined in the HTML file
		Table += '<table class="a">'
		for (var i=0; i<NRows; i++) { // Cycle over rows
			Table += '<tr height="'+height+'">'
			for (var j=0; j<NCols; j++) { // cycle over columns
				Table += '<td style="font-size:'+FontSize+'px; line-width:100px">'+LetterList[count]+'</td>';
				count += 1;
			}
		}
		return Table
	}

function CountdownTimer(MillisecondsPerNumber = 1000)
	{
    var Three = {
      type: 'html-keyboard-response',
      stimulus: '<p style="font-size:'+FontSize+'px">3</p>',
      choices: jsPsych.NO_KEYS,
      trial_duration: MillisecondsPerNumber,
      }
    var Two = {
      type: 'html-keyboard-response',
      stimulus: '<p style="font-size:'+FontSize+'px">2</p>',
      choices: jsPsych.NO_KEYS,
      trial_duration: MillisecondsPerNumber,
      }
    var One = {
      type: 'html-keyboard-response',
      stimulus: '<p style="font-size:'+FontSize+'px">1</p>',
      choices: jsPsych.NO_KEYS,
      trial_duration: MillisecondsPerNumber,
      }

    var Countdown_procedure = {
      // Make sure this order is correct: fixation cue and then the stimulus
      // Otherwise the scoring will not make any sense
      timeline: [Three, Two, One],
      randomize_order: false  
    }
    return Countdown_procedure
    } 
	
function RemoveOldLetters(AllowableLetters, LastTrialStimulus, LastTrialProbe)
	{	// remove the letters from the last trial from teh list of allowable letters
		// For the first trial there are no previous stimuli, so check for that
		if (typeof LastTrialStimulus !== 'undefined')
		{
			for (var i=0; i < LastTrialStimulus.length; i++) {
				AllowableLetters = AllowableLetters.replace(LastTrialStimulus[i],'');
			}
			// remove the probe letter also, after converting it to uppercase
			AllowableLetters = AllowableLetters.replace(LastTrialProbe.toUpperCase(),'')
		}
		else {
			AllowabelLetters = AllowableLetters
		}
		return AllowableLetters
	}

function MakeStimulus(LettersToUse, Load)
	{
		// Make a letter list for use as stimuli
		// Shuffle the letters
		// Make sure a load 1 letter is not L
		var IsEll = true
		while (IsEll) {
			var ShuffledLetters = shuffle(LettersToUse)
			//console.log(LettersToUse)
			// Onky take the required number of letters based on the load
			var LetterString = ShuffledLetters.substring(0,Load)
			console.log(LetterString)
			if (Load == 1 & LetterString == "L") {
				IsEll = true
			}
			else {IsEll = false}
		}
		return LetterString
	}	

function CreateProbeLetter(CurrentStim, AllowableLetters)
	{
		ProbeType = MakeProbeType()

		if (ProbeType == 1)
		{
			//LookingForProbe = true
			//while (LookingForProbe)
			//{
				// select a random letter from the current stim
				// ADD CHCK TO MAKE SURE ELL IS NOT THE PROBE
				var IsEll = true
				while (IsEll) {
					ShuffledStim = shuffle(CurrentStim)
					CurrentProbe = ShuffledStim[0].toLowerCase()
					console.log('Trying: '+CurrentProbe)
					if (CurrentProbe != 'l') {
						IsEll = false
					}
				}
				var correct = true
			//	if (CurrentProbe != "L")
			//	{LookingForProbe = false}
			//}
		}
		else 
		{ // Remove the current stim letters from the available letter set
        	CurrentAllowableList = RemoveOldLetters(AllowableLetters, CurrentStim, '')
			var IsEll = true
			while (IsEll) {
				ShuffledStim = shuffle(CurrentAllowableList)
				CurrentProbe = ShuffledStim[0].toLowerCase()
				// Check to make sure the probe letter is NOT ell
				if (CurrentProbe != 'l') {
					IsEll = false
				}			
			}
			var correct = false
		}
		return [CurrentProbe, correct]
	}
function MakeProbeType()
	{
		// Decide if this is a posiitve (1) or negative (0) trial
		return Math.round(Math.random())
	}
function getRandomInt(n) 
	{ //https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/
  		return Math.floor(Math.random() * n);
	}

function shuffle(s) {
	  var arr = s.split('');           // Convert String to array
	  var n = arr.length;              // Length of the array
	  
	  for(var i=0 ; i<n-1 ; ++i) {
	    var j = getRandomInt(n);       // Get random of [0, n-1]
	   
	    var temp = arr[i];             // Swap arr[i] and arr[j]
	    arr[i] = arr[j];
	    arr[j] = temp;
	  }
	  s = arr.join('');                // Convert Array to string
	  return s;                        // Return shuffled string
	}

function MakeAdaptiveStimulus(Load, LastTrialStimulus, LastTrialProbe)
	// Make stimuli on-the-fly and make sure that no current letters were included in the previous trial
	{
		// Remove letters from the last trial
		//console.log(AllowableLetters)
		LettersToUse = RemoveOldLetters(AllowableLetters, LastTrialStimulus, LastTrialProbe)
		// Shuffle the remaining letters
		// Select an appropriate length of letters according to the load
		LetterString = MakeStimulus(LettersToUse, Load)
		// Decide if the probe is positive or negative
		CurrentProbe  = CreateProbeLetter(LetterString, LettersToUse)
		// Pad Letter String
		Stimulus = PadLetters(LetterString)
		return [Stimulus, CurrentProbe, LetterString]
	}

function PadLetters(Letters)
	{ // This takes the letter list and pads it with stars expecting a 3-by-3 grid
		switch (Letters.length) {
			case 1:
				Stimulus = '****'+Letters+'****';
				break;
			case 2:
				Stimulus = '***'+Letters[0]+'*'+Letters[1]+'***';
				break;
			case 3:
				Stimulus = '***'+Letters.slice(0,3)+'***';
				break;
			case 4:
				Stimulus = Letters[0]+'*'+Letters[1]+'***'+Letters[2]+'*'+Letters[3];
				break;
			case 5:
				Stimulus = Letters[0]+'*'+Letters[1]+'*'+Letters[2]+'*'+Letters[3]+'*'+Letters[4];
				break;
			case 6:
				Stimulus = Letters.slice(0,3)+'***'+Letters.slice(3,6)
				break;
			case 7:
				Stimulus = Letters.slice(0,3)+'*'+Letters[3]+'*'+Letters.slice(4,7);
				break;
			case 8:
				Stimulus = Letters.slice(0,4)+'*'+Letters.slice(4,8)
				break;
			case 9:
				Stimulus = Letters.slice(0,9)
		}
		return Stimulus
	}

  class BlockStimulusList {
  // This class is made to keep track of the stimuli and probes used in the previous trials
  constructor(InputStimulusList = [], CognCap = 0, StimulusList = [], Loads = [])
  {
    // keep track of the current trial and make an array of all
    this.InputStimulusList = InputStimulusList;
   	this.CognCap = CognCap;
    this.Loads = []
		this.StimulusList = []
  }

  CreateDMSList5()
 		{
 			var Loads = []
      var temp = parseFloat(this.CognCap)
      console.log(temp)
      var Limit = Number((temp).toFixed(0))
      console.log(Limit)
      if (Limit > 9){
          Limit = 9
      }
      else if (Limit < 5){
      	Limit = 5
      }
      switch (Limit) {
      	case 5:
      		Loads = [1,3,4,5,6];
      		break;
      	case 6:
      		Loads = [1,3,5,6,7];
      		break;
      	case 7:
      		Loads = [1,3,6,7,8];
      		break;
      	case 8:
      		Loads = [1,3,6,8,9];
      		break;
      	case 9:
      		Loads = [1,3,6,8,9];
       }
      this.Loads = Loads
    }

  CreateDMSItemList()
   	{
   		// Make a function that runs at the beginning of the DMS block based version. It takes as inpout just the CognCap. 
 			// It then identifies the loads required. Then it extracts the corresponding rows from the list. It therefore 
 			// shortens the selected list accordingly.

   		// This variable describes how many trials there are in the setup file
   		var NTrialsPerLoadInList = 6
   		var TrialList = []
   		for (var i = 0; i < this.Loads.length; i++)
   		{
   				// What is the current load
   				var temp = this.Loads[i]
   				for (var j = 0; j < 54; j++)
   				{
   					if (temp == this.InputStimulusList[j]['Load'])
   					{
   						console.log(this.InputStimulusList[j]['Load'])
   						TrialList.push(this.InputStimulusList[j])
   					}
   				}	
   		}		
   			this.TrialList = TrialList
   	}
}