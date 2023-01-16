// Make stimulus and option names

function MakeICARMatrxiReasoningStim(StimulusID, StimulusFolderName) 
{
	var stim = StimulusFolderName + StimulusID + "/" + StimulusID + "_stim.png"
	return stim
}
function MakeICARMatrxiReasoningOptions(StimulusID, StimulusFolderName) 
{
	var options = []
	str = '<img src ="'+StimulusFolderName + StimulusID + '/' + StimulusID + '_optionA.png"'+ ' width='+StimWidth+' height='+StimHeight+'>'
	options.push(str)
	str = '<img src ="'+StimulusFolderName + StimulusID + '/' + StimulusID + '_optionB.png"'+ ' width='+StimWidth+' height='+StimHeight+'>'
	options.push(str)
	str = '<img src ="'+StimulusFolderName + StimulusID + '/' + StimulusID + '_optionC.png"'+ ' width='+StimWidth+' height='+StimHeight+'>'
	options.push(str)
	str = '<img src ="'+StimulusFolderName + StimulusID + '/' + StimulusID + '_optionD.png"'+ ' width='+StimWidth+' height='+StimHeight+'>'
	options.push(str)
	str = '<img src ="'+StimulusFolderName + StimulusID + '/' + StimulusID + '_optionE.png"'+ ' width='+StimWidth+' height='+StimHeight+'>'
	options.push(str)
	str = '<img src ="'+StimulusFolderName + StimulusID + '/' + StimulusID + '_optionF.png"'+ ' width='+StimWidth+' height='+StimHeight+'>'
	options.push(str)
	options.push('None of these')
	options.push('I do not know')
	return options
}