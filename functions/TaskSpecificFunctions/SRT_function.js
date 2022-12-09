
var BlockList = [0,1,2,3,4,5,6,7,8,9,10,11]
var NWords = 12
var HeardList = []
var BlockRecallCount = 0
var BlockIntrusionCount = 0
// used to store the order of the recalled words and used for scoring
var ResponseArray = createArray(12,NBlocks)
// keep track of which block it is
var BlockCount = 0
var TrialCount = 0
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
	      var IndexOfWordRecalled = SimpleList.indexOf(response[i].toUpperCase())
	      BlockList[IndexOfWordRecalled]=-99
	      //console.log(SimpleList)
	      console.log(BlockList)
	      HeardList.push(response[i])
	      // record this response in the response array with index starting at 1
	      ResponseArray[IndexOfWordRecalled][BlockCount] = BlockRecallCount+1
	      BlockRecallCount++
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
	      HeardList.push(response[i])
	      // record this response in the response array
	      ResponseArray[IndexOfWordRecalled][BlockCount] = BlockRecallCount+1
	      BlockRecallCount++
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
	      HeardList.push(response[i])
	      ResponseArray[IndexOfWordRecalled][BlockCount] = BlockRecallCount+1
	      BlockRecallCount++
	    }
	    else {
	    	HeardList.push(response[i])
	    	BlockIntrusionCount++
	    }

  }
}

// Make functions for scoring the SRT results
function createArray(Nrows, Ncols) {
    var arr = Array.from(Array(Nrows), _ => Array(Ncols).fill(0))
    return arr
  }

function GetColumn(Input, Col) {
	// extract the data for a single block
   return Input.map(function(value,index) { return value[Col]; }); 
  }

function CountNonZeroWords(CurrentColumn) {
	// how many words were recalled in this block
	var NNonZero = 0
	for (var i = 0; i < CurrentColumn.length; i++) {
		if (CurrentColumn[i] > 0) {
			NNonZero++
		}
	}
	return NNonZero
}

function CheckForTwoCorrectTrials(ResponseArray) {
	// This is useful for calculating whether two blocks were completely recalled in a  row
	var PrevColumn = GetColumn(ResponseArray,0)
	var Flag = false
	for (var i = 1; i <  NBlocks; i++) {
   		CurrentColumn = GetColumn(ResponseArray,i)
    	if ((CountNonZeroWords(PrevColumn) == NWords) && (CountNonZeroWords(CurrentColumn) == NWords)){
        	Flag = true
    	}
    	PrevColumn = CurrentColumn
 	}
	return Flag 
}

