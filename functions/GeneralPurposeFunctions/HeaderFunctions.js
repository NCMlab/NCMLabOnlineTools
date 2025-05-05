
function UpdateHeader() {
    //hide  the information button for now
    //
    // set the header button language
    //console.log(document.getElementById('header-home-button'))
   
   // window.onload = function() {
        try {
            
            document.getElementById('header-home-button').textContent = LabelNames.Home;
            document.getElementById('header-restart-button').textContent = LabelNames.Restart;
            document.getElementById('header-stop-button').textContent = LabelNames.Stop;
            document.getElementById('header-quit-button').textContent = LabelNames.Quit;
            document.getElementById('header-skip-button').textContent = LabelNames.Skip;
            document.getElementById('header-info-button').style.visibility = "hidden"
            
            //document.getElementById('header-home-button').style.visibility = "hidden"
            document.getElementById('header-quit-button').style.visibility = "hidden"
            document.getElementById('header-restart-button').style.visibility = "hidden"
            document.getElementById('header-skip-button').style.visibility = "hidden"
            document.getElementById('header-stop-button').style.visibility = "hidden"
        } catch (error) {
            console.log(error);
        }
            // Check to see if we are in the User Choice screen, if so turn off restart and home

        
   // }

            
    
}
function SetLanguagePulldown() {
    //window.onload = function() {
        // Has the language already been selected?
        console.log(jatos.batchSession.getAll())
        var LangIsSetTo = jatos.batchSession.get(jatos.workerId+"_Language")
        //jatos.batchSession.set(jatos.workerId+"_Language", sel.options[sel.selectedIndex].text) 
        console.log("LANGUAGE IS SET TO: "+LangIsSetTo) 
        console.log("Current worker is: "+jatos.workerId)
        console.log(jatos.batchSession.getAll())
        var elem = document.getElementById('LanguageSelectPulldown')
        console.log(elem)
        console.log(elem.value)
        elem.value = LangIsSetTo
        console.log(elem.value)
    //}
}
function GetLanguagePulldown() {
    //window.onload = function() {
        var elem = document.getElementById('LanguageSelectPulldown')
        console.log(elem)
        console.log(elem.value)

    //}
}
