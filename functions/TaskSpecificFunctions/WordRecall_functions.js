// PREP WORK FOR WORD LIST A
// take list of words as dictionary items and make a simple list out of it
console.log(WordRecall_parameters)
SimpleWordListA = MakeAllWordsUpperCase(CreateSimpleWordList(WordListA))
// Make a simple list of the alternative pronunciations
AltSimpleWordListA = MakeAllWordsUpperCase(CreateSimpleWordList(AlternatePronunciationsWordListA))
// Make a full list the words and thier alternative pronunciations
FullWordListA = SimpleWordListA.concat(AltSimpleWordListA)
// indices fro the primary word list
WordListIndexA = CreateWordListIndex(WordListA)
// indices for the world list containing the alternatives
FullListIndexA = CreateSimpleIndexList(WordListA, AlternatePronunciationsWordListA)
// convert WordList to a list of filenames for teh audio files for each word
AudioFileListA = CreateAudioFileList(BaseFolderName+WordRecall_parameters.FolderName, SimpleWordListA, WordRecall_parameters.FileExtension)
// convert it back to a list of dictionaries
var AudioFileDictListA = AudioFileListA.map(function(e) {
  return {Word: e}
})
// Create an array so the recall procedure can use a timelinevariable
var WordListAForRecall = {
  'WordList': WordListA,
  'SimpleWordList': SimpleWordListA,
  'FullWordList': FullWordListA,
  'WordListIndex': WordListIndexA,
  'FullListIndex': FullListIndexA,
}
if ( WordRecall_parameters.BListFlag) {
  // PREP WORK FOR WORD LIST B
  // take list of words as dictionary items and make a simple list out of it
  SimpleWordListB = MakeAllWordsUpperCase(CreateSimpleWordList(WordListB))
  // Make a simple list of the alternative pronunciations
  AltSimpleWordListB = MakeAllWordsUpperCase(CreateSimpleWordList(AlternatePronunciationsWordListB))
  // Make a full list the words and thier alternative pronunciations
  FullWordListB = SimpleWordListB.concat(AltSimpleWordListB)
  // indices fro the primary word list
  WordListIndexB = CreateWordListIndex(WordListB)
  // indices for the world list containing the alternatives
  FullListIndexB = CreateSimpleIndexList(WordListB, AlternatePronunciationsWordListB)
  // convert WordList to a list of filenames for teh audio files for each word
  AudioFileListB = CreateAudioFileList(BaseFolderName+WordRecall_parameters.FolderName, SimpleWordListB, WordRecall_parameters.FileExtension)
  // convert it back to a list of dictionaries
  var AudioFileDictListB = AudioFileListB.map(function(e) {
    return {Word: e}
  })


  // Create an array so the recall procedure can use a timelinevariable
  var WordListBForRecall = {
    'WordList': WordListB,
    'SimpleWordList': SimpleWordListB,
    'FullWordList': FullWordListB,
    'WordListIndex': WordListIndexB,
    'FullListIndex': FullListIndexB,
  }

  var ManualRecallB = {
    timeline: [ManualRecall],
    randomize_order: false,
    timeline_variables: [WordListBForRecall],
    repetitions: 1,   
  }
  var SpokenRecallB = {
    timeline: [SpokenRecall],
    randomize_order: false,
    timeline_variables: [WordListBForRecall],
    repetitions: 1,   
  }
}

var ResponseArray = CreateResponseArray(NWords, WordRecall_parameters.NBlocks)
var ManualRecallA = {
  timeline: [ManualRecall],
  randomize_order: false,
  timeline_variables: [WordListAForRecall],
  repetitions: 1,   
}
var SpokenRecallA = {
  timeline: [SpokenRecall],
  randomize_order: false,
  timeline_variables: [WordListAForRecall],
  repetitions: 1,   
}

