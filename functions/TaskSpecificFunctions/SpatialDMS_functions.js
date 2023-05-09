function CalculateRadius(CanvasWidth, CanvasHeight)
{
    var CircleRadius
    if ( CanvasWidth > CanvasHeight) {
        CircleRadius = (CanvasHeight/GridCountX)/2
    }
    else {
        CircleRadius = (CanvasWidth/GridCountX)/2
    }
    return CircleRadius
}

function filledCirc(canvas, x, y, radius, color) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function CanvasText(canvas, x, y, text, color) {
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle'; 
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }
  
  function shuffle(array) {
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function ReturnElementsFromPermute(count, N) {
  var shuffledValues = shuffle(Array.from(Array(N).keys()))
  return shuffledValues.slice(0,count)
}

// translate the location into coordinates for drawing
function mapLinearIndexToGridIndex(index, gridX, gridY) {
  var y = Math.floor(index/gridX)
  var x = index % gridX
  return [x,y]
}

function NegativeProbeLocation(CurrentLocations, N) {
  var NonLocations = Array.from(Array(N).keys())
  for ( var i = 0; i < CurrentLocations.length; i ++ ) {
    NonLocations = NonLocations.filter(function(e) { return e !==  CurrentLocations[i]})
  }
  return shuffle(NonLocations).slice(0,1)
}
