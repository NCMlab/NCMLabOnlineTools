
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