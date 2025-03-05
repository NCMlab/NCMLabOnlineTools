var title = "WEMWBS"
var shortTitle = "WEMWBS"
const survey_JSON = {
  showQuestionNumbers: false,
  showCompletedPage: false,
  pages: [{
  elements: [
    {
        type: "html",
        name: "introduction",
        html: "Les affirmation ci-dessous concernent vos sensations et vos pensées. Cochez la case qui correspond le mieux à votre vécu dans les deux dernières semaines."
       },
    {
        type: 'radiogroup',
        title: 'Je me suis senti(e) optimiste quant à l\'avenir',
        name: 'wemwbs001',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],
    },
    {
        type: 'radiogroup',
        title: 'Je me suis senti(e) utile',
        name: 'wemwbs002',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'Je suis senti(e) détendu(e)',
        name: 'wemwbs003',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },

      {
        type: 'radiogroup',
        title: 'Je me suis senti(e) intéressé(e) par les autres',
        name: 'wemwbs004',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'J\'ai eu de l\'énergie à dépenser',
        name: 'wemwbs005',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'J\'ai bien résolu les problèmes auxquels j\'ai été confronté',
        name: 'wemwbs006',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'Ma pensée était claire',
        name: 'wemwbs007',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'J\'ai eu bonne image de moi',
        name: 'wemwbs008',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'Je me suis senti(e) proche des autres',
        name: 'wemwbs009',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'Je me suis senti(e) confiant(e)',
        name: 'wemwbs010',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },

      {
        type: 'radiogroup',
        title: 'J\'ai été capable de prendre mes propres décisions',
        name: 'wemwbs011',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'Je me suis senti(e) aimé(e)',
        name: 'wemwbs012',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'Je me suis senti(e) intéressé(e) par de nouvelles choses',
        name: 'wemwbs013',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },
      {
        type: 'radiogroup',
        title: 'Je me suis senti(e) joyeux(se)',
        name: 'wemwbs014',
        colCount: 0,
        choices:
        [
          { value: 1, text: 'Jamais' }, 
          { value: 2, text: 'Rarement' },
          { value: 3, text: 'Parfois' },
          { value: 4, text: 'Souvent' }, 
          { value: 5, text: 'Tout le temps'}
        ],    
      },

    ],
  }]
}

var EN_wemwbsJSON = {}
EN_wemwbsJSON.title = title,
EN_wemwbsJSON.shortTitle = shortTitle,
EN_wemwbsJSON.survey_JSON = survey_JSON
EN_wemwbsJSON.description = ""
EN_wemwbsJSON.QuestionnaireType = 'radiogroup'
EN_wemwbsJSON.references = "references"
EN_wemwbsJSON.notes = ''
