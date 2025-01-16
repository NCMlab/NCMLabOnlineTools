var title = "EQ-5D"
var shortTitle = "EQ-5D"
const survey_JSON = {

  showQuestionNumbers: false,
  showCompletedPage: false,
  pages: [{
    elements: [
    {
        type: "html",
        name: "introduction",
        html: "Pour chaque rubrique, veuillez cocher UNE case, celle qui décrit le mieux votre santé AUJOURD'HUI"
       },
    {
        type: 'radiogroup',
        title: 'MOBILITÉ',
        name: 'mobilité',
        choices:
        [
            { value: 1, text: 'Je n’ai aucun problème pour me déplacer à pied'}, 
            { value: 2, text: 'J’ai des problèmes légers pour me déplacer à pied'},
            { value: 3, text: 'J’ai des problèmes modérés pour me déplacer à pied'},
            { value: 4, text: 'J’ai des problèmes sévères pour me déplacer à pied'}, 
            { value: 5, text: 'Je suis incapable de me déplacer à pied'}
        ],
    },
    {
        type: 'radiogroup',
        title: 'AUTONOMIE DE LA PERSONNE',
        name: 'autonomiedelapersonne',
        choices: 
        [
            { value: 1, text: 'Je n’ai aucun problème pour me laver ou m’habiller tout(e) seul(e)' },
            { value: 2, text: 'J’ai des problèmes légers pour me laver ou m’habiller tout(e) seul(e)' },
            { value: 3, text: 'J’ai des problèmes modérés pour me laver ou m’habiller tout(e) seul(e)' },
            { value: 4, text: 'J’ai des problèmes sévères pour me laver ou m’habiller tout(e) seul(e)' },
            { value: 5, text: 'Je suis incapable de me laver ou de m’habiller tout(e) seul(e)' }
        ],
    },
    {
        type: 'radiogroup',
        title: 'ACTIVITÉS COURANTES (exemples: travail, études, travaux domestiques, activités familiales ou loisirs)',
        name: 'activitéscourantes',
        choices:     
        [   
            { value: 1, text: 'Je n’ai aucun problème pour accomplir mes activités courantes' },
            { value: 2, text: 'J’ai des problèmes légers pour accomplir mes activités courantes' },
            { value: 3, text: 'J’ai des problèmes modérés pour accomplir mes activités courantes' },
            { value: 4, text: 'J’ai des problèmes sévères pour accomplir mes activités courantes' }, 
            { value: 5, text: 'Je suis incapable d’accomplir mes activités courantes' }, 
        ],
    },
    {
        type: 'radiogroup',
        title: 'DOULEURS / INCONFORT',
        name: 'douleursinconfort',
        choices: 
        [
            { value: 1, text: 'Je n’ai ni douleur ni inconfort' }, 
            { value: 2, text: 'J’ai des douleurs ou un inconfort léger(ères)' },
            { value: 3, text: 'J’ai des douleurs ou un inconfort modéré(es)' },
            { value: 4, text: 'J’ai des douleurs ou un inconfort sévère(s)' }, 
            { value: 5, text: 'J’ai des douleurs ou un inconfort extrême(s)' },
        ],
    },
    {
        type: 'radiogroup',
        title: 'ANXIÉTÉ / DÉPRESSION',
        name: 'anxiétédépression',
        choices: 
        [
            { value: 1, text: 'Je ne suis ni anxieux(se) ni déprimé(e)' },
            { value: 2, text: 'Je suis légèrement anxieux(se) ou déprimé(e)' },
            { value: 3, text: 'Je suis modérément anxieux(se) ou déprimé(e)' },
            { value: 4, text: 'Je suis sévèrement anxieux(se) ou déprimé(e)' }, 
            { value: 5, text: 'Je suis extrêmement anxieux(se) ou déprimé(e)' },
        ],
    }

    ],
    }]
  };


var EN_eq5dJSON = {}
EN_eq5dJSON.title = title,
EN_eq5dJSON.shortTitle = shortTitle,
EN_eq5dJSON.survey_JSON = survey_JSON
EN_eq5dJSON.description = ""
EN_eq5dJSON.QuestionnaireType = 'radiogroup'
EN_eq5dJSON.references = "references"
EN_eq5dJSON.notes = ''

add('EN_eq5dJSON', function(){ Questionnaire = EN_eq5dJSON});