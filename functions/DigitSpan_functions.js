
var MaxNumberOfDigits = 20;
var FolderOfAudioFiles = '../assets/NumberSoundFiles/';
var AudioFileNameStructure = 'Xc.wav';
var AudioDuration = 1000;


function MaxInitialNumberList() {
	// Make initial list of digits of maximum length
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	count = 1
	while ( arr.length < MaxNumberOfDigits ) {
		arr.push(count)
		count += 1
		if ( count > 9) {
			count = 1
		}
	}
	return arr
}



function CreateDigitList(ListLength, Direction = 'Forward'){
	arr = MaxInitialNumberList()
	ShuffledArray = shuffle(arr)
	List = ShuffledArray.slice(0,ListLength)
	console.log(List)
	if ( Direction == 'Backward' ) {
		List = List.reverse()
	}
	return List

}

function ConvertResponseStringToDigits(input, Direction) {
	pass
}

function CheckResponse(Stimuli, Response) {
	console.log(Stimuli)
	console.log(Response)
  	if (Stimuli === Response) return true;
	if (Stimuli == null || Response == null) return false;
  	if (Stimuli.length !== Response.length) return false;

	  // If you don't care about the order of the elements inside
	  // the array, you should sort both arrays here.
	  // Please note that calling sort on an array will modify that array.
	  // you might want to clone your array first.

	for (var i = 0; i < Stimuli.length; ++i) {
    	if (Stimuli[i] !== Response[i]) return false;
  		}
  	return true;
}



function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function MakeListOfStimuli(FolderOfAudioFiles, Stimuli) {
	// cycle over the list of stimuli and make a list of audio file paths
	var AudioFilePaths = []
	for ( let i = 0; i < Stimuli.length; i ++ ) {
//		AudioFilePaths.push({file: FolderOfAudioFiles + AudioFileNameStructure.replace('X', Stimuli[i])})
		AudioFilePaths.push(FolderOfAudioFiles + AudioFileNameStructure.replace('X', Stimuli[i]))
	}
	return AudioFilePaths
}


