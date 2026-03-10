
    const Test002_json = {
  "elements": [
    {
      "type": "matrixdropdown",
      "name": "framework-ratings",
      "title": "Please leave your feedback about JavaScript frameworks",
      "columnMinWidth": "130px",
      "columns": [
        {
          "name": "usage",
          "title": "Do you pay?",
          "cellType": "radiogroup",
          "choices": [ "Yes", "No" ],
          "defaultValue": "No"
        },
        {
          "name": "experience",
          "title": "If yes, how much $/year?",
          "choices": [
            { "text": "3-5 years", "value": 4 },
            { "text": "1-2 years", "value": 1.5 },
            { "text": "Less than a year", "value": 0.5 }
          ],
          "enableIf": "{row.usage} = 'Yes'"
        },
      ],
      "rows": [
        { "text": "Membership fee to play/practice your sport", "value": "angular" },
        { "text": "License fee to play/practice your sport (if not included in the membership fee)? (Paid to a sport governing body, league, or federation to be officially registered and eligible to participate in organized competition.)", "value": "react" },
        { "text": "Other program fees to play/practice your sport (if not included in the previous questions)", "value": "vue" }
      ],
      "transposeData": false
    }
  ]
};
