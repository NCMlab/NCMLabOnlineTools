
var taskName = "myMod01.js"
var Str = 'import {task} from "./' + taskName +'"';
eval(Str)
console.log(Str)