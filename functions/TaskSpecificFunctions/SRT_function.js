

// Create list of indices for the word list
WordListIndex = []
//for (var i = 0; i < NWords; i++) {
//	WordListIndex.push(i)
//}

var HeardList = []
var IntrusionList = []
var BlockRecallCount = 0
var BlockIntrusionCount = 0
// used to store the order of the recalled words and used for scoring

// keep track of which block it is
var BlockCount = 0
var TrialCount = 0

var CreateResponseArray = function(NWords, NBlocks) {
	return create2DArray(NWords,NBlocks + 2)
}

var CreateSimpleWordList = function(WordList) {
	console.log(WordList)
	var SimpleList = []
	for (var i = 0; i < WordList.length; i++) {
		SimpleList.push(WordList[i]['Word'])
	}
	return SimpleList
}

var CreateRecognitionAnswerKey = function(WordList) {
	var RecogAnswerKey = []
	for (var i = 0; i < WordList.length; i++) {
		RecogAnswerKey.push(WordList[i]['Answer'])
	}
	return RecogAnswerKey
}

var MakeAllWordsUpperCase = function(WordList) {
	var outList = []
	for ( var i = 0; i < WordList.length; i++ ) {
		outList.push(WordList[i].toUpperCase())
	}
	return outList
}
var CreateSimpleIndexList = function(WordList, AltWordList) {
	// this is used to map matches with alterantive pronunciations back to the
	// primary spelling of the word
	var SimpleIndexList = []
	// first a list of the primary indices is created
	for (var i = 0; i < WordList.length; i++) {
		SimpleIndexList.push(i)
	}
	// then the indices from teh alterantive to the primary words are added
	// The order matches the order in the concatenated word lists
	for (var i = 0; i < AltWordList.length; i++) {
		SimpleIndexList.push(AltWordList[i]['index'])
	}
	return SimpleIndexList
}
var CreateWordListIndex = function(WordList) {
	var WordListIndex = []
	for (var i = 0; i < WordList.length; i++) {
		WordListIndex.push(i)
	}
	return WordListIndex
}

var CreateAudioFileList = function(FolderName, WordList, FileExtension) {
	var AudioFileList = []
	for ( var i = 0; i < WordList.length; i++ ) {
		AudioFileList.push(FolderName + WordList[i] + FileExtension)
	}
	return AudioFileList
}

/*
SimpleWordList = CreateSimpleWordList(WordList)
AltSimpleWordList = CreateSimpleWordList(AlternatePronunciationsWordList)
// Create the full list of primary and alternative pronunciations to search 
FullWordList = SimpleWordList.concat(AltSimpleWordList)
// indices fro teh primary word list
WordListIndex = CreateWordListIndex(WordList)
// indices for the world list containing the alternatives
FullListIndex = CreateSimpleIndexList(WordList, AlternatePronunciationsWordList)
console.log(FullListIndex)
*/

