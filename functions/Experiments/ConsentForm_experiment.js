var check_consent = function(elem) {
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
    url: function() {return ConsentForm.Text},
    cont_btn: "start",
    check_fn: check_consent,
    on_finish: function(data){
        console.log(data)
    }
};
  
var timeline = []
timeline.push(trial)
