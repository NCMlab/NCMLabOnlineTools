
var IntializeMicrophone = {
    type: jsPsychInitializeMicrophone
};

  

var if_MicrophoneInitialized = {
    timeline: [IntializeMicrophone],
    conditional_function: function() {
        
        const recorder = jsPsych.pluginAPI.getMicrophoneRecorder()
        if ( recorder !== null ){
            console.log("MICROPHONE IS ALREADY INITIALIZED")
        }
    }
}
