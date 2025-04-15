function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

jatos.onLoad(function() {
    const jatos_params = jatos.urlQueryParameters;
    const battery = jatos_params["Battery"];
    const taskIndex = jatos_params["Taskindex"];
    const session = jatos_params["Session"];

    console.log("Hi Mom!");

    console.log("Current URL:", window.location.href);
    console.log("Current URL jatos_params:", window.location.search);

    console.log(jatos_params,battery,taskIndex,session);
    
    // Check the session data to see if it is empty, if so add to it. If not, leave it alone
    // Is this worker in the Batch data?
    JATOSSessionData = jatos.studySessionData

    if ( isEmpty(JATOSSessionData) && ( typeof jatos.batchSession.get(jatos.workerId) == 'undefined' )) 
    {
        alert("USAGE MANAGER LINE 59: FIRST TIME")
        jatos.batchSession.set(jatos.workerId+"_Language", "EN")  // This is the default language
        jatos.batchSession.set(jatos.workerId, 0);
        // transfer the language to teh session information
    }
    else 
    {
        //jatos.batchSession.set(jatos.workerId+"_Language", "EN") 
        jatos.batchSession.set(jatos.workerId, 0);
    }
    /* var trial0 = {
        type: jsPsychHtmlButtonResponse,
        stimulus: "",
        choices: "",
        trial_duration: 10
        
    }*/

    const htmlFilePath = 'html/JATOS/'


    if (taskIndex != null) {
        //window.location.href = htmlFilePath + `single-task.html?taskindex=${taskIndex}` + jatos_params.toString();
        jatos.startComponentByTitle("Run Single Task")
    } else if (session != null) {
        //window.location.href = htmlFilePath + `session-chooser.html?session=${session}` + jatos_params.toString();
        jatos.startComponentByTitle("Session Chooser")
    } else if (!isNaN(battery) && battery <= 1000) {
        console.log("Yo Mom!");
        //window.location.href = htmlFilePath + `batteries.html?battery=${battery}` + jatos_params.toString();
        jatos.startComponentByTitle("Batteries")
    } else { // Battery > 1000
        //window.location.href = htmlFilePath + `UserChoiceManager.html?battery=${battery}` + jatos_params.toString();
        jatos.startComponentByTitle("User Choice")

    }
});



//timeline.push(trial0)
