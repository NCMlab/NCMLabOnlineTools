PrepareWordLists = function(WordList, AlternatePronunciationsWordList) {
	SimpleWordList = MakeAllWordsUpperCase(CreateSimpleWordList(WordList))
	// Make a simple list of the alternative pronunciations
	AltSimpleWordList = MakeAllWordsUpperCase(CreateSimpleWordList(AlternatePronunciationsWordList))
	// Make a full list the words and thier alternative pronunciations
	FullWordList = SimpleWordListA.concat(AltSimpleWordList)
	// indices fro the primary word list
	WordListIndex = CreateWordListIndex(WordList)
	// indices for the world list containing the alternatives
	FullListIndex = CreateSimpleIndexList(WordList, AlternatePronunciationsWordList)

	// Create an array so the recall procedure can use a timelinevariable
	var WordListForRecall = [{
	  'WordList': WordList,
	  'SimpleWordList': SimpleWordList,
	  'FullWordList': FullWordList,
	  'WordListIndex': WordListIndex,
	  'FullListIndex': FullListIndex,
	}]
	return WordListForRecall
}

PrepareAudioFileList = function(WordList, FolderName, FileExtension) {
	SimpleWordList = MakeAllWordsUpperCase(CreateSimpleWordList(WordList))
	// convert WordList to a list of filenames for teh audio files for each word
	AudioFileList = CreateAudioFileList(FolderName, SimpleWordList, FileExtension)
	// convert it back to a list of dictionaries
	var AudioFileDictList = AudioFileList.map(function(e) {
	  return {Word: e}
	})
	return AudioFileList
}