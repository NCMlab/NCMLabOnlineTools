function PutStimIntoTable(prompt, stim) {
    var html = '';
    html += '<table style="height:100%; text-align:center">'
    html += '<tr style="height:15%">'
    html += '<td>'
    html += prompt
    html += '</td>'
    html += '</tr>'
    html += '<tr>'
    html += '<td>'
    html += stim
    html += '</td>'
    html += '</tr>'
    html += '</table>'
    return html
}

// ===========================================================================
// timer functions
var timer_function = function(wait_time){
    var start_time = performance.now();
    // Set up the interval to keep track of time. 
    // This checks the time every 250 milliseconds
    // The html ID #clock is updated
    interval = setInterval(function(){
        
        time_left = wait_time - (performance.now() - start_time);
        jsPsych.setProgressBar(time_left/wait_time)
        var minutes = Math.floor(time_left / 1000 / 60);
        var seconds = Math.floor((time_left - minutes*1000*60)/1000);
        var seconds_str = seconds.toString().padStart(2,'0');
        document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
        if ( time_left  < 0 ) {document.querySelector('#clock').innerHTML = '0:00'}
      }, 200
    )
}

var timer_progress_bar = function(wait_time){
  var start_time = performance.now();
  interval = setInterval(function(){
    time_left = wait_time - (performance.now() - start_time);
    percentage_time_left = time_left / wait_time
    jsPsych.setProgressBar( 1 - percentage_time_left )
  },500)
}


// ===========================================================================
/* 
A Switch/Case function that can have an arbitrary size

example usage:
add('4', function(){jatos.startComponent(37)});

pseudoSwitch('4')
*/

var callbacks = {
   'default': [() => {
    console.log('default')
  }]
};

// and you can create new entry with this function
function add(_case, fn) {
   callbacks[_case] = callbacks[_case] || [];
   callbacks[_case].push(fn);
}

// this function work like switch(value)
// to make the name shorter you can name it `cond` (like in scheme)
function pseudoSwitch(value) {
   if (callbacks[value]) {
      callbacks[value].forEach(function(fn) {
          fn();
      });
   }
}
// FOR DIGIT SPAN
//From the Experiment Factory Repository
var clearResponse = function() {
  response = [];
  document.getElementById("echoed_txt").innerHTML = response;
}
//function to push button responses to array
var recordClick = function(elm) {
  response.push(Number($(elm).text()))
  document.getElementById("echoed_txt").innerHTML = response;
}
// This is a numeric response pad
var response_grid =
  '<div class = numbox>' +
  '<button id = button_1 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>1</div></div></button>' +
  '<button id = button_2 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>2</div></div></button>' +
  '<button id = button_3 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>3</div></div></button>' +
  '<button id = button_4 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>4</div></div></button>' +
  '<button id = button_5 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>5</div></div></button>' +
  '<button id = button_6 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>6</div></div></button>' +
  '<button id = button_7 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>7</div></div></button>' +
  '<button id = button_8 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>8</div></div></button>' +
  '<button id = button_9 class = "square num-button" onclick = "recordClick(this)"><div class = content><div class = numbers>9</div></div></button>' +
  '<button class = clear_button id = "ClearButton" onclick = "clearResponse()">Clear</button>'+
  '<p id = current_answer><u><b>Current Answer:</b></u></p><div id=echoed_txt style="font-size: 3vh; color:blue;"><b></b></div></div>'


