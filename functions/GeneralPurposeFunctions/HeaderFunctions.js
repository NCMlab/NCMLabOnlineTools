
function UpdateHeader() {
        try {
            // By default make them all hidden
            document.getElementById('header-home-button').style.visibility = "hidden"
            document.getElementById('header-quit-button').style.visibility = "hidden"
            document.getElementById('header-restart-button').style.visibility = "hidden"
            document.getElementById('header-skip-button').style.visibility = "hidden"
            document.getElementById('header-stop-button').style.visibility = "hidden"
            document.getElementById('header-info-button').style.visibility = "hidden"

            console.log(jatos)
            for ( item in jatos.studySessionData.HeaderButtonsToShow ) {
                console.log( jatos.studySessionData.HeaderButtonsToShow[item] )
                switch ( jatos.studySessionData.HeaderButtonsToShow[item] ) {
                    case 'Home':
                        console.log("HOME")
                        document.getElementById('header-home-button').textContent = LabelNames.Home;            
                        document.getElementById('header-home-button').style.visibility = "visible"            
                        break;
                    case 'Quit':
                        console.log("QUIT")
                        document.getElementById('header-quit-button').textContent = LabelNames.Quit;            
                        document.getElementById('header-quit-button').style.visibility = "visible"            
                        break;
                    case 'Restart':
                        console.log("RESTART")
                        document.getElementById('header-restart-button').textContent = LabelNames.Restart;            
                        document.getElementById('header-restart-button').style.visibility = "visible"            
                        break;
                    case 'Stop':
                        document.getElementById('header-stop-button').textContent = LabelNames.Stop;            
                        document.getElementById('header-stop-button').style.visibility = "visible"            
                        break;
                    case 'Skip':
                        document.getElementById('header-skip-button').textContent = LabelNames.Skip;            
                        document.getElementById('header-skip-button').style.visibility = "visible"            
                        break;
                    case 'Info':
                        document.getElementById('header-info-button').textContent = LabelNames.Info;            
                        document.getElementById('header-info-button').style.visibility = "visible"            
                        break;
                }
            }
            
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