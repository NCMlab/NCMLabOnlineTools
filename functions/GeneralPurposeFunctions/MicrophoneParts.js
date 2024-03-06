
var InitializeMicrophone = {
    type: jsPsychInitializeMicrophone,
    device_select_message: function() { return LabelNames.SelectMicrophone },
    button_label: function() { return LabelNames.UseThisMicrophone },
    on_finish: function() {
        console.log("Microphone initialization has begun!")
      // after choice and initialization, save the microphone info to the jatos session data
      recorder = jsPsych.pluginAPI.getMicrophoneRecorder();
      MicrophoneInfo = jsPsych.pluginAPI.getMicrophoneRecorder()
      // jatos cannot store the microphone object, so just save the microphone ID
       jatos.studySessionData.Microphone = MicrophoneInfo.stream.id
       console.log("Microphone initialization COMPLETE")
    }
  };
  
  var CheckMicrophone = {
    timeline: [InitializeMicrophone],
    conditional_function: function() {
      // if there is no microphone stored in the jatos session data
      // then initialize it
      if ( jatos.studySessionData.Microphone == null )
      { return true }
      // get the jatos session data and give it to the current jspsych task
      else { 
        console.log("Microphone initialization PREVIOUSLY!")
        console.log(jatos.studySessionData)
        // recreate the microphone object

        const myFunction = async function() {
            const stream = window.navigator.mediaDevices.getUserMedia({ audio: { deviceId: jatos.studySessionData.Microphone} });
            return stream
        }
        const start = async function() {
            const result = await myFunction();
            jsPsych.pluginAPI.initializeMicrophoneRecorder(result)
            console.log(result)
        }
        start();
        

        //stream.then(function(result) {
        // initialize the microphone
        return false }
  }}
  