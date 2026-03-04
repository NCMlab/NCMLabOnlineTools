GDS: before we think the score from the online tool export was correct, but now it differs from ours. Did something change here? As an example – I just tried entering “yes” for each question which by my calculation should give a score of 10, however the tool now shows a score of 15 (always giving a score of 1 for a yes answer).
 >> This is due to the allowance for unanswered responses.
>> Fixed

PANAS: note that there is still the same issue as discussed below (scoring shows up in the tool export as 0 to 4 instead of 1 to 5). Also – there is currently only one average score for PANAS, but there should be one for negative and one for positive.

 

PACES: same issue with score as PANAS – likert scale responses should be 1 to 5 instead of 0 to 4

 

General for “avg” scores:

I don’t think I responded to your question from below:

>> We can change the summary scores to simply be "Total" and "PercentAnswered." The total score would actually then be the average score. If percent answered is 100 then this score is the same as if we summed the responses. We also need to decide what to do about questionnaires with more than 20% missing. Do I have the code submit a total score of -99 and a percent answered score? Or do I always provide an average score and have the end user decide whether to use a score based on the percent answered value?

I agree with simply showing “total” (which is the average) and “percentAnswered”. If there is more than 20% missing can we just leave the total score blank? If that is an issue, then lets go with -99
 

Ramzi:

Have you cross-checked the CESAM scores (online tool versus our spreadsheet)? I don’t remember talking to you about this one.
I just noticed in the export that it includes the demographic responses. I don’t recall noticing this before. Can you do some trials with this to see how the output looks?
 

To follow-up regarding CESAM and demographic data exports.


Demographic: in the output file the order of the responses does not match the order found in the questionnaire. Can you this be changed?

Also – to discuss – we are currently inputing the data from paper copies using codes (see attached). We will need to change one or the other so that we can just do a copy-paste from the tool export into our sheet. We can either switch over to full answers in our data entry, or switch the tool to export number codes for some of the questions. What are your thoughts on this? See attached spreadsheet.

 

CESAM: the scoring is not matching ours (sometimes it should be a score of 1, but it gives 2 for example), so the total scores are different than ours. Questions where Ramzi noticed a discrepancy: 6 to 9, 17 to 19.

Also – some of the subquestions were left blank when there should have been a response (for example: 6.1), or if there was no response (because the previous question was answered “no”), the output file shows “0”.

 

We can always meet about any of this in a call if necessary to discuss.