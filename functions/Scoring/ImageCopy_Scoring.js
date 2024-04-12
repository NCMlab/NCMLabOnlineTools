const { rawListeners } = require("process");

function calculateScore(drawingData) {
  const numLines = drawingData.length;


  //defining scoring criteria
  const maxLines = 12; // max lines allowed for perfect score
  const perfectScore = 12; //perfect score value

  const symmetryWeight = 2;
  const proportionalityWeight = 2;
  const completenessWeight = 2;
  const placementWeight = 2;

  //calculation of scores based on number of lines
  //assigns a score if number of lines is within the limit
  let score;
  if (numLines <= maxLines) {
    score = perfectScore - (numLines / maxLines) * perfectScore;


    // adding the score from the defined criteria
    const symmetryScore = symmetryCheck(drawingData) * symmetryWeight;
    const proportionalityScore =
      proportionalityCheck(drawingData) * proportionalityWeight;
    const completenessScore =
      completenessCheck(drawingData) * completenessWeight;
    const placementScore = placementCheck(drawingData) * placementWeight;

    console.log("Symmetry Score: " + symmetryScore);
    console.log("Proportionality Score: " + proportionalityScore);
    console.log("Completeness Score: " + completenessScore);
    console.log("Placement Score: " + placementScore);

    // adding the score from the defined criteria
    score +=
      symmetryScore + proportionalityScore + completenessScore + placementScore;
  } else {
    //if number of lines exceeds max lines
    score = 0;
  }

  return score;
}

function symmetryCheck(drawingData) {
  const numPoints = drawingData.length;
  if (numPoints < 2) {
    return 0;
  }
  // finds the midpoint of the drawing
  const midPoint = drawingData.reduce(
    (acc, curr) => [acc[0] + curr[0], acc[1] + curr[1]],
    [0, 0]
  );

  midPoint[0] /= numPoints;
  midPoint[1] /= numPoints;

  const threshold = 10;

  // calculates the sum of distances between each point
  let sumDistances = 0;
  for (let i = 0; i < numPoints; i++) {
    const point = drawingData[i];
    const reflectedPoint = [
      2 * midPoint[0] - point[0],
      2 * midPoint[1] - point[1],
    ];

    // calculates Euclidean distance
    sumDistances += Math.sqrt(
      (reflectedPoint[0] - point[0]) ** 2 + (reflectedPoint[1] - point[1]) ** 2
    );
  }

  // handles edge case avoid division by zero if numPoints is zero
  if (numPoints === 0) {
    return 0;
  }

  // calculates the average distance
  const averageDistance = sumDistances / numPoints;

  const scalingFactor = 2;

  const symmetryScore =
    Math.max(0, 1 - averageDistance / threshold) * scalingFactor;
  return symmetryScore;
}


function proportionalityCheck(drawingData) {
  const numPoints = drawingData.length;

  if (numPoints < 3) {
    return 0;
  }
  // calculates the distance between consecutive consecutive points
  const distances = [];
  for (let i = 0; i < numPoints - 1; i++) {
    const [x1, y1] = drawingData[i];
    const [x2, y2] = drawingData[i + 1];
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    distances.push(distance);
  }
  // calculates the average distacne
  const averageDistance =
    distances.reduce((acc, curr) => acc + curr, 0) / distances.length;

  // *** i might change the threshold ***
  const threshold = 5;
  const scalingFactor = 2;
  const variance =
    distances.reduce((acc, curr) => acc + (curr - averageDistance) ** 2, 0) /
    distances.length;
  const proportionalityScore =
    Math.max(0, 1 - variance / threshold) * scalingFactor;

  return proportionalityScore;
}

