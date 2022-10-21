    class Stair {
  		constructor(Current=1, MinValue=1, MaxValue=9, MaxReversals=5,
  			MaxTrials=40, StepSize=1, NUp=3, NDown=1, FastStart=true, MaxTime=420) 
  		{
  			this.Current = Current; // what is the current value
  			this.TrialCount = 0; // How many trials have been completed
  			this.MinValue = MinValue; // what is the minimum value this staircase can reach
  			this.MaxValue = MaxValue; // what is the maximum value this staircase can reach
  			this.MaxReversals = MaxReversals; // What is the maximum number of reversal. This is a break condition
  			this.MaxTrials = MaxTrials; // What is the maximum number of trials. This is a break condition
  			this.StepSize = StepSize; // What is the step size
  			this.NUp = NUp;// How many correct responses in a row are required before the current value is INcreased
  			this.NDown = NDown;// How many INcorrect responses in a two are required before the current value is DEcreased
  			this.FastStart = FastStart; // At the beginning should sequential correct responses result in increasing current?
  			this.CurrentRun = 1; // How many correct in a row
  			this.ValueList = []; // List of all the values across all trials
  			// add the inital value to the list
  			this.ValueList.push(this.Current)
  			this.ReversalList = []; // List of values where a reversal took place
  			this.findDirection()
  			this.CurrentDirection = 1; // What direction are we heading? 1 increasing, -1 decreasing
  			this.Finished = false; // If any of the stopping conditions are met this is set to true
  			this.ReversalCount = 0; // the number of reversals
  			this.MaxTime= MaxTime; // This is the maximal amount of time that the staircase can last (IN SECONDS)

  		}
  		findDirection() {
  			if (this.StepSize > 0) {
  				this.CurrentDirection = 1
  			}
  			else {
  				this.CurrentDirection = -1
  			}
  		}
  		// increase difficulty
  		stepUp() {
  			// allow for reverse staircases
  			if (this.StepSize > 0) {
  			// only increase current if the max value has NOT been reached
	  			if (this.Current < this.MaxValue) {
	  				// Is this a reversal?
	  				if (this.CurrentDirection == -1) {
	  					// if so add the current value to the list
	  					this.ReversalList.push(this.Current)
	  					// and update the reversal count list
	  					this.updateReversalCount()
	  				}
	  				this.Current += this.StepSize	

	  				// update the current run list
	  				this.CurrentRun = 1
	  			}
	  			// Make sure the direction is correct
	  			this.CurrentDirection = 1

	  		}
	  		else {
	  			if (this.Current > this.MinValue) {
	  				// Is this a reversal?
	  				if (this.CurrentDirection == 1) {
	  					// if so add the current value to the list
	  					this.ReversalList.push(this.Current)
	  					// and update the reversal count list
	  					this.updateReversalCount()
	  					// update the current run list
	  					this.CurrentRun = 1
	  				}
	  				this.Current += this.StepSize	
	  			}
	  			// Make sure the direction is correct
	  			this.CurrentDirection = -1	
	  		}  			
  		}
  		// Check to see if any stopping conditions are met
  		checkFinished() {
  			if (this.ReversalCount == this.MaxReversals) {
  				this.Finished = true
  			}
  			if (this.TrialCount == this.MaxTrials) {
  				this.Finished = true
  			}
  		}

  		// decrease difficulty
  		stepDown() {
  			// allow for reverse staircases
  			if (this.StepSize > 0) {
  				
  				if (this.CurrentDirection == 1) {
	  				// if so add the current value to the list
	  				this.ReversalList.push(this.Current)
	  				// and update the reversal count list
	  				this.updateReversalCount()
	  			}
	  			// Check to make sure the value is not at the limit
  				if (this.Current > this.MinValue) 
  				{
  					this.Current -= this.StepSize
  				}
  				// Make sure the direction is correct
	  			this.CurrentDirection = -1
  			} 
  			else {
  				// Check to see if this is a reversal
  				if (this.CurrentDirection == -1) {
	  				// if so add the current value to the list
	  				this.ReversalList.push(this.Current)
	  				// and update the reversal count list
	  				this.updateReversalCount()
	  			}

  				if (this.Current < this.MaxValue) 
  				{
  					this.Current -= this.StepSize
  				}
  				// Make sure the direction is correct
	  			this.CurrentDirection = 1
  			}
  		}

  		// keep track of reversal count
  		updateReversalCount() {
  			this.ReversalCount += 1
  		}

  		// stop the fast start
  		StopFastStart() {
  			this.FastStart = false
  		}

  		// Make a decision based on the current response
  		Decide(ResponseCorrect) {
  			// the response is correct
  			if (ResponseCorrect) {
  				// are we still at the rapid increase phase?
	  			if (this.FastStart) {
	  				this.BeginningDecision()
	  			}
	  			else {
	  				this.LaterDecision()
	  			}
	  		}
	  		else {
	  			this.stepDown()
	  			// reset the current run counter
	  			this.CurrentRun = 1
	  			// If we are still in the fast start increase phase, then end it
	  			if (this.FastStart) {
	  				this.FastStart = false
	  			}
	  		}
	  		// At the end of every decision check the ending conditions
	  		this.ValueList.push(this.Current)
	  		this.TrialCount += 1
	  		this.checkFinished()
  		}

  		// We are at the rapid increase phase at the beginning 
  		BeginningDecision() {
  			this.stepUp()
  			// Note that the CurrentRun counter is not being used yet
  		}

  		// We are past the rapid increase phase at the beginning
  		LaterDecision() {
  			// if this is the completeion of a run of correct responses, then increase
  			if (this.CurrentRun == this.NUp) {
  				this.stepUp()
  				// reset the current run counter since we made a change
  				this.CurrentRun = 1
  			} 
  			else {
  				this.CurrentRun += 1
  			}
  		}

      CalculateAverage() {
        // calculate the average of the reversal values
          var totalSum = 0;
          for(var i in this.ReversalList) {
            totalSum += this.ReversalList[i];
          }
          var numsCnt = this.ReversalList.length;
          var average = totalSum / numsCnt;
          return average
      }
  	}
