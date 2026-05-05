var title = "WEMWBS"
var shortTitle = "WEMWBS"
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  
  elements: [
    {
      type: "matrix",
      name: "wemwbs",
      title: "Les affirmation ci-dessous concernent vos sensations et vos pensées. Cochez la case qui correspond le mieux à votre vécu dans les deux dernières semaines.",
      alternateRows: true,
      isAllRowRequired: 'Suggested', // Required/Not-Required/Suggested
      rows: [
        {value: 'wemwbs001', text: 'Je me suis senti(e) optimiste quant à l\'avenir'},
        {value: 'wemwbs002', text: 'Je me suis senti(e) utile'},
        {value: 'wemwbs003', text: 'Je suis senti(e) détendu(e)'},
        {value: 'wemwbs004', text: 'Je me suis senti(e) intéressé(e) par les autres'},
        {value: 'wemwbs005', text: 'J\'ai eu de l\'énergie à dépenser'},
        {value: 'wemwbs006', text: 'J\'ai bien résolu les problèmes auxquels j\'ai été confronté'},
        {value: 'wemwbs007', text: 'Ma pensée était claire'},
        {value: 'wemwbs008', text: 'J\'ai eu bonne image de moi'},
        {value: 'wemwbs009', text: 'Je me suis senti(e) proche des autres'},
        {value: 'wemwbs010', text: 'Je me suis senti(e) confiant(e)'},
        {value: 'wemwbs011', text: 'J\'ai été capable de prendre mes propres décisions'},
        {value: 'wemwbs012', text: 'Je me suis senti(e) aimé(e)'},
        {value: 'wemwbs013', text: 'Je me suis senti(e) intéressé(e) par de nouvelles choses'},
        {value: 'wemwbs014', text: 'Je me suis senti(e) joyeux(se)'},
      ],
      columns: [
        { value: 1, text: 'Jamais' }, 
        { value: 2, text: 'Rarement' },
        { value: 3, text: 'Parfois' },
        { value: 4, text: 'Souvent' }, 
        { value: 5, text: 'Tout le temps'}
      ],    
    },
  ],
}
 

var FR_wemwbs = {}
FR_wemwbs.title = title,
FR_wemwbs.shortTitle = shortTitle,
FR_wemwbs.survey_JSON = survey_JSON
FR_wemwbs.description = ""
FR_wemwbs.QuestionnaireType = 'matrix'
FR_wemwbs.references = "references"
FR_wemwbs.notes = ''
