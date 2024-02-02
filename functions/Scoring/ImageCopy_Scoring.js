function ImageCopy_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	trialData = data.filter({trial: 'Image Copy'}).trials[0]
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Accuracy'
	Results.PrimaryResults['Accuracy'] = -99
	Results.AllResults = {}
	Results.AllResults['Accuracy'] = -99

    /*analyze the drawing accuracy and get the score 
    const score = analyzeDrawing();
    Results.PrimaryResults['Accuracy'] = score; 
    Results.AllResults['Accuracy'] = score;
	*/ 

	// resize the image
	//var smallPNG = drawImage(trialData.png, 0, 0, 100, 100)
	//Results.AllResults['Image'] = trialData.png
	//Results.AllResults['GIF'] = trialData.gif

	Results.AllResults['Response Time (ms)'] = trialData.rt
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }

	//Results.AllResults['Notes'] = Notes.trials[0].response.Notes
	console.log(Results)
	return Results
}

 /* function to analyze cube drawing 

function analyzeDrawing(){
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    //setting canvas dimensions
    canvas.width = 200; 
    canvas.height = 200;

    //appending canvas to the document (not visible to user)
    document.body.appendChild(canvas);
     // Draw the cube on the canvas
     drawCube();


	   // Get the image data of the drawn cube
	   const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

	   // Count non-transparent pixels
	   const nonTransparentPixelCount = getNonTransparentPixelCount(imageData);
   
	   // Define scoring criteria
	   const minPixelCount = 100; // Adjust this value based on your criteria
   
	   // Calculate the score
	   let score = 0;
	   if (nonTransparentPixelCount >= minPixelCount) {
		   score = 1; // You can customize the scoring logic here
	   }
   
	   // Remove the canvas from the document body
	   document.body.removeChild(canvas);
   

	   return score;

   }
// Helper function to count non-transparent pixels in the image data
function getNonTransparentPixelCount(imageData) {
    const data = imageData.data;
    let count = 0;

    for (let i = 0; i < data.length; i += 4) {
        // Check if the pixel is not transparent
        if (data[i + 3] !== 0) {
            count++;
        }
    }

    return count;
} */