function IntakeForm_Scoring(data) {
	trialData = data.filter({trial: 'Intake Form'}).trials[0]
    console.log(trialData)
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['Participant ID'] = trialData.response.ParticipantID
	Results.AllResults = {}
	Results.AllResults['Participant ID'] = trialData.response.ParticipantID
    Results.AllResults['Sex'] = trialData.response.Sex
    Results.AllResults['Gender'] = trialData.response.Gender
    Results.AllResults['Year of Birth'] = trialData.response.YearOfBirth
    Results.AllResults['Month of Birth'] = trialData.response.MonthOfBirth
    Results.AllResults['Years of Education'] = trialData.response.YearsEdu
	
	return Results
}