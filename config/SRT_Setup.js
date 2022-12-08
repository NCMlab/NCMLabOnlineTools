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
var WordListAlt01 = [
	{'Word':'THROUGHOUT'},
	{'Word':'LILY'},
	{'Word':'FILM'},
	{'Word':'DISCREET'},
	{'Word':'LOFT'},
	{'Word':'BEEF'},
	{'Word':'STREET'},
	{'Word':'HELMET'},
	{'Word':'SNAKE'},
	{'Word':'DOUG'},
	{'Word':'PACK'},
	{'Word':'10'},
	]
// Use this list to make sure the voice recognition works well
var WordListAlt02 = [
	{'Word':'ROW'},
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
var TimePerWord = 200 // milliseconds
var FixationTimeBetweenWords = 200 // milliseconds
var RecallInstructions = 'Please repeat the entire word list'
var GetReadyInstructions = 'Get ready for the next trial'
var Instructions = [
	{'page': 'You will see and hear a list of 12 words, presented one by one.'},
	{'page': 'After you see and hear the list, you will have to recall as many of the words as you can in 1 minute by speaking them out loud.'},
	{'page': 'For the words that were not recalled during the trial, they will be repeated and you will be asked to recall the entire list of words again.'},
	{'page': '(including the original list of words and the words you may have forgot). This procedure is repeated for 5 trials. Press Next to begin'},
	]

var BlockList = [0,1,2,3,4,5,6,7,8,9,10,11]

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
var SimpleListAlt01 = CreateSimpleWordList(WordListAlt01)
var SimpleListAlt02 = CreateSimpleWordList(WordListAlt02)

//ThisBlockList = [0,1,2,3,4,5,6,7,8,9,10,11]
var FindRecalledWords01 = function(tag) {
    console.log(tag)
    // record multipel words at once and cycle through the list
    var response = tag.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    // See if this item is in the word list
    for (var i = 0; i < response.length; i++) {
	    if (SimpleList.includes(response[i].toUpperCase())) 
	    {
	      // find the words index in the list
	      console.log('Found One')
	      // remove the item
	      //SimpleList.splice(SimpleList.indexOf(tag.toUpperCase()),1)
	      BlockList[SimpleList.indexOf(response[i].toUpperCase())]=-99
	      //console.log(SimpleList)
	      console.log(BlockList)
	    }
	    // if the word is not found in teh primary pronunciation list, check the alternate lists
	    else if (SimpleListAlt01.includes(response[i].toUpperCase())) 
	    {
	      // find the words index in the list
	      console.log('Found One in the Alt List 01')
	      // remove the item
	      //SimpleList.splice(SimpleList.indexOf(tag.toUpperCase()),1)
	      BlockList[SimpleListAlt01.indexOf(response[i].toUpperCase())]=-99
	      //console.log(SimpleList)
	      console.log(BlockList)
	    }
	    else if (SimpleListAlt02.includes(response[i].toUpperCase())) 
	    {
	      // find the words index in the list
	      console.log('Found One in the Alt List 02')
	      // remove the item
	      //SimpleList.splice(SimpleList.indexOf(tag.toUpperCase()),1)
	      BlockList[SimpleListAlt02.indexOf(response[i].toUpperCase())]=-99
	      //console.log(SimpleList)
	      console.log(BlockList)
	    }

  }
}


