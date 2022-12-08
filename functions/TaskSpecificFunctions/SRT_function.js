
var BlockList = [0,1,2,3,4,5,6,7,8,9,10,11]
var HeardList = []
var BlockRecallCount = 0
var BlockIntrusionCount = 0

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
	      BlockList[SimpleList.indexOf(response[i].toUpperCase())]=-99
	      //console.log(SimpleList)
	      console.log(BlockList)
	      HeardList.push(response[i])
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
	      BlockRecallCount++
	    }
	    else {
	    	HeardList.push(response[i])
	    	BlockIntrusionCount++
	    }

  }
}
