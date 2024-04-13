// Function to load the reference clock image from a file
function loadImageFromFile() {
    var img = new Image();
    img.src = '/Users/yara/Desktop/CSI4900/NCMLabOnlineTools/reference_clock.jpg';
    return img;
}

// Function to load the drawn clock image from data
function loadImageFromData(data) {
    // Extract the drawn image data from the experiment data
    var imageData = data.drawnImage; // Assuming 'drawnImage' is the key where you stored the drawn image data
    
    // Create a new Image object
    var img = new Image();
    
    img.src = imageData;
    
    return img;
}



// Function to compare the drawn clock image with a reference image
function compareClockImages(drawnClockImage, referenceClockImage) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    // Wait for both images to load before proceeding
    if (drawnClockImage.complete && referenceClockImage.complete) {
        // Set canvas dimensions to the size of the reference clock image
        canvas.width = referenceClockImage.width;
        canvas.height = referenceClockImage.height;

        // Draw the reference clock image onto the canvas
        context.drawImage(referenceClockImage, 0, 0);

        // Get the reference clock image data
        var referenceImageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

        // Draw the drawn clock image onto the canvas
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        context.drawImage(drawnClockImage, 0, 0);

        // Get the drawn clock image data
        var drawnImageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

        // Compare pixel values of the two images
        var similaritySum = 0;
        for (var i = 0; i < referenceImageData.length; i += 4) {
            // Calculate the absolute difference between corresponding pixel values (R, G, B, A)
            var diffR = Math.abs(referenceImageData[i] - drawnImageData[i]);
            var diffG = Math.abs(referenceImageData[i + 1] - drawnImageData[i + 1]);
            var diffB = Math.abs(referenceImageData[i + 2] - drawnImageData[i + 2]);
            var diffA = Math.abs(referenceImageData[i + 3] - drawnImageData[i + 3]);

            // Calculate the average difference for each pixel
            var averageDiff = (diffR + diffG + diffB + diffA) / 4;

            // Add the average difference to the similarity sum
            similaritySum += averageDiff;
        }

        // Calculate the similarity score (normalized average difference)
        var similarityScore = 1 - (similaritySum / (referenceImageData.length / 4 * 255));

        return similarityScore;
    } else {
        // If either image hasn't loaded yet, return a default similarity score
        return 0;
    }
}


// Function to assign a score based on the similarity score
function assignScore(similarityScore) {
    var score = 0;
    
    // Map similarity score to the provided scoring ranges
    if (similarityScore >= 0.8) {
        score = 10;
    } else if (similarityScore >= 0.6) {
        score = 8;
    } else if (similarityScore >= 0.4) {
        score = 5;
    } else {
        score = 0;
    }
    
    return score;
}

function ClockDrawing_Scoring(data) {
    var score = 0;
    
    // Perform image comparison
    var drawnClockImage = loadImageFromData(data); // Implement this function to load the drawn clock image from data
    var referenceClockImage = loadImageFromFile(); // Load the reference clock image
    var similarityScore = compareClockImages(drawnClockImage, referenceClockImage); // Compare the two images
    
    // Assign score based on similarity score
    score = assignScore(similarityScore);
    
    return { score: score };
}