var FindRecalledWords01 = function(tag) {
    console.log(tag)
    console.log(WordListAForRecall.FullWordList)
    // record multipel words at once and cycle through the list
    var response = tag.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    // See if this item is in the word list
    for (var i = 0; i < response.length; i++) {
    	var IndexOfWordRecalled = WordListAForRecall.FullWordList.indexOf(response[i].toUpperCase())
    	console.log(IndexOfWordRecalled)
	    if (IndexOfWordRecalled > -1) 
	    {
	      // find the words index in the list
	      console.log('Found One')
	      // remove the item
	      //SimpleList.splice(SimpleList.indexOf(tag.toUpperCase()),1)
	      //WordListIndex[IndexOfWordRecalled]=-99
		  WordListIndex[WordListAForRecall.FullListIndex[IndexOfWordRecalled]]=-99
	      HeardList.push(response[i])
	      // record this response in the response array with index starting at 1
		  console.log("Block Count: "+BlockCount/2)
		  TempRecall[WordListAForRecall.FullListIndex[IndexOfWordRecalled]] = BlockRecallCount
		  
	      BlockRecallCount++
	    }
	    else {
	    	// The spoken word mut be an intrusion
	    	HeardList.push(response[i])
			IntrusionList.push(response[i])
	    	BlockIntrusionCount++
	    }
  }
}
var FindRecalledWords02 = function(tag) {
    console.log(tag)
    console.log(WordListBForRecall.FullWordList)
    // record multipel words at once and cycle through the list
    var response = tag.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    // See if this item is in the word list
    for (var i = 0; i < response.length; i++) {
    	var IndexOfWordRecalled = WordListBForRecall.FullWordList.indexOf(response[i].toUpperCase())
    	console.log(IndexOfWordRecalled)
	    if (IndexOfWordRecalled > -1) 
	    {
	      // find the words index in the list
	      console.log('Found One')
	      // remove the item
	      //SimpleList.splice(SimpleList.indexOf(tag.toUpperCase()),1)
	      //WordListIndex[IndexOfWordRecalled]=-99
		  WordListIndex[WordListBForRecall.FullListIndex[IndexOfWordRecalled]]=-99
	      HeardList.push(response[i])
	      // record this response in the response array with index starting at 1
		  TempRecall[WordListBForRecall.FullListIndex[IndexOfWordRecalled]] = BlockRecallCount
	      BlockRecallCount++
	    }
	    else {
	    	// The spoken word mut be an intrusion
	    	HeardList.push(response[i])
			IntrusionList.push(response[i])
	    	BlockIntrusionCount++
	    }
  }
}

var RecordSpeechRecognition = function(tag) {
    console.log(tag)
    // record multipel words at once and cycle through the list
    var response = tag.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    // See if this item is in the word list
    for (var i = 0; i < response.length; i++) {
		HeardList.push(response[i])
	}
}


var FindWordListLength = function(WordList) {
	var NWords = 0
	for (var i = 0; i < WordList.length; i++) {
		if (WordList[i]['type'] == 'primary') {
			NWords++
		}
	}
	return NWords
}

// Make functions for scoring the SRT results
function create2DArray(Nrows, Ncols) {
	console.log("NRows: " + Nrows)
	console.log("NCols: " + Ncols)
    var arr = Array.from(Array(Nrows), _ => Array(Ncols).fill(-99))
    return arr
  }

function GetColumn(Input, Col) {
	// extract the data for a single block
   return Input.map(function(value,index) { return value[Col]; }); 
  }

