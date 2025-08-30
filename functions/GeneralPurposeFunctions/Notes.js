
// ============== NOTES ==============

var notes = {
    type: jsPsychSurveyText,
    questions: [
      {
        prompt: function() { return LabelNames.NoteInputBox },
        columns: 80,
        rows: 20,
    },
    ],
    
  };

var if_Notes = {
    timeline: [notes],
    conditional_function: function() {
        if ( parameters.AskForNotes )
        { return true }
        else { return false }
    }
}

var Notes = {
    timeline: [if_Notes]
}