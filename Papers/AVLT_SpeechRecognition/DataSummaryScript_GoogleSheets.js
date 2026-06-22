function sumJ1FromSheetList() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const listSheet = ss.getSheetByName("IncludedData");

  // Get sheet names from column A (starting at A2)
  const sheetNames = listSheet
    .getRange(2, 1, listSheet.getLastRow() - 1, 1)
    .getValues()
    .flat()
    .filter(name => name); // remove blanks

  let correct = 0;
  let responses = 0;
  let miss = 0;
  let homophone = 0;
  let minmaxArray = Array.from({ length: 4 }, () => Array(2).fill(0))
  minmaxArray[0][1] = 9999; minmaxArray[1][1] = 9999; minmaxArray[2][1] = 9999; minmaxArray[3][1] = 9999; 
  let wordCount = Array.from({ length: 15 }, () => Array(4).fill(0))
  console.log(wordCount)
  sheetNames.forEach(name => {
    const sheet = ss.getSheetByName(name);
    console.log(name)
    if (sheet) {
      const value1 = sheet.getRange("J1").getValue();
      if (typeof value1 === "number") { correct += value1; }
      
      const value2 = sheet.getRange("J2").getValue();
      if (typeof value2 === "number") { responses += value2; }
      
      const value3 = sheet.getRange("J3").getValue();
      if (typeof value3 === "number") { miss += value3; }
      
      const value4 = sheet.getRange("J4").getValue();
      if (typeof value4 === "number") { homophone += value4; }
      
      // get max and min across people
      const value5 = sheet.getRange("K1").getValue();
      if (typeof value5 === "number")
      { 
        minmaxArray[0][0] = minmaxArray[0][0] === null ? value : Math.max(minmaxArray[0][0], value5) 
        minmaxArray[0][1] = minmaxArray[0][1] === null ? value : Math.min(minmaxArray[0][1], value5) 
        }
      const value6 = sheet.getRange("J2").getValue();
      if (typeof value6 === "number")
      { 
        minmaxArray[1][0] = minmaxArray[1][0] === null ? value : Math.max(minmaxArray[1][0], value6) 
        minmaxArray[1][1] = minmaxArray[1][1] === null ? value : Math.min(minmaxArray[1][1], value6) 
        }
      const value7 = sheet.getRange("K3").getValue();
      if (typeof value7 === "number")
      { 
        minmaxArray[2][0] = minmaxArray[2][0] === null ? value : Math.max(minmaxArray[2][0], value7) 
        minmaxArray[2][1] = minmaxArray[2][1] === null ? value : Math.min(minmaxArray[2][1], value7) 
        }
      const value8 = sheet.getRange("K4").getValue();
      if (typeof value8 === "number")
      { 
        minmaxArray[3][0] = minmaxArray[3][0] === null ? value : Math.max(minmaxArray[3][0], value8) 
        minmaxArray[3][1] = minmaxArray[3][1] === null ? value : Math.min(minmaxArray[3][1], value8) 
        }

      // cycle over the words to find out word specific counts
      for (let row = 2; row <= 16; row++) {
          const value5 = sheet.getRange(`B${row}:G${row}`).getValues();
          const countPresent = value5[0].filter(v => v !== "" && v !== null).length;
          const countOfOnes = value5[0].filter(v => v === 1).length;
          const countOfMiss = value5[0].filter(v => v === 2).length;
          const countOfHomop = value5[0].filter(v => v === 3).length;
          wordCount[row - 2][0] += countPresent
          wordCount[row - 2][1] += countOfOnes
          wordCount[row - 2][2] += countOfMiss
          wordCount[row - 2][3] += countOfHomop
      }
      
      
    }
  });

  // Output result
  listSheet.getRange("C2").setValue(correct);
  listSheet.getRange("C3").setValue(miss);
  listSheet.getRange("C4").setValue(homophone);
  listSheet.getRange("C5").setValue(responses);

  listSheet.getRange("E2").setValue(minmaxArray[0][0]);//correct
  listSheet.getRange("F2").setValue(minmaxArray[0][1]);//correct
  listSheet.getRange("E3").setValue(minmaxArray[2][0]);//miss
  listSheet.getRange("F3").setValue(minmaxArray[2][1]);//miss
  listSheet.getRange("E4").setValue(minmaxArray[3][0]);//homophone
  listSheet.getRange("F4").setValue(minmaxArray[3][1]);//homophone
  listSheet.getRange("E5").setValue(minmaxArray[1][0]/100);//N response
  listSheet.getRange("F5").setValue(minmaxArray[1][1]/100);//N response

for (let i = 0; i < 15; i++) {
  listSheet.getRange(`C${9 + i}`).setValue(wordCount[i][0]);
  listSheet.getRange(`D${9 + i}`).setValue(wordCount[i][1]);
  listSheet.getRange(`E${9 + i}`).setValue(wordCount[i][2]);
  listSheet.getRange(`F${9 + i}`).setValue(wordCount[i][3]);
}


}