// FOR SERIAL SUBTRACTION
//From the Experiment Factory Repository
var clearResponseSerSub = function() {
  responseSerSub = '';
  document.getElementById("echoed_txt").innerHTML = responseSerSub;
}
//function to push button responses to array
var recordClickSerSub = function(elm) {
  responseSerSub = responseSerSub + (Number($(elm).text()))
  document.getElementById("echoed_txt").innerHTML = responseSerSub;
}
// This is a numeric response pad
var response_gridSerSub =
  '<div class = numbox>' +
  '<button id = button_1 class = "square num-button" onclick = "recordClickSerSub(this)"><div class = content><div class = numbers>1</div></div></button>' +
  '<button id = button_2 class = "square num-button" onclick = "recordClickSerSub(this)"><div class = content><div class = numbers>2</div></div></button>' +
  '<button id = button_3 class = "square num-button" onclick = "recordClickSerSub(this)"><div class = content><div class = numbers>3</div></div></button>' +
  '<button id = button_4 class = "square num-button" onclick = "recordClickSerSub(this)"><div class = content><div class = numbers>4</div></div></button>' +
  '<button id = button_5 class = "square num-button" onclick = "recordClickSerSub(this)"><div class = content><div class = numbers>5</div></div></button>' +
  '<button id = button_6 class = "square num-button" onclick = "recordClickSerSub(this)"><div class = content><div class = numbers>6</div></div></button>' +
  '<button id = button_7 class = "square num-button" onclick = "recordClickSerSub(this)"><div class = content><div class = numbers>7</div></div></button>' +
  '<button id = button_8 class = "square num-button" onclick = "recordClickSerSub(this)"><div class = content><div class = numbers>8</div></div></button>' +
  '<button id = button_9 class = "square num-button" onclick = "recordClickSerSub(this)"><div class = content><div class = numbers>9</div></div></button>' +
  '<button id = button_0 class = "square num-button" onclick = "recordClickSerSub(this)"><div class = content><div class = numbers>0</div></div></button>' +
  '<button class = clear_button id = "ClearButton" onclick = "clearResponseSerSub()">XCLEARX</button>'+
  '<p id = current_answer ><u><b>XCURRENTANSWERX:</b></u></p><div id=echoed_txt style="font-size: 3vh; color:blue;"><b></b></div></div>'


  function MakeListOfStimuli(FolderOfAudioFiles, Stimuli) {
    // cycle over the list of stimuli and make a list of audio file paths
    var AudioFilePaths = []
    for ( let i = 0; i < Stimuli.length; i ++ ) {
  //		AudioFilePaths.push({file: FolderOfAudioFiles + AudioFileNameStructure.replace('X', Stimuli[i])})
      AudioFilePaths.push(FolderOfAudioFiles + AudioFileNameStructure.replace('N', Stimuli[i]))
    }
    return AudioFilePaths
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
// Buttons added to the top of each task page for navigation and ending the experiment  
function returnToUsageManager() {
  jatos.startComponentByTitle("Central Executive");
}

function restartTask() {
  TaskList = jatos.studySessionData.TaskNameList[jatos.studySessionData.CurrentIndex]
  let text = "This will restart the current task. Are you sure?"
  if (confirm(text) == true)
  {   jatos.startComponentByTitle(TaskList)  }
}


function skipTask() {
  console.log(jatos.studySessionData)
  JATOSSessionData = jatos.studySessionData
  JATOSSessionData.CurrentIndex += 1
  jatos.studySessionData = JATOSSessionData
  console.log(jatos.studySessionData)
  TaskList = jatos.studySessionData.TaskNameList[jatos.studySessionData.CurrentIndex ]
  let text = LabelNames.SkipTask
  if (confirm(text) == true)
  {   jatos.startComponentByTitle(TaskList)  }
}

function stopExperiment() {
  let text = LabelNames.StopStudy
  if (confirm(text) == true)
  { jatos.endStudy() }
}

function quitExperiment() {
  let text = LabelNames.ExitStudy
  if (confirm(text) == true)
  { jatos.abortStudy() }
}

function setLanguage(id, val) {    
  console.log("========")
  console.log("SetLanguage: "+val )
  console.log("Id: "+id)
  console.log(document.getElementById(id))
  let element = document.getElementById(id);
  element.value = val;
}



function LanguageSelection(sel) {
  console.log(jatos.workerId)
  jatos.batchSession.set(jatos.workerId+"_Language", sel.options[sel.selectedIndex].text) 
  //alert(sel.options[sel.selectedIndex].text);

}

function openInfo() {
  const openBtn = document.getElementById("header-info-button");
  const modal = document.getElementById("modal");  
  // hide the copy button
  const copyButton = document.getElementById("copy-info-button")
  copyButton.setAttribute('hidden', 'hidden');
  modal.classList.add("open");  
}

function openResourcesShort() {
  console.log(document.getElementById('task-background-info'))
  //document.getElementById('task-background-title').textContent = MentalHealthResources.title
  document.getElementById('task-background-info').innerHTML = MentalHealthResourcesShort.text
  document.getElementById('task-background-info').style.overflow = "auto"
  document.getElementById('task-background-info').style.height = "100%"
  document.getElementById('inner-modal').style.overflow = "auto"
  document.getElementById('inner-modal').style.height = "100%"
  //document.getElementById('modal').style.overflow = "auto"
  //document.getElementById('modal').style.height = "100%"
  console.log(document.getElementById('task-background-info')) 
  const openBtn = document.getElementById("header-info-button");
  const modal = document.getElementById("modal");  
  modal.classList.add("open");  

}



function openResourcesLong() {
  document.getElementById('task-background-info').innerHTML = MentalHealthResourcesLong.text;
//  const openBtn = document.getElementById("header-info-button");
  const modal = document.getElementById("modal");  
  setTimeout(modal.classList.add("open"),60000);  
}

function copyInfo() {
  var copyText = document.getElementById("task-background-info");  
     // Copy the text inside the text field
     
     var text = copyText.innerText || copyText.textContent;
     copyText.innerHTML = text;
     navigator.clipboard.writeText(copyText.innerHTML).then(
      () => {
        /* clipboard successfully set */
        console.log("Success")
        alert('Information copied to clipboard. Paste the text (e.g. ctrl-V) in a different window')
      },
      () => {
        /* clipboard write failed */
        console.log("Failed")
      },
    );
}

function closeInfo() {
  const closeBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modal");
  modal.classList.remove("open");

}

// ===============================================
// Decide where to go next functionaility
function whereToGoNext(SessionData, CurrentIndex){
    // If this a la carte or the end of the battery go to the usage manager
    console.log(SessionData.TaskNameList)
    console.log(SessionData.UsageType)
    console.log(CurrentIndex)
    
    if ( SessionData.UsageType == 'ALaCarte' )       
      { jatos.startComponentByTitle("Central Executive") }
    else if ( SessionData.UsageType == 'SingleTask' )
      {  console.log(BreakPoint) }
    else if ( SessionData.UsageType == 'Battery' ) 
      { 
        // Is the user done with the battry?
        if ( CurrentIndex == SessionData.TaskNameList.length )
        {
          console.log("Worker has completed the battery")
          if ( SessionData["Redirect"] !== undefined )          
          { window.open(SessionData.Redirect,'_self') }
          else { window.open('https://www.uottawa.ca','_self') }
        }
        else { jatos.startComponentByTitle(SessionData.TaskNameList[SessionData.CurrentIndex]) }
      }
    else 
      { // if no usage type is selected then do the same as a la carte/user choice
        jatos.startComponentByTitle("Central Executive")
      }
}

  
// Load script (Questionnaire definition) javaScript file using a promise
function loadScriptSequentially(file) {
    return new Promise((resolve, reject) => {
    const newScript = document.createElement('script');
    newScript.setAttribute('src', file);
    newScript.setAttribute('async', 'true');

    newScript.onload = () => {
        resolve('loaded successfully'); // Resolve the promise
    };
    newScript.onerror = () => {
        console.log('Error loading script');
        reject(new Error(`Error loading script: ${file}`));
    };
    document.head.appendChild(newScript);
    });
}
