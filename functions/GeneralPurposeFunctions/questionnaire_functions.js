    function MakePagesOfItems(items, QPerPage)
    {
        // How many questions are there in the scale
        var NQuest = items.length;
        // How many pages are there?
        // If a negative value is provided then put all questions on a single page
        if (QPerPage < 0)
        {
            var NPages = 1
        }
        else {
            var NPages = Math.ceil(NQuest/QPerPage)    
        }
        // make an array for the items per page
        var itemPages  = []
        // cycle over the pages
        for (var i = 0; i < NPages; i++)
        {   
            // find the first and last question to be placed on each page
            var start = QPerPage*i
            var stop = (i+1)*QPerPage;
            // Set the last page correctly
            if (stop > NQuest) {stop = NQuest}
            itemPages[i] = {};
            itemPages[i].questions = items.slice(start,stop);
        }
        return itemPages
    }


  function MakePagesOfItemsMCSurvey(items, QPerPage)
    {
        // How many questions are there in the scale
        var NQuest = items.length;
        // How many pages are there?
        // If a negative value is provided then put all questions on a single page
        if (QPerPage < 0)
        {
            var NPages = 1
        }
        else {
            var NPages = Math.ceil(NQuest/QPerPage)    
        }
        // make an array for the items per page
        var itemPages  = []
        // cycle over the pages
        for (var i = 0; i < NPages; i++)
        {   
            // find the first and last question to be placed on each page
            var start = QPerPage*i
            var stop = (i+1)*QPerPage;
            // Set the last page correctly
            if (stop > NQuest) {stop = NQuest}
            itemPages[i] = {};
            itemPages[i].questions = items.slice(start,stop);
        }
        return itemPages
    }


function MakeLikertQuestionnaire(CurrentTest) {
    // How many options are there in the scale?
    var ScaleSize = CurrentTest.scale01.length;

    // Break item list into pages
    itemPages = MakePagesOfItems(CurrentTest.items, CurrentTest.items.length)

    // By defining the sum and missed questions counters here, outside of other variables they have a larger scope. 
    // That means that each page of the scale adds to these variables. Therefore, the results from the last page have 
    // the correct complete values calculated across all pages of the questionnaire.
    var Sum = 0
    var MissedQuestions = 0
    // Prepare the questionnaire
    var LikertQuestionnaire = {
        type: jsPsychSurveyLikert,
        // the items are taken from the import JS file
        timeline: itemPages,
        // The instructions are also in the JS file
        preamble: "<h2>"+CurrentTest.title+"</h2>"+CurrentTest.instructions,
        on_finish: function(data){
          // The responses to each question on a likert scale are stored in an Object
          // cycle over the object and find the key and values for each
//          var Sum = 0;
          
          var count = 0;
          // cycle over each entry in teh object that holds the likert scale and responses
          for (const [key, value] of Object.entries(jsPsych.data.getLastTrialData().values()[0].response)) 
            {   // Check to see if any questions were not answers. If so then score them as a zero.
                if (value === "")
                {
                    Sum += 0
                    // Keep track of how many questions were missed
                    MissedQuestions += 1
                }
                else
                {
                    // Check to see if the scoring for this items should be reveresed
                    if (CurrentTest.ReverseScoreDirection[count])
                    {
                        Sum += ScaleSize - value
                    }
                    else 
                    {
                        Sum += value + 1
                    }
                }
                // If there are no reversals of the scoring then allow the entry of a single flag instead of a full array 
                if (CurrentTest.ReverseScoreDirection.length > 1)
                {
                    count += 1      
                }
            }
          data.Sum = Sum
          data.NumberMissedQuestions = MissedQuestions
        }
    };
    timeline = []
    timeline.push(LikertQuestionnaire)
    return timeline
}