var FormTitle = 'Intake Form'
var pages = [
      [
       
        {
          type: 'multi-choice',
          prompt: 
          "<h1>Study on Aging and Memory</h1>"+
          "<p>"+
          "    Principal Investigator: Dr. Jason Steffener, Assistant Professor<br />"+
          "    Interdisciplinary School of Health Sciences, Faculty of Health Sciences<br />"+
          "    University of Ottawa, Ottawa, ON<br />"+
          "    (613) 562-5800 ext. 4314<br />"+
          "    jsteffen@uottawa.ca<br />"+
          "</p>",
          options: ['Female','Male'],
          name: 'Sex', 
          required: false,
        }, 
       
    ]
]
var EN_ConsentForm_uOttawa_Steffener = {}
EN_ConsentForm_uOttawa_Steffener.title = FormTitle
EN_ConsentForm_uOttawa_Steffener.pages = pages  
add('EN_ConsentForm_uOttawa_Steffener', function(){ IntakeFormParameters = EN_ConsentForm_uOttawa_Steffener });