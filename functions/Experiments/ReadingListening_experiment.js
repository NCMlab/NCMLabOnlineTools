var timeline = []
var HeardSentence = ''
var HeardSentence01 = ''
var HeardSentence02 = ''
var userSaid
var Score
var count = 0

var WhatWasSaid = function(tag) {
    
    HeardSentence = tag
    // console.log(HeardSentence)
    return HeardSentence
}
// https://en.wikipedia.org/wiki/Harvard_sentences
var VisualStimulus = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: "Please repeat the following sentence: <p>Rice is often served in round bowls.</p>",
    choices: [], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    trial_duration: 1000,
    prompt: "Read this Word",
  };


var TotalList = []
var InputSentences = []

InputSentences.push({'stim':"Rice is often served in round bowls."})
InputSentences.push({'stim':"The birch canoe slid on the smooth planks."})
InputSentences.push({'stim':"Glue the sheet to the dark blue background."})
InputSentences.push({'stim':"It's easy to tell the depth of a well."})
InputSentences.push({'stim':"These days a chicken leg is a rare dish."})
InputSentences.push({'stim':"The juice of lemons makes fine punch."})
InputSentences.push({'stim':"The box was thrown beside the parked truck."})
InputSentences.push({'stim':"The hogs were fed chopped corn and garbage."})
InputSentences.push({'stim':"4 hours of steady work faced us."})
InputSentences.push({'stim':"A large size in stockings is hard to sell."})
InputSentences.push({'stim':"The boy was there when the sun rose."})
InputSentences.push({'stim':"A rod is used to catch pink salmon."})
InputSentences.push({'stim':"The source of the huge river is the clear spring."})
InputSentences.push({'stim':"Kick the ball straight and follow through."})
InputSentences.push({'stim':"Help the woman get back to her feet."})
InputSentences.push({'stim':"A pot of tea helps to pass the evening."})
InputSentences.push({'stim':"Smoky fires lack flame and heat."})
InputSentences.push({'stim':"The soft cushion broke the man's fall."})
InputSentences.push({'stim':"The salt breeze came across from the sea."})
InputSentences.push({'stim':"The girl at the booth sold fifty bonds."})

/*
. La lampe de néon rouge irise ses cheveux.
2. La nacelle du ballon tire sa souplesse de l’osier.
3. Devine qui a volé le précieux collier de jade.
4. C’est facile d’atteindre la branche en sautant du muret.
5. Ne collez jamais d’affiche sur le mur de la poste.
6. Découpe de fines lamelles de cette truffe noire.
7. Une croisière dans un grand bateau, c’est un bonheur parfait.
8. Une brèche dans le mur laissait entrer de l’air.
9. Le groupe d’amis s’est quitté devant le kiosque.
10. La voiture de course partit en trombe sur la piste.
1. Note sur le papier le poids de la bonbonne de gaz.
2. Prends ce chiffon pour enlever la graisse de ton visage.
3. La source de la rivière boueuse est un ruisseau clair.
4. Tire la fléchette et inscris tes points sur le tableau.
5. Aide la femme à monter à l’arrière du tramway.
6. Ils ont enfin trouvé une place à la crèche publique.
7. L’affaire reste étrange pour les vieux et les sages.
8. Il a un cou propre sur un col net et soigné.
9. Son dernier congé dura deux semaines.
10. L’idée est de coudre ensemble ces morceaux de tissus.
*/

var GetList = {
  type: jsPsychCallFunction,
  func: function() {
    InputSentences = ReadingListening_parameters.Input
  },
}    

function ThisGetRow(Input, Row) {
  // extract the data for a single block
   const dimensions = [ Input.length, Input[0].length ];
   var row = []
   for (var i = 0; i < dimensions[1]; i++) {
    row.push(Input[Row][i])
   }
   return row
  }

var WaitForWords = function() {
      var Output = {}
      annyang.removeCommands()
      const commands01 = {'*search': WhatWasSaid};
      annyang.addCommands(commands01);
      annyang.addCallback('result', function(userSaid) {
        
        
        //document.getElementById("jspsych-html-button-response-button-0").disabled = true;
      Score = CompareReadAndHeard(ReadSentence, userSaid[0])
      Output.Score = Score
      if ( Score > ReadingListening_parameters.ScoreNeeded )
      { console.log("GOOD JOB")
      document.getElementById("id_sent_heard").innerHTML = userSaid[0] + '<img src="assets/Icons/GreenCheck.png" width="30" height="30"></img>'
      document.getElementById("id_next").innerHTML = 'Press next to continue'
      var x = document.getElementById("jspsych-html-button-response-button-0")
      x.style.display = 'block'
      }  
      else {document.getElementById("id_sent_heard").innerHTML = userSaid[0] + '<img src="assets/Icons/redX.png" width="30" height="30"></img>'}
      document.getElementById("id_sent_heard").style.color="blue"
      document.getElementById("id_next").innerHTML = 'Press next to continue'
      var x = document.getElementById("jspsych-html-button-response-button-0")
      x.style.display = 'block'

      HeardSentence01 = userSaid[0]
      HeardSentence02 = userSaid[1]
    });  
      
        
        // userSaid contains multiple possibilities for what was heard
      //  console.log(userSaid)
        // Parse userSaid. It provides five possibilities for what it heard for each word
        // Make a table of rows for eahc unique word and columns for each possibility


    return Output  
  }

        /* // i is the columns
        var NWords = -99
        for ( var i = 0; i < userSaid.length; i++ ) { // cycle over possible pronunciations
          HeardWords = userSaid[i].split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
          if ( NWords < 0 ) {NWords = HeardWords.length} // cycle over words 
        }
        var Words = create2DArray(NWords,userSaid.length)
      //  console.log(Words)
        for ( var i = 0; i < userSaid.length; i++ ) { // number of words
          HeardWords = userSaid[i].split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
      //    console.log(HeardWords)
          for ( var j = 0; j < HeardWords.length; j++ ) // number of pronunciations
          {
            //console.log('i: '+i+" j: "+j+"Word: "+HeardWords[j])
            Words[j][i] = HeardWords[j]
          }
        }
        //console.log(Words)
        for ( var i = 0; i < NWords; i++ ) {
          TotalList.push(ThisGetRow(Words,i))
        }
        //console.log(TotalList)
        //console.log(userSaid.length)
        //console.log(ReadSentence)
        //jsPsych.finishTrial();
        //console.log(document.getElementById("JASON").style.color="blue")
        document.getElementById("JASON").innerHTML = userSaid
        document.getElementById("jspsych-html-button-response-button-0").disabled = true;
    //    console.log(document.getElementById("jspsych-html-button-response-button-0"))
       });
      
} */

