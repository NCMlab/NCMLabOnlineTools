function EQ5D_Scoring(data) {
    console.log(data)
    QuestionnaireData = data.filter({trial: 'Questionnaire'})
    VASData = data.filter({trial: 'VAS'})
    console.log(QuestionnaireData)
    console.log(VASData)
    var Results = {}
    Results.AllResults = {}
	Results.AllResults['ScoreName'] = data.shortTitle
	

	Results.AllResults['ShortTitle'] = 'EQ-5D'
    Results.AllResults['Accuracy'] = ''

    
    if ( QuestionnaireData.trials[0].response['mobility'] > 3 )
    { Results.AllResults['Mobility'] = 1 }
    else { Results.AllResults['Mobility'] = 0 }

    if ( QuestionnaireData.trials[0].response['selfcare'] > 3 )
    { Results.AllResults['Self-Care'] = 1 }
    else { Results.AllResults['Self-Care'] = 0 }

    if ( QuestionnaireData.trials[0].response['usualactivities'] > 3 )
    { Results.AllResults['Usual Activities'] = 1 }
    else { Results.AllResults['Usual Activities'] = 0 }        

    if ( QuestionnaireData.trials[0].response['paindiscomfort'] > 3 )
    { Results.AllResults['Pain/Discomfort'] = 1 }
    else { Results.AllResults['Pain/Discomfort'] = 0 }

    if ( QuestionnaireData.trials[0].response['anxietydepression'] > 3 )
    { Results.AllResults['Anxiety/Depression'] = 1 }
    else { Results.AllResults['Anxiety/Depression'] = 0 }

    Results.AllResults['Total Score'] = Results.AllResults['Mobility'] + 
                                        Results.AllResults['Self-Care'] + 
                                        Results.AllResults['Usual Activities'] + 
                                        Results.AllResults['Pain/Discomfort'] + 
                                        Results.AllResults['Anxiety/Depression']
    Results.AllResults['Accuracy'] = Results.AllResults['Total Score']
    
    // Utility score
    Results.AllResults['Utility Score'] = 1.1351 
            -(0.0389*QuestionnaireData.trials[0].response['mobility']) 
            -(0.0458*QuestionnaireData.trials[0].response['selfcare']) 
            -(0.0195*QuestionnaireData.trials[0].response['usualactivities'])
            -(0.0444*QuestionnaireData.trials[0].response['paindiscomfort'])
            -(0.0376*QuestionnaireData.trials[0].response['anxietydepression'])
            -(Results.AllResults['Mobility']*0.051)
            -(Results.AllResults['Self-Care']*0.0584)
            -(Results.AllResults['Usual Activities']*0.1103)
            -(Results.AllResults['Pain/Discomfort']*0.1409)
            -(Results.AllResults['Anxiety/Depression']*0.1277)
            +(0.0085*(Results.AllResults['Total Score']-1)*(Results.AllResults['Total Score']-1))

    Results.AllResults['Health Rating'] = VASData.trials[0].response
    return Results
}