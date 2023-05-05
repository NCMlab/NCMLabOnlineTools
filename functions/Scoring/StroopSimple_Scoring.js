function StroopSimple_Scoring(data) {
    console.log(data)
	Results = {}
    Results.PrimaryResults = {}
    Results.AllResults = {}

    // Decide what type of scoring to perform
    if ( Stroop_parameters.Score_ProcedureName == null ) {
        var DataFromTestRun = jsPsych.data.get().filter({task: 'test trial'}).last(ColorTestQuestionTypes*Stroop_parameters.ColorTestRepeats)  
        // This is just generic scoring
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
        Results.PrimaryResults["Accuracy"] = accuracy
    }
    else if  ( Stroop_parameters.Score_ProcedureName == 'Victoria' ) {
        // Score based on how long to complete a specified set of trials
        var DataFromTestRun = jsPsych.data.get().filter({task: 'test trial'}).first(Stroop_parameters.Score_NumberTrials)  
        // How many trials?
        var total_trials = DataFromTestRun.count();
        // How many were correct?
        var NumberCorrect = DataFromTestRun.filter({correct: true}).count()
        var NumberIncorrect = total_trials - NumberCorrect
        // How long to complete these trials?
        // Sum all of the response times
        Duration = DataFromTestRun.select('rt').sum()
        // accuracy
        var accuracy = Math.round(NumberCorrect / total_trials * 100);
        // How many time outs? (If applicable)
        // Response time for correct trials
        var CorrectTrials = DataFromTestRun.filter({correct: true})
        var IncorrectTrials = DataFromTestRun.filter({correct: false})
        var rt_Correct = Math.round(CorrectTrials.select('rt').mean());
        var rt_Incorrect = Math.round(IncorrectTrials.select('rt').mean());
        Results.PrimaryResults['Duration'] = Duration
        Results.PrimaryResults['NumberIncorrect'] = NumberIncorrect
        Results.AllResults['Duration'] = Duration
        Results.AllResults['NumberIncorrect'] = NumberIncorrect

    }
    else if  ( Stroop_parameters.Score_ProcedureName == 'Golden' ) {
        // How many trials completed in a pre-specified time?
        var DataFromTestRun = jsPsych.data.get().filter({task: 'test trial'})
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
        Results.PrimaryResults['NumberCompleted'] = total_trials
    }

    // The following measures are included for all scoring types
    Results.PrimaryResults["Scoring Type"] = Stroop_parameters.Score_ProcedureName

    Results.AllResults["NTrials"] = total_trials
    Results.AllResults["NCorrect"] = NumberCorrect
    Results.AllResults["Accuracy"] = accuracy
    Results.AllResults['Response_Cor'] = rt_Correct
    Results.AllResults['Response_Incor'] = rt_Incorrect
    console.log(Results)
    return Results
}