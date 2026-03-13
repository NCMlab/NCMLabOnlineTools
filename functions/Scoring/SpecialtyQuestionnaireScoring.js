function SpecialtyScoring(data)  {
  
  
    //var data = this.type.jsPsych.data.get().filter({trial: 'Questionnaire'})
    console.log(data)
    switch ( data.trials[0].shortTitle ) {
      case 'FirstName':
        // This is here to have a language independent location to store the first name of a participant
        {
          Results.AllResults['FirstName'] = data.trials[0].response['Name']
        }
        case 'GDS':
          {
            var TotalScore = 0
            // The following can be done with a loop, but the explicit nature of the following makes it very 
            // easy to see what is being done.
            if ( data.trials[0].response.find(o => o.name === 'gds01').responseValue == 0 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds02').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds03').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds04').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds05').responseValue == 0 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds06').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds07').responseValue == 0 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds08').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds09').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds10').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds11').responseValue == 0 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds12').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds13').responseValue == 0 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds14').responseValue == 1 ){ TotalScore++ }
            if ( data.trials[0].response.find(o => o.name === 'gds15').responseValue == 1 ){ TotalScore++ }
            Results.AllResults['Total Score'] = TotalScore
            Results.AllResults['Accuracy'] = TotalScore
            // Make adjustments for unanswered questions
            var AvgScore = Results.AllResults['Total Score']/Results.AllResults['Questions Answered']*Results.AllResults['Number of Questions']
            Results.AllResults['Average Score'] = AvgScore
            console.log(data)
            console.log(data.trials[0].name)
            var totalScoreName = data.trials[0].name + "_total"
		        var avgScoreName = data.trials[0].name + "_avg"
		        
            Results.NumericResults[totalScoreName] = TotalScore
            Results.NumericResults[avgScoreName] = AvgScore
            console.log("SPECIALY SCORING")
            console.log(Results)

            break;
          }
          case 'PANAS, weekly':
            {
              Results.AllResults['Positive'] = data.trials[0].response.find(o => o.name === 'panas03').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas05').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas07').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas08').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas10').responseValue
              Results.NumericResults['panas_pos'] = Results.AllResults['Positive']

              Results.AllResults['Negative'] = data.trials[0].response.find(o => o.name === 'panas01').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas02').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas04').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas06').responseValue + 
                data.trials[0].response.find(o => o.name === 'panas09').responseValue
              Results.NumericResults['panas_neg'] = Results.AllResults['Negative']
              break;                                              
            }
          case 'PANAS, baseline':
          {
            Results.AllResults['Positive'] = data.trials[0].response.find(o => o.name === 'panas03').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas05').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas07').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas08').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas10').responseValue
            Results.NumericResults['panas_pos'] = Results.AllResults['Positive']

            Results.AllResults['Negative'] = data.trials[0].response.find(o => o.name === 'panas01').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas02').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas04').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas06').responseValue + 
              data.trials[0].response.find(o => o.name === 'panas09').responseValue
            Results.NumericResults['panas_neg'] = Results.AllResults['Negative']
            break;                                              
          }
    }
    
  }

