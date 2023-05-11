// Make stimulus and option names

function MakeMatrxiReasoningStim(StimulusID, BaseFolderName, StimulusFolderName ) 
{
	var stim = BaseFolderName + "/"+ StimulusFolderName + "/" + StimulusID + "/" + StimulusID + "_stim.png"
	return stim
}
function MakeMatrxiReasoningOptions(StimulusID, BaseFolderName, StimulusFolderName, StimWidth, StimHeight) 
{
	var options = []
	str = '<img src ="'+BaseFolderName+"/"+StimulusFolderName + "/" + StimulusID + '/' + StimulusID + '_optionA.png"'+ ' width='+StimWidth+' height='+StimHeight+'>'
	options.push(str)
	str = '<img src ="'+BaseFolderName+"/"+StimulusFolderName + "/" + StimulusID + '/' + StimulusID + '_optionB.png"'+ ' width='+StimWidth+' height='+StimHeight+'>'
	options.push(str)
	str = '<img src ="'+BaseFolderName+"/"+StimulusFolderName + "/" + StimulusID + '/' + StimulusID + '_optionC.png"'+ ' width='+StimWidth+' height='+StimHeight+'>'
	options.push(str)
	str = '<img src ="'+BaseFolderName+"/"+StimulusFolderName + "/" + StimulusID + '/' + StimulusID + '_optionD.png"'+ ' width='+StimWidth+' height='+StimHeight+'>'
	options.push(str)
	str = '<img src ="'+BaseFolderName+"/"+StimulusFolderName + "/" + StimulusID + '/' + StimulusID + '_optionE.png"'+ ' width='+StimWidth+' height='+StimHeight+'>'
	options.push(str)
	str = '<img src ="'+BaseFolderName+"/"+StimulusFolderName + "/" + StimulusID + '/' + StimulusID + '_optionF.png"'+ ' width='+StimWidth+' height='+StimHeight+'>'
	options.push(str)
	options.push('None of these')
	options.push('I do not know')
	return options
}

function MakeMatrxiReasoningOptionsFileNames(StimulusID, BaseFolderName, StimulusFolderName) 
{
	var options = []
	var str = BaseFolderName+"/"+StimulusFolderName + "/" + StimulusID + '/' + StimulusID + '_optionA.png'
	options.push(str)
	var str = BaseFolderName+"/"+StimulusFolderName + "/" + StimulusID + '/' + StimulusID + '_optionB.png'
	options.push(str)
	var str = BaseFolderName+"/"+StimulusFolderName + "/" + StimulusID + '/' + StimulusID + '_optionC.png'
	options.push(str)
	var str = BaseFolderName+"/"+StimulusFolderName + "/" + StimulusID + '/' + StimulusID + '_optionD.png'
	options.push(str)
	var str = BaseFolderName+"/"+StimulusFolderName + "/" + StimulusID + '/' + StimulusID + '_optionE.png'
	options.push(str)
	var str = BaseFolderName+"/"+StimulusFolderName + "/" + StimulusID + '/' + StimulusID + '_optionF.png'
	options.push(str)
	return options	
}