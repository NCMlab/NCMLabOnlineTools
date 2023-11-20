function Screening_Scoring(data) {
	console.log(data)
	Results = {}	
	Eligible = true
	trialData = data.filter({trial: 'Screening'}).trials[0]
	console.log(trialData)
	var InclusionFlag = true
	
	
	// check all answers
	if (( trialData.response.Age < 18 ) || 	(( trialData.response.Age > 30 ) && ( trialData.response.Age < 60 )))
	{ InclusionFlag = false }
	for ( var i = 0; i < trialData.accuracy.length; i++ )
	{
		var fieldName = Object.keys(trialData.accuracy[i])
		if ( ! trialData.accuracy[i][fieldName] )
		{ InclusionFlag = false }
	}
	if ( ! InclusionFlag ) 
	{ Eligible = false }
	
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Eligible'
	Results.PrimaryResults['Accuracy'] = Eligible
	
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = 'Eligible'
	Results.AllResults['Accuracy'] = Eligible
	
	console.log(trialData.response)
	const keys = Object.keys(trialData.response)
	console.log(keys[1])

	for ( var i = 0; i < keys.length; i++ )
	{	
		Results.AllResults[keys[i]] = trialData.response[keys[i]]
	}

	var NAV = navigator;
    var ComputerInfo = {}
    ComputerInfo.CurrentLanguage = NAV.language
    ComputerInfo.AvailableLanguage = NAV.languages
    ComputerInfo.appVersion = NAV.appVersion


	Results.AllResults['Computer Information'] = ComputerInfo.appVersion
	Results.AllResults['Current Language'] = ComputerInfo.CurrentLanguage
	Results.AllResults['Available Language'] = ComputerInfo.AvailableLanguage

	return Results
}
