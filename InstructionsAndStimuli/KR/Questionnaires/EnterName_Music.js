var title = "이름을 입력하세요"
var shortTitle = 'FirstName'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "aboveHeader",
   progressBarType: "pages",
   progressBarShowPageNumbers: true,
   progressBarShowPageTitles: true,
   showCompletedPage: false,
   pages: 
   [
    {
      name: "Name",
      title: "이름과 이메일",
      elements: [
        {
          type: 'comment',
          title: '이름과 성의 이니셜을 입력하세요.',
          name: 'Name',// Keep this as Name (in English) it is used later to find the participant response
          required: true,
          textbox_rows: 1,
       
        },
        {
          name: "email",
          type: "text",
          title: "이메일 주소를 입력해주세요.",
          inputType: "email",
          placeholder: "joe@example.com",
          isRequired: false,
          autocomplete: "email"
  }, 
      ]
    }
]
}

var KR_EnterName_Music = {}
KR_EnterName_Music.title = title;
KR_EnterName_Music.survey_JSON = json;
KR_EnterName_Music.shortTitle = "First Name"
KR_EnterName_Music.QuestionnaireType = 'FirstName'