function GetRow(Input, Row) {
	// extract the data for a single block
   var row = []
   for (var i = 0; i < NBlocks; i++) {
   	row.push(Input[Row][i])
   }
   return row
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

function SumArray(input) {
	var output = 0
	for ( i = 0; i < input.length; i++ ) 
		{ output += input[i]}
	return output
}

function CreateWordCountPerTrial(data) 
  {
    const dimensions = [ data.length, data[0].length ];
    RecallCount = Array(dimensions[0]).fill(0)
    for ( var i = 0; i < dimensions[0]; i ++ )
      {
        RecallCount[i] = CountNonZeroWords(GetColumn(data, i))
      }
    return RecallCount
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

function CountNumberRecalledWords(ResponseArray) {
	var TotalCount = 0
	for (var i = 0; i < NBlocks; i++) {
		CurrentColumn = GetColumn(ResponseArray, i)
		CurrentCount = CountNonZeroWords(CurrentColumn)
		TotalCount = TotalCount + CurrentCount
	}
	return TotalCount
}

function CalcTotalRecall(ResponseArray) {
	if (CheckForTwoCorrectTrials(ResponseArray)) {
		TotalRecall = NBlocks*NWords
	}
	else {
		TotalRecall = CountNumberRecalledWords(ResponseArray)
	}
	return TotalRecall
}

function CalcTotalRecallPerBlock(ResponseArray) {
	var TRarray = []
	for (var i = 0; i < NBlocks; i++) {
		CurrentColumn = GetColumn(ResponseArray, i)
		CurrentCount = CountNonZeroWords(CurrentColumn)
		TRarray.push(CurrentCount)
	}
	return TRarray
}

function CalcLongTermStorage(ResponseArray) {
	// Calculate long term storage based on when a word is recalled two trials in a row
	LTSList = Array(NWords).fill(0)
	// cycle over each word in the list
	for (var i = 0; i < NWords; i++) {
		// extract responses across blocks for this word
		CurrentRow = GetRow(ResponseArray, i) 
		j = 0
		PrevTrial = CurrentRow[j]
		for (var j = 1; j < NBlocks; j++) {
			CurrentTrial = CurrentRow[j]
			if ((PrevTrial != 0) && (CurrentTrial != 0)) {
				// This word was recalled two trials in a row
				LTSList[i] = NBlocks - (j - 1)
                //LTSarray[i,j-1:] = 1
                break
			}
			PrevTrial = CurrentTrial
		}
	}
	console.log(LTSList)
}


/*
def CalcLongTermStorage(ResponseArray):
    # Find the size of the data
    NBlocks = ResponseArray.shape[1]
    NWords = ResponseArray.shape[0]
    # Calculate long term storage based on the when a word is recalled two trials in a row
    LTSList = np.zeros(NWords)
    # Make an array based on whether or not a word is in LTS
    LTSarray = np.zeros((NWords,NBlocks))
    for i in range(0,NWords):
        CurrentRow = ResponseArray[i,:]
        PrevTrial = CurrentRow[0]
        for j in range(1,NBlocks):
            CurrentTrial = CurrentRow[j]
            if (PrevTrial != 0) and (CurrentTrial != 0):
                # This word was recalled two trials in a row
                LTSList[i] = NBlocks - (j - 1)
                LTSarray[i,j-1:] = 1
                break
            PrevTrial = CurrentTrial
    LTS = sum(LTSList)
    return LTS, LTSarray
    */

// Written by ChatGPT
	function findEmptyColumns(matrix) {
		const numRows = matrix.length;
		const numCols = matrix[0].length;
		const emptyColumns = [];
	  
		for (let col = 0; col < numCols; col++) {
		  let isEmpty = true;
	  
		  for (let row = 0; row < numRows; row++) {
			if (matrix[row][col] !== null && matrix[row][col] !== undefined && matrix[row][col] !== '') {
			  isEmpty = false;
			  break; // No need to check further if not empty
			}
		  }
	  
		  if (isEmpty) {
			emptyColumns.push(col);
		  }
		}
	  
		return emptyColumns;
	  }

	  function getColumnsBeforeAndAfter(matrix, columnIndex) {
		const columnsBefore = [];
		const columnsAfter = [];
	  
		if (columnIndex >= 0 && columnIndex < matrix[0].length) {
		  for (let col = 0; col < matrix[0].length; col++) {
			if (col < columnIndex) {
			  // Columns before the provided column
			  columnsBefore.push(matrix.map(row => row[col]));
			} else if (col > columnIndex) {
			  // Columns after the provided column
			  columnsAfter.push(matrix.map(row => row[col]));
			}
		  }
		} else {
		  console.error("Invalid column index.");
		}
	  
		return { columnsBefore, columnsAfter };
	  }
	  
	  
	  function calculateColumnSumsAndTotal(matrix) {
		const numRows = matrix.length;
		const numCols = matrix[0].length;
		const columnSums = Array(numCols).fill(0); // Initialize an array to store column sums
		let totalSum = 0; // Initialize the total sum
	  
		// Iterate through each row and column to calculate sums
		for (let row = 0; row < numRows; row++) {
		  for (let col = 0; col < numCols; col++) {
			const value = matrix[row][col];
			if (!isNaN(value)) {
			  // Check if the value is a number (not NaN)
			  columnSums[col] += value; // Add the value to the column sum
			  totalSum += value; // Add the value to the total sum
			}
		  }
		}
	  
		return { columnSums, totalSum };
	  } 
	  