var title = "Index du réseau social de Berkman-Syme"
var shortTitle = ""
const survey_JSON = {
  showQuestionNumbers: "off",
  showCompletedPage: false,
  pages: [{
    elements: [

    {
        type: "html",
        name: "introduction",
        html: "Les questions suivantes portent sur vos interactions sociales. Veuillez lire les questions suivantes et sélectionner la réponse qui correspond le mieux à votre situation actuelle."
       },

      {
        type: "radiogroup",
        name: "berksyme001",
        title: "Lequel des énoncés suivants représente le mieux votre état conjugal actuel ?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ 
          { value: 0, text: "Célibataire" }, 
          { value: 1, text: "Marié.e" }, 
          { value: 2, text: "Conjoint.e fait" }, 
          { value: 3, text: "Divorcé.e" }, 
          { value: 4, text: "Veuf.ve"}, 
          { value: 5, text: "Separé.e" }, 
          { value: 6, text: "Je ne souhaite pas répondre"} 
        ],
        separateSpecialChoices: true,
        showClearButton: true
      },
      {
        type: "radiogroup",
        name: "berksyme002",
        title: "2.	Au cours des deux dernières semaines, à quelle fréquence avez-vous communiqué avec votre famille (p.ex., parent, partenaire, enfant, cousin), vos ami.e.s ou vos voisins (par exemple, appels téléphoniques, appels vidéo, messages texte, médias sociaux) ?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ 
          { value: 0, text: "Moins d'une fois par semaine" }, 
          { value: 1, text: "1 à 2 fois par semaine" }, 
          { value: 2, text: "3 à 4 par semaine" }, 
          { value: 3, text: "5 fois ou plus par semaine" }, 
          { value: 4, text: "Je ne souhaite pas répondre"}
        ],
        separateSpecialChoices: true,
        showClearButton: true
      },
      {
        type: "radiogroup",
        name: "berksyme003",
        title: "3.	Au cours des deux dernières semaines, à quelle fréquence avez-vous passé du temps en personne avec des amis, de la famille ou des proches ?",
        isRequired: true,
        showNoneItem: false,
        showOtherItem: false,
        colCount: 1,
        choices: [ 
          { value: 0, text: "Moins d'une fois par semaine" }, 
          { value: 1, text: "1 à 2 fois par semaine" }, 
          { value: 2, text: "3 à 4 par semaine" }, 
          { value: 3, text: "5 fois ou plus par semaine" }, 
          { value: 4, text: "Je ne souhaite pas répondre"}
        ],
        separateSpecialChoices: true,
        showClearButton: true
      },
      {
        type: "panel",
        name: "berksyme004_panel",
        title: "4.	Au cours des deux dernières semaines, à quelle fréquence avez-vous participé à des activités religieuses, spirituelles ou philosophiques (par exemple, des services religieux, séances de méditation, messes, groupes de prière) ?",
        elements: [
          { 
            type: "radiogroup",
            name: "berksyme004_inperson",
            title: "En personne",
            isRequired: true,
            showNoneItem: false,
            showOtherItem: false,
            colCount: 1,
            choices: [
              { value: 0, text: "Jamais" }, 
              { value: 1, text: "Une fois" }, 
              { value: 2, text: "Deux fois" }, 
              { value: 3, text: "Trois fois ou plus" },
              { value: 4, text: "Je ne souhaite pas répondre" }
            ]
          },
          { type: "radiogroup",
            name: "berksyme004_online",
            title: "En ligne",
            isRequired: true,
            showNoneItem: false,
            showOtherItem: false,
            colCount: 1,
            choices: [
              { value: 0, text: "Jamais" }, 
              { value: 1, text: "Une fois" }, 
              { value: 2, text: "Deux fois" }, 
              { value: 3, text: "Trois fois ou plus" },
              { value: 4, text: "Je ne souhaite pas répondre" }
            ]
          }
        ]
      },
      {
        type: "panel",
        name: "berksyme005_panel",
        title: "Au cours des deux dernières semaines, à quelle fréquence avez-vous participé à des événements ou activités d’un groupe auxquels vous appartenez (par exemple, groupe de loisirs ou de sport, activités communautaires, forums, clubs) ?",
        elements: [
          { 
            type: "radiogroup",
            name: "berksyme005_inperson",
            title: "En personne",
            isRequired: true,
            showNoneItem: false,
            showOtherItem: false,
            colCount: 1,
            choices: [
              { value: 0, text: "Jamais ou moins d'une fois par semaine" }, 
              { value: 1, text: "1 à 2 fois par semaine" }, 
              { value: 2, text: "3 à 4 par semaine" }, 
              { value: 3, text: "5 fois ou plus par semaine" }, 
              { value: 4, text: "Je ne souhaite pas répondre"}
            ]
          },
          { type: "radiogroup",
            name: "berksyme005_online",
            title: "En ligne",
            isRequired: true,
            showNoneItem: false,
            showOtherItem: false,
            colCount: 1,
            choices: [
              { value: 0, text: "Jamais ou moins d'une fois par semaine" }, 
              { value: 1, text: "1 à 2 fois par semaine" }, 
              { value: 2, text: "3 à 4 par semaine" }, 
              { value: 3, text: "5 fois ou plus par semaine" }, 
              { value: 4, text: "Je ne souhaite pas répondre"}
            ]
          }
        ]
      },
    ],
  }]
};


var FR_berksymeJSON = {}
FR_berksymeJSON.title = "Berkman-Syme Social Network Index",
FR_berksymeJSON.shortTitle = "Social"
FR_berksymeJSON.survey_JSON = survey_JSON
FR_berksymeJSON.description = ""
FR_berksymeJSON.QuestionnaireType = 'radiogroup'
FR_berksymeJSON.references = "references"
FR_berksymeJSON.notes = ''

