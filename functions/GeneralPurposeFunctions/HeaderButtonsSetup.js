


    var buttonText = "Home";
    var button = document.createElement("button");
    button.textContent = buttonText;
    button.setAttribute("id", "header-home-button");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "returnToUsageManager()");
    document.getElementById("header-btn-group").appendChild(button);

    var buttonText = "?";
    var button = document.createElement("button");
    button.textContent = buttonText;
    button.setAttribute("id", "header-info-button");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "openInfo()");
    document.getElementById("header-btn-group").appendChild(button);

    var buttonText = "Stop";
    var button = document.createElement("button");
    button.textContent = buttonText;
    button.setAttribute("id", "header-stop-button");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "stopExperiment()");
    document.getElementById("header-btn-group").appendChild(button);

    var buttonText = "Quit";
    var button = document.createElement("button");
    button.textContent = buttonText;
    button.setAttribute("id", "header-quit-button");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "quitExperiment()");
    document.getElementById("header-btn-group").appendChild(button);

    var buttonText = "Skip";
    var button = document.createElement("button");
    button.textContent = buttonText;
    button.setAttribute("id", "header-skip-button");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "skipTask()");
    document.getElementById("header-btn-group").appendChild(button);

    var buttonText = "Restart";
    var button = document.createElement('button');
    button.textContent = buttonText;
    button.setAttribute('id', 'header-restart-button');
    button.setAttribute('type', 'button');
    button.setAttribute('onclick',"restartTask()")
    document.getElementById('header-btn-group').appendChild(button);

    // Wrap select in a container div
    var langWrapper = document.createElement("div");
    langWrapper.setAttribute("id", "language-wrapper");
    langWrapper.style.marginLeft = "auto";
    langWrapper.style.marginRight = "15px";
    langWrapper.style.marginTop = "15px";
    langWrapper.style.position = "relative"; // helps dropdown position

    // Create and append the select list
    var array = ["EN", "FR"];
    var selectList = document.createElement("select");

    for (var i = 0; i < array.length; i++) {
      var option = document.createElement("option");
      option.value = array[i];
      option.text = array[i];
      selectList.appendChild(option);
    }

    selectList.setAttribute("onchange", "LanguageSelection(this)");
    selectList.setAttribute("id", "LanguageSelectPulldown");

    // Append the select to the wrapper
    langWrapper.appendChild(selectList);
    document.getElementById("header-btn-group").appendChild(langWrapper);
    //UpdateHeader()