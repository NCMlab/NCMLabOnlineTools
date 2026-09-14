function Screening_Scoring(data) {
	console.log(data)
	Results = {}	
	Eligible = true
	trialData = data.filter({trial: 'Screening'}).trials[0]
	console.log(trialData)
	// responses
	var responses = trialData.response.map(a => a.responseValue)
	console.log(trialData.response.map(a => a.responseValue))
	// criteria
	var criteria = trialData.pages.pages[0].elements.map(a=>a.criteria)
	console.log(trialData.pages.pages[0].elements.map(a=>a.criteria))
	var InclusionFlag = true
	for ( var i = 0; i < criteria.length; i++ )
	{
		if ( criteria[i] != undefined ) {
			if (typeof criteria[i] === 'string' || criteria[i] instanceof String)
			{
				if ( ! eval(responses[i] + criteria[i]))
				{ 
					console.log("Not eligible")
					InclusionFlag = false 
					break
				} else {console.log("Passed criteria")}
			}
			else {
				 if (! responses[i] == criteria[i] )
				 {
					console.log("Not eligible")
					InclusionFlag = false 
					break
				} else {console.log("Passed criteria")}
			}
		}
	}
	console.log(InclusionFlag)

	var InclusionFlag = true
	Results.PrimaryResults = {}
	Results.AllResults = {}

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
