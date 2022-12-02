var WordList = [
	{'Word':'THROW'},
	{'Word':'LILY'},
	{'Word':'FILM'},
	{'Word':'DISCREET'},
	{'Word':'LOFT'},
	{'Word':'BEEF'},
	{'Word':'STREET'},
	{'Word':'HELMET'},
	{'Word':'SNAKE'},
	{'Word':'DUG'},
	{'Word':'PACK'},
	{'Word':'TIN'},
	]
// Use this list to make sure the voice recognition works well
var PracticeWordList = [
	{'Word':'THROW'},
	{'Word':'LILY'},
	{'Word':'FILM'},
	{'Word':'DISCREET'},
	{'Word':'LOFT'},
	{'Word':'BEEF'},
	{'Word':'STREET'},
	{'Word':'HELMET'},
	{'Word':'SNAKE'},
	{'Word':'DUG'},
	{'Word':'PACK'},
	{'Word':'TIN'},
	]

var ResponseButtons = [1,0]

var NBlocks = 5
var TimePerWord = 1000 // milliseconds
var FixationTimeBetweenWords = 200 // milliseconds
var RecallInstructions = 'Please repeat the entire word list'
var GetReadyInstructions = 'Get ready for the next trial'
var Instructions = [
	{'page': 'You will see and hear a list of 12 words, presented one by one.'},
	{'page': 'After you see and hear the list, you will have to recall as many of the words as you can in 1 minute by speaking them out loud.'},
	{'page': 'For the words that were not recalled during the trial, they will be repeated and you will be asked to recall the entire list of words again.'},
	{'page': '(including the original list of words and the words you may have forgot). This procedure is repeated for 5 trials. Press Next to begin'},
	]
var CreateSimpleWordList = function(WordList) {
	var SimpleList = []
	for (var i = 0; i < WordList.length; i++) {
		SimpleList.push(WordList[i]['Word'])
	}
	return SimpleList
}

var SimpleList = CreateSimpleWordList(WordList)
var myFunction2 = function(tag) {
    console.log(tag)
    HeardList.push(tag)    
    // See if this item is in the word list
    if (SimpleList.includes(tag.toUpperCase())) 
    {
      // find the words index in teh list
      console.log(SimpleList.indexOf(tag.toUpperCase()))
      console.log('Found One')
      // remove the item
      SimpleList.splice(SimpleList.indexOf(tag.toUpperCase()),1)
      console.log(SimpleList)
    }
  }

var HeardList = []
