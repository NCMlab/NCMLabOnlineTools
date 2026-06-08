var title = "Questionnaire démographique";
var shortTitle = 'SocioDem';

// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "aboveHeader",
  progressBarType: "pages",
  name: 'adlpi',
  progressBarShowPageNumbers: true,
  progressBarShowPageTitles: true,
  showCompletedPage: false,
  showTitle: true,
  title: "JASON JASON",
  pages: [
    {
      name: "Information démographique",
      title: "Information démographique",
      elements: [
        {
          type: "description",
          text: [
            {
              text: "Instructions: Veuillez répondre aux questions suivantes en cochant ou en encerclant la réponse qui correspond le mieux à votre situation actuelle."
            }
          ]
        },
        {
          name: "socio01",
          type: "input",
          title: "Quel âge avez-vous?",
          units: "ans",
          inputType: "number",
          defaultValue: '',
          isRequired: true
        },
        {
          name: "socio02",
          type: "input",
          title: "Où êtes-vous né (pays) ?",
          inputType: "text",
          defaultValue: '',
          isRequired: true
        },
        {
          type: "dropdown",
          name: "socio003",
          title: "Quelle est votre identité de genre?",
          choices: [
            { value: 1, text: "Femme" },
            { value: 2, text: "Homme" },
            { value: 3, text: "Non-binaire" },
            { value: 4, text: "Transsexuel" },
            { value: 5, text: "Je ne souhaite pas répondre" },
            { value: 6, text: "Pas de réponse" }
          ],
          isRequired: true,
          showClearButton: true,
          showOtherItem: true
        },
        {
          name: "socio04",
          type: "input",
          title: "Quelle est votre langue maternelle ?",
          inputType: "text",
          defaultValue: '',
          isRequired: true
        },
        {
          type: "dropdown",
          name: "socio005",
          title: "Parlez-vous une ou plusieurs autres langues que votre langue maternelle ?",
          choices: [
            { value: 1, text: "OUI" },
            { value: 2, text: "NON" }
          ],
          isRequired: true,
          showClearButton: true
        },
        {
          name: "socio05p1",
          type: "input",
          title: "Lesquelles?",
          inputType: "text",
          defaultValue: '',
          visibleIf: "{socio005} == OUI",
          isRequired: true
        },
        {
          type: "dropdown",
          name: "socio006",
          title: "Comment évalueriez-vous votre compréhension du français ?",
          choices: [
            { value: 1, text: "Très bonne" },
            { value: 2, text: "Bonne" },
            { value: 3, text: "Moyenne" },
            { value: 4, text: "Faible" },
            { value: 5, text: "Nulle" }
          ],
          isRequired: true,
          showClearButton: true
        },
        {
          type: "dropdown",
          name: "socio007",
          title: "Quelle est votre latéralité ?",
          choices: [
            { value: 1, text: "Droitier(ère)" },
            { value: 2, text: "Gaucher(ère)" },
            { value: 3, text: "Ambidextre" }
          ],
          isRequired: true,
          showClearButton: true
        },
        {
          type: "dropdown",
          name: "socio008",
          title: "Quel est le phénotype racial (origine ethnique) du participant (cochez toutes les cases qui s'appliquent) ?",
          choices: [
            { value: 1, text: "Caucasien / Blanc" },
            { value: 2, text: "Africain / Noir" },
            { value: 3, text: "Asiatique" },
            { value: 4, text: "Autochtone" },
            { value: 5, text: "Arabe" },
            { value: 6, text: "Hispanique" },
            { value: 7, text: "Je ne souhaite pas répondre" },
            { value: 8, text: "Pas de réponse" }
          ],
          showOtherItem: true,
          isRequired: true,
          showClearButton: true
        },
        {
          type: "dropdown",
          name: "socio009",
          title: "Niveau d'études formelles le plus élevé atteint (dans un établissement d'enseignement) :",
          choices: [
            { value: 1, text: "N'a jamais fréquenté l'école (ou n'a pas terminé l'école primaire)" },
            { value: 2, text: "École primaire (5 à 6 ans)" },
            { value: 3, text: "École secondaire (collège et lycée – 11 ans)" },
            { value: 4, text: "École technique" },
            { value: 5, text: "Collège général et professionnel (CEGEP, plus de 12 ans)" },
            { value: 6, text: "Université" }
          ],
          isRequired: true,
          showClearButton: true
        },
        {
          name: "socio010",
          type: "input",
          title: "Quel est le nombre total d'années de scolarité?",
          inputType: "number",
          units: "années",
          defaultValue: '',
          isRequired: true
        },
        {
          name: "socio010p1",
          type: "textarea",
          title: "Commentaires:"
        },
        {
          type: "dropdown",
          name: "socio011",
          title: "Quel est votre état civil actuel ?",
          choices: [
            { value: 1, text: "Célibataire / Sans conjoint" },
            { value: 2, text: "Marié(e)" },
            { value: 3, text: "Conjoint / Conjoint de fait" },
            { value: 4, text: "Veuf / veuve" },
            { value: 5, text: "Séparé(e)" },
            { value: 6, text: "Divorcé(e)" },
            { value: 7, text: "Je ne souhaite pas répondre" },
            { value: 8, text: "Pas de réponse" }
          ],
          isRequired: true,
          showClearButton: true
        },
        {
          type: "dropdown",
          name: "socio012",
          title: "Où habitez-vous ?",
          choices: [
            { value: 1, text: "Maison ou appartement (y compris Condo)" },
            { value: 2, text: "Chambre dans une pension" },
            { value: 3, text: "Résidence pour personnes autonomes" },
            { value: 4, text: "Résidence pour personnes semi-autonomes" },
            { value: 5, text: "Résidence pour personnes non autonomes, établissement de soins infirmiers spécialisés, centre d'hébergement et de soins de longue durée (CHSLD) ou équivalent" }
          ],
          showOtherItem: true,
          isRequired: true,
          showClearButton: true
        },
        {
          type: "input",
          name: "socio013",
          title: "Quel est votre code postal?",
          inputType: "text",
          defaultValue: '',
          isRequired: true
        },
        {
          type: "dropdown",
          name: "socio014",
          title: "Quelle est votre situation de cohabitation ? ",
          choices: [
            { value: 1, text: "Seul" },
            { value: 2, text: "Conjoint/partenaire" },
            { value: 3, text: "Enfants/petits-enfants" },
            { value: 4, text: "Ami(s)" },
            { value: 5, text: "Autres membres de la famille" },
            { value: 6, text: "Je ne souhaite pas répondre" },
            { value: 7, text: "Pas de réponse" }
          ],
          showOtherItem: true,
          isRequired: true,
          showClearButton: true
        },
        {
          type: "dropdown",
          name: "socio015",
          title: "Quel est actuellement le revenu annuel de votre famille ? Veuillez inclure toutes les sources de revenus.",
          choices: [
            { value: 1, text: "Moins de 20,000$" },
            { value: 2, text: "De 20,000$ à moins de 40,000$" },
            { value: 3, text: "De 40,000$ à moins de 60,000$" },
            { value: 4, text: "De 60,000$ à moins de 80,000$" },
            { value: 5, text: "80,000$ ou plus" },
            { value: 6, text: "Je ne souhaite pas répondre" },
            { value: 7, text: "Pas de réponse" }
          ],
          isRequired: true,
          showClearButton: true
        },
        {
          type: "dropdown",
          name: "socio016",
          title: "Avez-vous déjà participé à un projet de recherche?",
          choices: [
            { value: 1, text: "OUI" },
            { value: 2, text: "NON" }
          ],
          isRequired: true,
          showClearButton: true
        },
        {
          type: "input",
          name: "socio016p1",
          title: "Titre du projet",
          inputType: "text",
          defaultValue: '',
          isRequired: true,
          visibleIf: "{socio016} == OUI"
        },
        {
          type: "input",
          name: "socio016p2",
          title: "Lieu",
          inputType: "text",
          defaultValue: '',
          isRequired: true,
          visibleIf: "{socio016} == OUI"
        },
        {
          type: "input",
          name: "socio016p3",
          title: "Date(s)",
          inputType: "text",
          defaultValue: '',
          isRequired: true,
          visibleIf: "{socio016} == OUI"
        },
        {
          type: "dropdown",
          name: "socio017",
          title: "Dans le cadre de ce(s) projet(s), avez-vous déjà passé une évaluation de la mémoire?",
          choices: [
            { value: 1, text: "OUI" },
            { value: 2, text: "NON" }
          ],
          isRequired: true,
          showClearButton: true
        },
        {
          type: "dropdown",
          name: "socio018",
          title: "Participez-vous présentement à un projet de recherche?",
          choices: [
            { value: 1, text: "OUI" },
            { value: 2, text: "NON" }
          ],
          isRequired: true,
          showClearButton: true
        },
        {
          type: "input",
          name: "socio018p1",
          title: "Titre du projet",
          inputType: "text",
          defaultValue: '',
          isRequired: true,
          visibleIf: "{socio018} == OUI"
        },
        {
          type: "input",
          name: "socio018p2",
          title: "Lieu",
          inputType: "text",
          defaultValue: '',
          isRequired: true,
          visibleIf: "{socio018} == OUI"
        },
        {
          type: "input",
          name: "socio018p3",
          title: "Date de debut",
          inputType: "text",
          defaultValue: '',
          isRequired: true,
          visibleIf: "{socio018} == OUI"
        },
        {
          type: "input",
          name: "socio018p4",
          title: "Date de fin (si connue)",
          inputType: "text",
          defaultValue: '',
          isRequired: true,
          visibleIf: "{socio018} == OUI"
        },
        {
          type: "dropdown",
          name: "socio019",
          title: "Avez-vous déjà effectué une évaluation de la mémoire dans un autre projet de recherche que ceux mentionnés ci-dessus?",
          choices: [
            { value: 1, text: "OUI" },
            { value: 2, text: "NON" }
          ],
          isRequired: true,
          showClearButton: true
        }
      ]
    }
  ]
};

var FR_Sociodemographic = {};
FR_Sociodemographic.title = title;
FR_Sociodemographic.survey_JSON = json;
FR_Sociodemographic.shortTitle = shortTitle;
FR_Sociodemographic.QuestionnaireType = 'form';