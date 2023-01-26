function StroopColorWord_Scoring(data) {
	var DataFromTestRun = jsPsych.data.get().filter({task: 'test trial'}).last(ColorWordTestQuestionTypes*ColorWordTestRepeats)  
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
    // Split trials by congruency
    var CongruentTrials = DataFromTestRun.filter({congruency: 'Con'})
    var IncongruentTrials = DataFromTestRun.filter({congruency: 'Incon'})
    var CorCongTrials = CongruentTrials.filter({correct: true})
    var CorIncongTrials = IncongruentTrials.filter({correct: true})
    var IncorCongTrials = CongruentTrials.filter({correct: false})
    var IncorIncongTrials = IncongruentTrials.filter({correct: false})

    var CongAccuracy = Math.round(CorCongTrials.count() / CongruentTrials.count() * 100);
    var IncongAccuracy = Math.round(CorIncongTrials.count() / IncongruentTrials.count() * 100);
    var rt_CorCong = Math.round(CongruentTrials.select('rt').mean());
    var rt_CorIncong = Math.round(CorIncongTrials.select('rt').mean());
    var rt_IncorCong = Math.round(IncorCongTrials.select('rt').mean());
    var rt_IncorIncong = Math.round(IncorIncongTrials.select('rt').mean());

    // Response time for incorrect trials
    data.PrimaryResults = {}
    data.PrimaryResults["Accuracy_Cong"] = CongAccuracy
    data.PrimaryResults["Accuracy_Incong"] = IncongAccuracy
    data.AllResults = {}
    data.AllResults["NTrials"] = total_trials
    data.AllResults["Accuracy"] = accuracy
    data.AllResults['ResponseTime_Cor'] = rt_Correct
    data.AllResults['ResponseTime_Incor'] = rt_Incorrect
    data.AllResults["NCorrect_Congruent"] = CorCongTrials.count()
    data.AllResults["NCorrect_Incongruent"] = CorIncongTrials.count()
    data.AllResults["Accuracy_Cong"] = CongAccuracy
    data.AllResults["Accuracy_Incong"] = IncongAccuracy
    data.AllResults['ResponseTime_CorCong'] = rt_CorCong
    data.AllResults['ResponseTime_CorIncong'] = rt_CorIncong
    data.AllResults['ResponseTime_IncorCong'] = rt_IncorCong
    data.AllResults['ResponseTime_IncorIncong'] = rt_IncorIncong    
    return data
}