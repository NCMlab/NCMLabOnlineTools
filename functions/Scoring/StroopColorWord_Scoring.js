function StroopColorWord_Scoring(data) {
    console.log(data)
    Results = {}
    Results.PrimaryResults = {}
    Results.AllResults = {}
    // Decide what type of scoring to perform
    if ( Stroop_parameters.Score_ProcedureName == null ) {
        var DataFromTestRun = jsPsych.data.get().filter({task: 'test trial'}).last(ColorTestQuestionTypes*Stroop_parameters.ColorTestRepeats)  
        // This is just generic scoring
        
        var DataFromTestRun = jsPsych.data.get().filter({task: 'test trial'}).last(ColorWordTestQuestionTypes*Stroop_parameters.ColorWordTestRepeats)  
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
        Results.PrimaryResults["Accuracy"] = accuracy
        Results.PrimaryResults["Accuracy_Cong"] = CongAccuracy
        Results.PrimaryResults["Accuracy_Incong"] = IncongAccuracy
    }
    else if  ( Stroop_parameters.Score_ProcedureName == 'Victoria' ) {
        // Score based on how long to complete a specified set of trials
        var DataFromTestRun = jsPsych.data.get().filter({task: 'test trial'}).first(Stroop_parameters.Score_NumberTrials)  
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
        Results.PrimaryResults['Accuracy'] = total_trials
    }

    // The following measures are included for all scoring types
    Results.PrimaryResults['ScoreName'] = Stroop_parameters.Score_ProcedureName
    Results.AllResults["Scoring Type"] = Stroop_parameters.Score_ProcedureName
    Results.AllResults["Accuracy_Cong"] = CongAccuracy
    Results.AllResults["Accuracy_Incong"] = IncongAccuracy
    Results.AllResults["NTrials"] = total_trials
    Results.AllResults["Accuracy"] = accuracy
    Results.AllResults['ResponseTime_Cor'] = rt_Correct
    Results.AllResults['ResponseTime_Incor'] = rt_Incorrect
    Results.AllResults["NCorrect_Congruent"] = CorCongTrials.count()
    Results.AllResults["NCorrect_Incongruent"] = CorIncongTrials.count()
    Results.AllResults["Accuracy_Cong"] = CongAccuracy
    Results.AllResults["Accuracy_Incong"] = IncongAccuracy
    Results.AllResults['ResponseTime_CorCong'] = rt_CorCong
    Results.AllResults['ResponseTime_CorIncong'] = rt_CorIncong
    Results.AllResults['ResponseTime_IncorCong'] = rt_IncorCong
    Results.AllResults['ResponseTime_IncorIncong'] = rt_IncorIncong    
    console.log(Results)
    return Results
}