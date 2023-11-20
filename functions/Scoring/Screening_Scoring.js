function Screening_Scoring(data) {
	console.log(data)
	Results = {}	
	Eligible = true
	trialData = data.filter({trial: 'Screening'}).trials[0]
	console.log(trialData)
	var InclusionFlag = true
	
	

	

	Results.PrimaryResults = {}
	
	Results.AllResults = {}
	
	console.log(trialData.response)
	keys = Object.keys(trialData.response)
	console.log(keys)
	InclusionFlag = true
	if (( trialData.response.Age < 18 ) || 	(( trialData.response.Age > 30 ) && ( trialData.response.Age < 60 )))
	{ InclusionFlag = false }
	
	for ( var i = 0; i < keys.length; i++ )
	{	

		Results.AllResults[keys[i]] = trialData.response[keys[i]]
		if ( keys[i] != 'Age' ) {
			if ( !trialData.pages[0][i].correct_response === trialData.response[keys[i]] )
			{ InclusionFlag = false }
		}
		
	}
	console.log(InclusionFlag)
	if ( ! InclusionFlag ) 
	{ Eligible = false }
	Results.PrimaryResults['ScoreName'] = 'Eligible'
	Results.PrimaryResults['Accuracy'] = Eligible
	Results.AllResults['ScoreName'] = 'Eligible'
	Results.AllResults['Accuracy'] = Eligible


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
