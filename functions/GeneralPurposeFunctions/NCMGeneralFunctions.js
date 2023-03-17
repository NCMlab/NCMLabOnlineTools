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
        var minutes = Math.floor(time_left / 1000 / 60);
        var seconds = Math.floor((time_left - minutes*1000*60)/1000);
        var seconds_str = seconds.toString().padStart(2,'0');
        document.querySelector('#clock').innerHTML = minutes + ':' + seconds_str
        if ( time_left  < 0 ) {document.querySelector('#clock').innerHTML = '0:00'}
      }, 200
    )

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