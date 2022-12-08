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

var Block01List = [0,1,2,3,4,5,6,7,8,9,10,11]
var Block02List = [0,1,2,3,4,5,6,7,8,9,10,11]
var Block03List = [0,1,2,3,4,5,6,7,8,9,10,11]
var Block04List = [0,1,2,3,4,5,6,7,8,9,10,11]
var test = [3,4,5]
var CreateSimpleWordList = function(WordList) {
	var SimpleList = []
	for (var i = 0; i < WordList.length; i++) {
		SimpleList.push(WordList[i]['Word'])
	}
	return SimpleList
}

// This list is used for checking responses to see if the spoke word is part of 
// the full list
var SimpleList = CreateSimpleWordList(WordList)

//ThisBlockList = [0,1,2,3,4,5,6,7,8,9,10,11]
var FindRecalledWords01 = function(tag) {
    console.log(tag)
    // See if this item is in the word list
    if (SimpleList.includes(tag.toUpperCase())) 
    {
      // find the words index in the list
      console.log('Found One')
      // remove the item
      //SimpleList.splice(SimpleList.indexOf(tag.toUpperCase()),1)
      Block02List[SimpleList.indexOf(tag.toUpperCase())]=-99
      //console.log(SimpleList)
      console.log(Block02List)
    }
  }

var FindRecalledWords02 = function(tag) {
    console.log(tag)
    // See if this item is in the word list
    if (SimpleList.includes(tag.toUpperCase())) 
    {
      // find the words index in the list
      console.log('Found One')
      // remove the item
      //SimpleList.splice(SimpleList.indexOf(tag.toUpperCase()),1)
      Block03List[SimpleList.indexOf(tag.toUpperCase())]=-99
      //console.log(SimpleList)
      console.log(Block03List)
    }
  }


var FindRecalledWords03 = function(tag) {
    console.log(tag)
    // See if this item is in the word list
    if (SimpleList.includes(tag.toUpperCase())) 
    {
      // find the words index in the list
      console.log('Found One')
      // remove the item
      //SimpleList.splice(SimpleList.indexOf(tag.toUpperCase()),1)
      Block04List[SimpleList.indexOf(tag.toUpperCase())]=-99
      //console.log(SimpleList)
      
    }
  }

var checkResponse = function(response) {
        return response > -99;
}

var FindTrials2 = function() {
  CurrentList = jsPsych.data.get().filter({task:'Recall'}).last(1).trials[0].RecallList
  CurrentList = CurrentList.filter(checkResponse)
  console.log(CurrentList)
  return CurrentList  
}

var FindTrials = function() {
	return test
}

