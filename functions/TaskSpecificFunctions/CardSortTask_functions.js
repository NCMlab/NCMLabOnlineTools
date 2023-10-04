// Make list of stimuli
function MakeCSTFileNames(ImageFolder) {
	CST_List = []
	var NumberFactor = ['1','2','3','4']
	var ColorFactor = ['blue','red','yellow','green']
	var ShapeFactor = ['circle','cross','star','triangle']
	var FileNames = []
	var FactorMapping = []
	for (var i = 0; i < 4; i++ ) {
		for (var j = 0; j < 4; j++ ) {
			for (var k = 0; k < 4; k++ ) {
				FileName = NumberFactor[i] + "-" + ColorFactor[j] + "-" + ShapeFactor[k] +".png"
				tempDict = {}
				tempDict["stim"] = FileName
				tempDict["FactorMapping"] = [String(i)+String(j)+String(k)]
				FactorMapping.push([String(i)+String(j)+String(k)])
				CST_List.push(tempDict)
				FileNames.push(ImageFolder+FileName)
			}
		}
	}
	Output = {}
	Output.CST_List = CST_List
	Output.FileNames = FileNames
	Output.FactorMapping = FactorMapping
	return Output

}