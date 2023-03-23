

var RecordSpokenWords = function(tag) {
    console.log(tag)
    var response = tag.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    // See if this item is in the word list
    for (var i = 0; i < response.length; i++) {
	    HeardList.push(response[i])
	 }
	 return HeardList
}
var RecordUserSaid = function(userSaid) {
        console.log('sound stopped');
        // userSaid contains multiple possibilities for what was heard
        console.log(userSaid)
}