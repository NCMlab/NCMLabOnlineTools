var IconMapping = {}
var IconFolder = "../assets/Icons/"
IconMapping['Word'] = '<img src = "'+IconFolder+'StroopWord.png">'
IconMapping['Color'] = '<img src = "'+IconFolder+'StroopColor.png">'
IconMapping['ColorWord'] = '<img src = "'+IconFolder+'StroopColorWord.png">'

 function MakeListOfButtonIcons(List)
 {
 	var options = []
 	for ( var i = 0; i < List.length; i++ ) 
 	{	
 		options.push(IconMapping[List[i]])
 	}
 	return options
 }