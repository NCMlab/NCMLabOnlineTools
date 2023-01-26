/*
https://www.commondataelements.ninds.nih.gov/report-viewer/23949/Rey%20Auditory%20Verbal%20Learning%20Test%20(RAVLT)#:~:text=Scoring%3A%20Different%20summary%20scores%20are,score%20of%20the%20delayed%20recall).
	
Scoring: Different summary scores are derived from raw RAVLT scores. These include RAVLT 
Immediate (the sum of scores from 5 first trials, i.e., Trials 1 to 5), Learning 
(the score of Trial 5 minus the score of Trial 1), and Forgetting (the score of 
Trial 5 minus score of the delayed recall).
*/

function RAVLT_Scoring(data, ResponseArray) {
	console.log(ResponseArray)


	RecallArray = CalcTotalRecallPerBlock(ResponseArray)
	Trial1_Recall = RecallArray[0]
	Trial2_Recall = RecallArray[1]
	Trial3_Recall = RecallArray[2]
	Trial4_Recall = RecallArray[3]
	Trial5_Recall = RecallArray[4]
	Distraction_Recall = RecallArray[5]
	PostDistraction_Recall = RecallArray[6]
	Learning = RecallArray[4] - RecallArray[0]
	Forgetting = RecallArray[4] - RecallArray[6]
	Immediate = SumArray(RecallArray.slice(0,5))

	data.PrimaryResults = {}
	data.PrimaryResults['Immediate'] = Immediate
	data.PrimaryResults['Forgetting'] = Forgetting
	data.PrimaryResults['Learning'] = Learning
	data.AllResults = {}
	data.AllResults['Immediate'] = Immediate
	data.AllResults['Forgetting'] = Forgetting
	data.AllResults['Learning'] = Learning
	data.AllResults['Trial1_Recall'] = Trial1_Recall
	data.AllResults['Trial1_Recall'] = Trial2_Recall
	data.AllResults['Trial1_Recall'] = Trial3_Recall
	data.AllResults['Trial1_Recall'] = Trial4_Recall
	data.AllResults['Trial1_Recall'] = Trial5_Recall
	data.AllResults['Distraction_Recall'] = Distraction_Recall
	data.AllResults['PostDistraction_Recall'] = PostDistraction_Recall	
	return data
}