var CompareReadAndHeard = function(ReadSentence, HeardSentence) {
  ReadSentenceWords = ReadSentence.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
	HeardSentenceWords = HeardSentence.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
	//console.log(ReadSentenceWords)
	//console.log(HeardSentenceWords)
	// compare sentences
	var NWords = ReadSentenceWords.length
  //console.log('The read sentence has '+NWords+' words in it')
  //console.log('I heard the sentence: ')
  //console.log(HeardSentence)
	var MatchedWords = 0
	for (var i = 0; i < NWords; i++ ) {
		for (var j = 0; j < HeardSentenceWords.length; j++ ){
			if (ReadSentenceWords[i].toLowerCase() === HeardSentenceWords[j].toLowerCase()) {
				MatchedWords++
			}
		}
	}
  //console.log('There is a match for '+MatchedWords+' words')
	Score = MatchedWords/NWords
	console.log('Score: '+Score)
  return Score
}
var ReadSentence = ''

var RecallRequest01 = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {
      ReadSentence = jsPsych.timelineVariable('stim')
      //console.log(ReadSentence)
      var stim = 
      '<div><p>Please read the following sentence out loud:</p> <h1><div id="id_sent_to_read">'+ReadSentence+'</div></h1><br/><h1><div id="id_sent_heard">'+'-'+'</div></h1><p><div id="id_next">-</div></p></div>'
      return stim
    },
    choices: ['Next'], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: '', //Add this to config file
    on_start: function(data) {
      console.log('================================')
      Output = WaitForWords()
      console.log(Output)
      

      // start listening
      annyang.start({autorestart: false, continuous: true});
      //console.log('Started')
      // perform this when the sound stops
      
      
      
    },
    on_load: function() {
      var x = document.getElementById("jspsych-html-button-response-button-0")
      x.style.display = 'none'
    },
    on_finish: function(data){  
      console.log(HeardSentence01)
      console.log(Score)
      data.task = 'read'
      data.Results = {}
      data.Results.ReadSentence = ReadSentence
      data.Results.HeardSentence01 = HeardSentence01
      data.Results.HeardSentence02 = HeardSentence02
      data.Results.Score = Score
      annyang.abort()
    },
  }

  var trials = {
      timeline: [RecallRequest01],
      timeline_variables: InputSentences,
      randomize_order: true,
      repetitions: 1,
      sample: {
        type: 'without-replacement',
        size: 5
    }
  }

  var Instruct = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function() {
      return Instructions.Instructions[0].page
    },
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    prompt: 'PROMPT',
    choices:  function() {return [LabelNames.Next]}, 
  }
  
  var Instructions_loop_node = {
    timeline: [Instruct],
    loop_function: function(data){
      console.log(count)
      count+=1
      if ( count < Instructions.Instructions.length){
          
          return true;
        } else {
            return false;
        }
    }
  }

var Notes = {
  type: jsPsychSurvey, 
  pages: [[{
        type: 'text',
        prompt: function() {return LabelNames.NoteInputBox},
        textbox_rows: 10,
        name: 'Notes', 
        required: false,
      }]],
  on_finish: function(data)
  { data.trial = "Notes" },
}

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var trialData = jsPsych.data.get()//.filter({task:'Trial'})
    console.log(trialData)
    Results = ReadingListening_Scoring(trialData) 
    jsPsych.finishTrial(Results)
  },
}    

var thank_you = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions)
    return Instructions.ThankYouText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}
var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
        if ( ReadingListening_parameters.ShowThankYou)
        { return true }
        else { return false }
  }
}

var welcome = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {
    console.log(Instructions)
    return Instructions.WelcomeText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
        if ( ReadingListening_parameters.ShowWelcome)
        { 
          return true }
        else { return false }
  }
}

var if_Instructions = {
  timeline: [Instructions_loop_node],
  conditional_function: function() {
        if ( ReadingListening_parameters.ShowInstructions)
        { return true }
        else { return false }
  }
}

var if_Notes = {
  timeline: [Notes],
  conditional_function: function() {
    if ( ReadingListening_parameters.AskForNotes)
    { return true }
    else { return false }
  }
}

timeline.push(if_Welcome)
timeline.push(GetList)
timeline.push(if_Instructions)
timeline.push(trials)
timeline.push(if_Notes)
timeline.push(if_ThankYou);
timeline.push(SendData)
