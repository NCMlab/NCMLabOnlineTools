
function UpdateHeader() {
        try {
            // set the language of the header buttons
            document.getElementById('header-home-button').textContent = LabelNames.Home;
            document.getElementById('header-restart-button').textContent = LabelNames.Restart;
            document.getElementById('header-stop-button').textContent = LabelNames.Stop;
            document.getElementById('header-quit-button').textContent = LabelNames.Quit;
            document.getElementById('header-skip-button').textContent = LabelNames.Skip;
            document.getElementById('header-info-button').style.visibility = "hidden"
            
            // set the visibility of the header buttons
            //document.getElementById('header-home-button').style.visibility = "hidden"
            document.getElementById('header-quit-button').style.visibility = "hidden"
            document.getElementById('header-restart-button').style.visibility = "hidden"
            document.getElementById('header-skip-button').style.visibility = "hidden"
            document.getElementById('header-stop-button').style.visibility = "hidden"
            
            // set the language pulldown button             
            var LangIsSetTo = jatos.batchSession.get(jatos.workerId+"_Language")
            
            //jatos.batchSession.set(jatos.workerId+"_Language", sel.options[sel.selectedIndex].text) 
            var elem = document.getElementById('LanguageSelectPulldown')
            elem.value = LangIsSetTo
   
        
        } catch (error) {
            console.log(error);
        }
            // Check to see if we are in the User Choice screen, if so turn off restart and home

    }