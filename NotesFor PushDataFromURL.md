# Push data to the JATOS database from a URL, or at least another source

The idea is to collect data from a manner that is not jsPsych and have that data be pushed to JATOS.
The other method may be the SDAPS tool where a paper copy is scanned, converted to CSV/JSON and the result pushed.

## What is required on each questionnaire?
- worker_id
- batch_id
- Date will be take from the picture scan time.
- questionnaire name
- component id (This may be derived from the questionnaire name)


## Need to know from the database point of view
- worker_id
- batch_id
- StudyResult
    - If there are multiple paper scans for a time point, then they should all be entered in the same studyResult.
    - Add a function that first looks to see if there is a studyResult within 24 hours of the current result, if yes do not add a new studyResult.
- ComponentResult
    - New ID
    - the component id (the questionnaire component)
    - studyResult_id
    - data
    