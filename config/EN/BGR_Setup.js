
var FullScreenMode = false;
var TextFontSize = "30px";
var StimulusFontSize = "45px";

var ResponseChoiceTrue = 37 // Left arrow
var ResponseChoiceFalse = 39 // right arrow
var ResponseChoices = [ResponseChoiceTrue, ResponseChoiceFalse, 27]
var FeedbackLength = 400; // This is in milliseconds
var PracticeRepeats = 1
var TestRepeats = 1

function PutIntoTable(top='top', middle='mid', width=600, height=200) {
      return '<table border="0" width="'+width+'"><tr height="'+height+'"><td>'+top+'</td></tr><tr height="'+height+'"><td><div style="font-size:'+StimulusFontSize+';">'+middle+'</div></td></tr><tr height="'+height+'"><td valign="bottom"><img src="assets/TrueFalseArrows.png"></td></tr></table>';
    }

var InstrText = ['<p style="font-size:'+TextFontSize+'">Welcome to the Grammatical Reasoning Test.</p>',
      '<p style="font-size:'+TextFontSize+'">You will see a series of statements. Below each statement there are two letters.</p>',
      '<p style="font-size:'+TextFontSize+'">Your task is to decide whether the statement about the letters is true or false. Respond by pressing the left arrow for True or right for False. <p><img src="assets/TrueFalseArrows.png"></img>',
      //'<p style="font-size:'+TextFontSize+'"><img src="assets/TrueFalseArrows.png"></img></p>',
      '<p style="font-size:'+TextFontSize+'">Before doing the actual experiment you will complete some practice trials. These will give you feedback about your accuracy. <p style="font-size:'+TextFontSize+'">Remember to respond as accurately and quickly as possible.</p>'];

var PoorPerformanceText = ['<p style="font-size:'+TextFontSize+'">There will be another run of practice trials with feedback.</p> <p style="font-size:'+TextFontSize+'">Remember to respond as accurately and quickly as possible.</p>'];

var TestInstrText = ['<p style="font-size:'+TextFontSize+'">Now you will do the task.</br>It will be exactly like the practice except you will not get feedback. </p>'];

var ThankYouText = 'Thank you'

var BaddGramReasonPracticeList = [
  {
    "item": 1,
    "Sentence": "A is followed by B",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 2,
    "Sentence": "B is not followed by A",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 3,
    "Sentence": "B is preceded by A",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 4,
    "Sentence": "A does not precede B",
    "Response": "BA",
    "correct": "true"
  }
]

  
var BaddGramReasonList = [
  {
    "item": 1,
    "Sentence": "A is preceded by B",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 2,
    "Sentence": "B does not precede A",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 3,
    "Sentence": "A is not followed by B",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 4,
    "Sentence": "B is preceded by A",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 5,
    "Sentence": "A is followed by B",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 6,
    "Sentence": "A does not follow B",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 7,
    "Sentence": "B is not preceded by A",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 8,
    "Sentence": "B follows A",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 9,
    "Sentence": "A precedes B",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 10,
    "Sentence": "B does not follow A",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 11,
    "Sentence": "B precedes A",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 12,
    "Sentence": "B is followed by A",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 13,
    "Sentence": "B is not followed by A",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 14,
    "Sentence": "B is preceded by A",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 15,
    "Sentence": "B is followed by A",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 16,
    "Sentence": "B precedes A",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 17,
    "Sentence": "A is not followed by B",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 18,
    "Sentence": "A is followed by B",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 19,
    "Sentence": "B is not preceded by A",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 20,
    "Sentence": "B is followed by A",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 21,
    "Sentence": "A does not follow B",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 22,
    "Sentence": "A is preceded by B",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 23,
    "Sentence": "B does not follow A",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 24,
    "Sentence": "A is not preceded by B",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 25,
    "Sentence": "A follows B",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 26,
    "Sentence": "A is not preceded by B",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 27,
    "Sentence": "A follows B",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 28,
    "Sentence": "A does not precede B",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 29,
    "Sentence": "A precedes B",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 30,
    "Sentence": "B follows A",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 31,
    "Sentence": "B does not precede A",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 32,
    "Sentence": "A does not precede B",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 33,
    "Sentence": "A does not follow B",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 34,
    "Sentence": "A is not followed by B",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 35,
    "Sentence": "B is not preceded by A",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 36,
    "Sentence": "B is preceded by A",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 37,
    "Sentence": "A follows B",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 38,
    "Sentence": "B precedes A",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 39,
    "Sentence": "B is followed by A",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 40,
    "Sentence": "A precedes B",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 41,
    "Sentence": "A follows B",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 42,
    "Sentence": "B does not precede A",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 43,
    "Sentence": "A does not precede B",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 44,
    "Sentence": "A is preceded by B",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 45,
    "Sentence": "B is not followed by A",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 46,
    "Sentence": "B does not follow A",
    "Response": "BA",
    "correct": "true"
  },
  {
    "item": 47,
    "Sentence": "B does not precede A",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 48,
    "Sentence": "A is followed by B",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 49,
    "Sentence": "B is not preceded by A",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 50,
    "Sentence": "B follows A",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 51,
    "Sentence": "A does not precede B",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 52,
    "Sentence": "A is not followed by B",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 53,
    "Sentence": "B is preceded by A",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 54,
    "Sentence": "A is not preceded by B",
    "Response": "AB",
    "correct": "true"
  },
  {
    "item": 55,
    "Sentence": "A does not follow B",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 56,
    "Sentence": "A is followed by B",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 57,
    "Sentence": "A is not preceded by B",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 58,
    "Sentence": "B is followed by A",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 59,
    "Sentence": "B is not followed by A",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 60,
    "Sentence": "A precedes B",
    "Response": "BA",
    "correct": "false"
  },
  {
    "item": 61,
    "Sentence": "B does not follow A",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 62,
    "Sentence": "A is preceded by B",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 63,
    "Sentence": "B precedes A",
    "Response": "AB",
    "correct": "false"
  },
  {
    "item": 64,
    "Sentence": "B follows A",
    "Response": "AB",
    "correct": "true"
  }
]