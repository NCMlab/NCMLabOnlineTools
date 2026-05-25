
    const Test002_json = {
  "elements": [
    {
      "type": "matrixdropdown",
      "name": "coaching_costs",
      "title": "Coaching / Year",
      "showHeader": true,
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
          "name": "cost_per_usage",
          "title": "If yes, how much do you pay on average per usage?",
          "cellType": "text",
          "inputType": "number",
          "enableIf": "{row.usage} = 'Yes'",
          "allowResize": false,
        },
                {
          "name": "frequency_per_year",
          "title": "How many times per year?",
          "cellType": "text",
          "inputType": "number",
          "enableIf": "{row.usage} = 'Yes'",
          "allowResize": false,
        },
      ],
      "rows": [
        { "text": "Do you pay for lessons, guidance or coaching?", "name":"lesson_cost", "value": 'lessons' },
        { "text": "Do you participate in clinics regarding your sport practice?","value": 'clinics' } 
         
      ],
      "transposeData": false
    },
        
      {
            type: "expression",
            name: "Cost_Coach_$Y",
            title: "Estimated yearly coaching costXXX",
            //visibleIf: "{Cost_Coach} = 1",
            //expression: "iif({Cost_Coach} = 1 && !isEmpty({Cost_Coach_$U}) && !isEmpty({Cost_Coach_UY}), {Cost_Coach_$U} * {Cost_Coach_UY}, 0)",
            expression: "iif({coaching_costs.lessons.usage} == 'Yes', {coaching_costs.lessons.cost_per_usage} * {coaching_costs.lessons.frequency_per_year}, -99)",
            displayStyle: "decimal",
            //currency: "CAD",
            precision: 2
          },
    {
            type: "expression",
            name: "Clinic_Coach_$Y",
            title: "Estimated yearly clinic costXXX",
            //visibleIf: "{Cost_Coach} = 1",
            //expression: "iif({Cost_Coach} = 1 && !isEmpty({Cost_Coach_$U}) && !isEmpty({Cost_Coach_UY}), {Cost_Coach_$U} * {Cost_Coach_UY}, 0)",
            expression: "iif({coaching_costs.clinics.usage} == 'Yes', {coaching_costs.clinics.cost_per_usage} * {coaching_costs.clinics.frequency_per_year}, -99)",
            displayStyle: "decimal",
            //currency: "CAD",
            precision: 2
          },
  ]
};
