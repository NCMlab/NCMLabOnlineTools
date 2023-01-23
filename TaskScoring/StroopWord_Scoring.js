function StroopWord_Scoring(data) {
	var DataFromTestRun = jsPsych.data.get().filter({task: 'test trial'}).last(WordTestQuestionTypes*WordTestRepeats)  
    // How many trials?
    var total_trials = DataFromTestRun.count();
    // How many were correct?
    var NumberCorrect = DataFromTestRun.filter({correct: true}).count()
    // What is the accuracy?
    var accuracy = Math.round(NumberCorrect / total_trials * 100);
    // How many time outs? (If applicable)
    // Response time for correct trials
    var CorrectTrials = DataFromTestRun.filter({correct: true})
    var IncorrectTrials = DataFromTestRun.filter({correct: false})
    var rt_Correct = Math.round(CorrectTrials.select('rt').mean());
    var rt_Incorrect = Math.round(IncorrectTrials.select('rt').mean());

    // Response time for incorrect trials
    data.PrimaryResults = {}
    data.PrimaryResults["Accuracy"] = accuracy
    data.AllResults = {}
    data.AllResults["NTrials"] = total_trials
    data.AllResults["NCorrect"] = NumberCorrect
    data.AllResults["Accuracy"] = accuracy
    data.AllResults['Response_Cor'] = rt_Correct
    data.AllResults['Response_Incor'] = rt_Incorrect
    return data
}