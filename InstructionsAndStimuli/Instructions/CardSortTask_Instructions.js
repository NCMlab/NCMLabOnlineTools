var EN_Instructions = {}
EN_Instructions.InstructionText = [
	{'page': '<p class="Instructions"> Select one of the four cards displayed at the top of the screen such '
                              +'that the selected card matches the card displayed at the bottom of the screen. '
                              +'The cards can be matched based on three dimensions - color, number of objects '
                              +'or the shape of the objects they display. You will be given feedback whether the '
                              +'selected card was RIGHT or WRONG. Use the feedback to determine which '
                              +'dimension is targeted by feedback and based on it select the right card. The '
                              +'targeted dimension may change from time to time without notice.</p>'},
    {'page': '<img src=assets/InstructionalImages/CardSortInstructions.png></img>'}
],
EN_Instructions.ThankYouText = [{'page':'Thank you. Press any key to continue.'}]

EN_Instructions.WelcomeText = [{'page': '<p class="Instructions">This is the Card Sort Task.<br>Press Next to Continue'}]
add('EN_CardSortTask_Instructions_Default', function(){ Instructions = EN_Instructions});