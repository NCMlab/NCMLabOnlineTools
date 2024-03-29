function ClockDrawing_Scoring(data) {
    var drawings = data.filter({trial: 'Clock Drawing'}).values();
    
    var scores = [];
    
    // Load reference GIF images
    var referenceImages = []; 
    
    // Loop through each drawing
    for (var i = 0; i < drawings.length; i++) {
        var drawing = drawings[i];
        var participantGIF = drawing.gif; 
        
        // Compare participant's GIF with reference images
        var similarityScores = [];
        for (var j = 0; j < referenceImages.length; j++) {
            var referenceImage = referenceImages[j];
            var similarity = calculateSimilarity(participantGIF, referenceImage);
            similarityScores.push(similarity);
        }
        
        // calculate average similarity score
        var totalSimilarity = similarityScores.reduce((acc, cur) => acc + cur, 0);
        var averageSimilarity = totalSimilarity / similarityScores.length;
        
        // convert similarity score to a scale of 0 to 100 (percentage)
        var score = averageSimilarity * 100;
        scores.push(score);
    }
    
    // calculate average score
    var totalScore = scores.reduce((acc, cur) => acc + cur, 0);
    var averageScore = totalScore / scores.length;
    
    
    return {
        scores: scores,
        averageScore: averageScore
    };
}

// function to calculate similarity between two GIF images
function calculateSimilarity(imageData1, imageData2) {
    // Check if image dimensions match
    if (imageData1.width !== imageData2.width || imageData1.height !== imageData2.height) {
        throw new Error('Image dimensions do not match');
    }

    // Get pixel data of both images
    var pixels1 = imageData1.data;
    var pixels2 = imageData2.data;

    // Calculate squared difference for each pixel
    var sumSquaredDiff = 0;
    for (var i = 0; i < pixels1.length; i += 4) { // Each pixel has 4 values (RGBA)
        var diffR = pixels1[i] - pixels2[i];
        var diffG = pixels1[i + 1] - pixels2[i + 1];
        var diffB = pixels1[i + 2] - pixels2[i + 2];
        var diffA = pixels1[i + 3] - pixels2[i + 3]; // Alpha channel (transparency)
        sumSquaredDiff += diffR * diffR + diffG * diffG + diffB * diffB + diffA * diffA;
    }

    // Calculate mean squared difference (MSD)
    var meanSquaredDiff = sumSquaredDiff / (pixels1.length / 4);

    // Calculate similarity (1 - MSD)
    var similarity = 1 - (meanSquaredDiff / 255 * 255); // Normalize MSD to range [0, 1]

    return similarity;
}



