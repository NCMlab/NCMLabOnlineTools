var title = "Questionnaire auto-admnisitré du centre d'excellence sur la longévité"
var shortTitle = "CESAM"
const survey_JSON = {
  showQuestionNumbers: false,
  showCompletedPage: false,
  pages: [{
  elements: [
    {
        type: "dropdown",
        name: "cesam001",
        title: "Avez-vous involontairement perdu du poids au cours de la dernière année ?",
        choices: [
            { value: 2, text: 'Oui' },
            { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam001p1",
        title: "Si oui, précisez si la perte de poids a été de plus de 3 kilos (plus de 6 livres) ?",
        choices: [
            "Oui",
            "Non"
        ],
        visibleIf: "{cesam001} == Oui",
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam002",
        title: "Chaque jour, combien de médicamments différents prenez-vous ?",
        choices: [
          { value: 0, text: 'Aucun' },
          { value: 0, text: '1 à 4' },
          { value: 1, text: '5 à 9' },
          { value: 2, text: '10 ou plus' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam003",
        title: "Avez-vous des problèmes de vue ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam004",
        title: "Avez-vous des problèmes d'audition ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam005",
        title: "Votre entourage vous a-t-il fait remarquer que vous aviez des problèmes de mémoire ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam006",
        title: "Recevez-vous de l'aide pour accomplir les actes de vie de tous les jours ?",
        choices: [
            "Oui",
            "Non"
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam006p1",
        title: "Si oui, précisez s'il s'agit d'un :",
        choices: [
            "Parent",
            "Amis",
            "Professionel"
        ],
        visibleIf: "{cesam006} == Oui",
        isRequired: true,
        showClearButton: true
      },

      {
        type: "dropdown",
        name: "cesam007",
        title: "Avez-vous besoin d'aide pour vos soins d'apparence corporelle ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam008",
        title: "Avez-vous besoin d'aide pour faire votre toilette ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam009",
        title: "Avez-vous besoin d'aide pour vous habiller ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam010",
        title: "Avez-vous besoin d'aide pour vous déplacer (canne ou autre) ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam011",
        title: "Avez-vous besoin d'aide pour manger ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam012",
        title: "Avez vous besoin d'aide pour utiliser le téléphone ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam013",
        title: "Avez-vous besoin d'aide pour prendre les transports en commun ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam014",
        title: "Avez-vous besoin d'aide pour prendre vos médicamemts ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam015",
        title: "Avez-vous besoin d'aide pour gérer votre argent ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam016",
        title: "Perdez-vous vos urines et/ou selles ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam017",
        title: "Aujourd'hui, vous vous sentez :",
        choices: [
            { value: 2, text: "Heureux" },
            { value: 1, text: "Malheureux" },
            { value: 0, text: "Ni l'un ni l'autre" },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam018",
        title: "Vous sentez-vous plein d'énergie ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam019",
        title: "Avez-vous pratiqué une activité physique (marche, jardinagem vélo, etc...) au moins pendant 1 heure par semaine au cours du dernier mois ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam020",
        title: "Avez-vous fait au moins une chute au cours des 12 derniers mois ?",
        choices: [
          { value: 1, text: 'Oui' },
          { value: 0, text: 'Non' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam021",
        title: "Avez-vous reçu de l'aide pour remplir ce questionnaire ?",
        choices: [
          { value: 1, text: 'Yes' },
          { value: 0, text: 'No' },
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam021p1",
        title: "Si oui, qui vous a aidé ?",
        choices: [
            "Famille",
            "Amis",
            "Professionel"
        ],
        visibleIf: "{cesam021} == Oui",
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam021p2",
        title: "Quel membre de votre famille vous a aidé ?",
        choices: [
            "Époux.se / Partenaire",
            "Enfant",
            "Autre"
        ],
        visibleIf: "{cesam021p1} == Famille",
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam022",
        title: "Les réponses que vous venez de donner sont-elles pour vous-même ou une autre personne ?",
        choices: [
            "Moi-même",
            "Autre personne"
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam023",
        title: "Êtes-vous l'aidant d'une personne malade ? ",
        choices: [
            "Oui",
            "Non"
        ],
        isRequired: true,
        showClearButton: true
      },
      {
        type: "dropdown",
        name: "cesam023p1",
        title: "De quelle maladie souffre-t-il/elle ?",
        choices: [
            "Maladie d'Alzheimer",
            "Autre"
        ],
        visibleIf: "{cesam023} == Oui",
        isRequired: true,
        showClearButton: true
      },
    ],
  }]
};


var EN_cesamJSON = {}
EN_cesamJSON.title = title,
EN_cesamJSON.shortTitle = shortTitle,
EN_cesamJSON.survey_JSON = survey_JSON
EN_cesamJSON.description = ""
EN_cesamJSON.QuestionnaireType = 'Varied'
EN_cesamJSON.references = "references"
EN_cesamJSON.notes = ''
