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