function completenessCheck(drawingData) {
  const numPoints = drawingData.length;

  if (numPoints < 3) {
    return 0;
  }

  // calculates the bounding of the box
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (const [x, y] of drawingData) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }

  // calculates the area of the bounding box
  const boundingBoxArea = (maxX - minX) * (maxY - minY);

  // calculates the area covered by the drawing
  const drawnArea = calculateDrawnArea(drawingData);

  // completeness score as the ratio of drawn area to bounding box
  const completenessScore = drawnArea / boundingBoxArea;

  return completenessScore;
}

function calculateDrawnArea(drawingData) {
  let drawnArea = 0;

  // formula to calculate the area of a polygon using the shoelace formula
  for (let i = 0; i < drawingData.length - 1; i++) {
    const [x1, y1] = drawingData[i];
    const [x2, y2] = drawingData[i + 1];
    drawnArea += x1 * y2 - x2 * y1;
  }

  // last vertex connecting to the first vertex to close the polygon
  const [x1, y1] = drawingData[drawingData.length - 1];
  const [x2, y2] = drawingData[0];
  drawnArea += x1 * y2 - x2 * y1;

  drawnArea = Math.abs(drawnArea) / 2;

  return drawnArea;
}

function placementCheck(drawingData) {
  const numPoints = drawingData.length;

  if (numPoints < 1) {
    return 0;
  }

  // defining reference area/points
  const referenceArea = { minX: 0, minY: 0, maxX: 100, maxY: 100 }; // Example reference area

  // centroid of the drawing
  const centroid = calculateCentroid(drawingData);

  // Check if centroid calculation returns valid coordinates
  if (isNaN(centroid[0]) || isNaN(centroid[1])) {
    return 0;
  }

  // distance between the centroid and the reference area
  const referenceAreaCenterX = (referenceArea.minX + referenceArea.maxX) / 2;
  const referenceAreaCenterY = (referenceArea.minY + referenceArea.maxY) / 2;

  // Calculate distance to center
  const distanceToCenter = Math.sqrt(
    (centroid[0] - referenceAreaCenterX) ** 2 +
      (centroid[1] - referenceAreaCenterY) ** 2
  );

  // Check if distance calculation returns a valid number
  if (isNaN(distanceToCenter)) {
    return 0;
  }

  // maximum possible distance from the reference area center
  const maxDistance = Math.sqrt(
    (referenceArea.maxX - referenceAreaCenterX) ** 2 +
      (referenceArea.maxY - referenceAreaCenterY) ** 2
  );

  // Check if maxDistance calculation returns a valid number
  if (isNaN(maxDistance) || maxDistance === 0) {
    return 0;
  }

  // placement score as the ratio of distance to the maximum distance
  const placementScore = 1 - distanceToCenter / maxDistance;

  return placementScore;
}


function calculateCentroid(drawingData) {
  // the centroid of a set of points
  let sumX = 0;
  let sumY = 0;
  for (const [x, y] of drawingData) {
    sumX += x;
    sumY += y;
  }
  const centroidX = sumX / drawingData.length;
  const centroidY = sumY / drawingData.length;
  return [centroidX, centroidY];
}

//function to handle scoring at the end of the exeperiment



function handleScoring(data) {
  const drawingData = data.trials[3].strokes;
  console.log("Drawing Data:", drawingData);

  const score = calculateScore(drawingData);
  console.log("Score:", score);

  const Results = {};

  Results.PrimaryResults = {};
  Results.PrimaryResults['ScoreName'] = 'Drawing Score';
  Results.PrimaryResults['Accuracy'] = score;

  Results.AllResults = {};
  Results.AllResults['Accuracy'] = score;
  Results.AllResults['ScoreName'] = 'Drawing Score';
  Results.AllResults['Symmetry Score'] = symmetryCheck(drawingData) * 2;
  Results.AllResults['Proportionality Score'] = proportionalityCheck(drawingData) * 2;
  Results.AllResults['Completeness Score'] = completenessCheck(drawingData) * 2;
  Results.AllResults['Placement Score'] = placementCheck(drawingData) * 2;

  Results.parameters = {};
  console.log("r" , Results);

  return Results;
  
}



