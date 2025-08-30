var check_consent = function(elem) {
    console.log("HELLO CONSENT BUTTON")
    if (document.getElementById('consent_checkbox').checked) {    
        return true;
    }
    else {
        alert("If you wish to participate, you must check the box next to the statement 'I agree to participate in this study.'");
        return false;
    }
    return false;
};


// declare the block.
var trial = {
    type: jsPsychExternalHtml,
    url: function() {return parameters.Text},
    cont_btn: "start",
    check_fn: check_consent,
    execute_script: true,
    on_finish: function(data){
        console.log(data)
        data.trial = "Consent"
        data.response = ["Yes"]
    }
};
  

var SendData = {
    type: jsPsychCallFunction,
    func: function() {
        var data = jsPsych.data.get()
          Results = ConsentForm_Scoring(data)
          console.log(Results)
          jsPsych.finishTrial(Results)
    },
  }
var timeline = []

timeline.push(Welcome)
timeline.push(trial)
timeline.push(SendData)
//timeline.push(trial)
