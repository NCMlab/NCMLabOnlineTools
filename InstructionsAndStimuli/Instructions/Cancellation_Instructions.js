var EN_Instructions = {}
EN_Instructions.WelcomeText = [{'page':'<p class="Instructions">Welcome to the Cancellation Task.</p>'}]
EN_Instructions.SingleLetterCancellationInstructionText = [
      {'page':'<p class="Instructions">You will see multiple lines of items and you will need to click on all of the specified target items.'},
      ];
EN_Instructions.ThankYouText = [{'page':'Thank you.'}]
add('EN_Cancellation_Instructions_Default', function(){ Instructions = EN_Instructions});


var FR_Instructions = {}
FR_Instructions.WelcomeText = [{'page':'<p class="Instructions">FR: Welcome to the Cancellation experiment.</p>'}]
FR_Instructions.SingleLetterCancellationInstructionText = [
      {'page':'<p class="Instructions">FR: You will see multiple lines of items and you will need to click on all of the specified target items.'},
      ];
FR_Instructions.ThankYouText = [{'page':'FR: Thank you.'}]
add('FR_Cancellation_Instructions_Default', function(){ Instructions = FR_Instructions});
