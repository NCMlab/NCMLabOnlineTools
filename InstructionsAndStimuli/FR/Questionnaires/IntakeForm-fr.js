
var title = "Questionnaire démographique"
var shortTitle = 'Music Intake'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "aboveHeader",
   progressBarType: "pages",
   progressBarShowPageNumbers: true,
   progressBarShowPageTitles: true,
   showCompletedPage: false,
   pages: [
     {
      
      name: "Information démographique",
      title: "Information démographique",
       elements: [
        {
          type: 'dropdown',
          title: "Sexe", 
          name: 'Sexe', 
          choices: [
                      'Homme',
                      'Femme',
              ],
          showOtherItem: true,
          required: true,
        },
        {
          name: "Hauteur",
          type: "text",
          title: "Saisissez votre taille en pouces ou en centimètres",
          inputType: "number",
          min: 0,
          max: 300,
          defaultValue: 0,
          isRequired: true
        },
        {
          type: 'dropdown',
          title: "Quelles unités avez-vous utilisées pour la hauteur ?", 
          name: 'HeightUnits', 
          choices: [
                      'Pouces',
                      'Centimètres',
              ],
          showOtherItem: false,
          required: true,
        },
        {
          name: "Poids",
          type: "text",
          title: "Saisissez votre poids en livres ou en kilogrammes",
          inputType: "number",
          min: 0,
          max: 1000,
          defaultValue: 0,
          isRequired: true
        },
        {
          type: 'dropdown',
          title: "Quelles unités avez-vous utilisées pour le poids ?", 
          name: 'HeightUnits', 
          choices: [
                      'Livres',
                      'Kilogrammes',
              ],
          showOtherItem: false,
          required: true,
        },
        {
          type: 'dropdown',
          title: "Quel est le niveau d'études le plus élevé que vous ayez complété ?", 
          name: 'Edu', 
          choices: [
                      'Aucune éducation formelle',
                      'Diplôme d’études secondaires ou équivalent',
                      'Collège ou école de métiers',
                      'Baccalauréat',
                      'Maîtrise',
                      'Doctorat'
              ],
          showOtherItem: true,
          required: true,
        },
        {
          type: 'dropdown',
          title: "Quelle est votre statut d'emploi ?", 
          name: 'Employ', 
          choices: [
                      'Employé à temps plein',
                      'Employé à temps partiel',
                      'Retraité',
                      'Sans emploi'
              ],
          showOtherItem: true,
          required: true,
        },
        {
          type: 'comment',
          title: 'Quel type de travail occupez-vous (ou occupiez-vous avant de prendre votre retraite) ?',
          name: 'WorkType',
          rows: 2,
          required: true,
          autoGrow: true
        },          
        {
          type: 'dropdown',
          title: "Vivez-vous seul ou avec d'autres personnes ?", 
          name: 'Living', 
          choices: [
                  'Seul(e)',
                  'Avec le conjoint / partenaire',
                  'Avec des membres de la famille',
                  'Avec des soignants',
                  'Dans un centre résidentiel assisté'
              ],
          showOtherItem: true,
          required: true,
        },
        {
          type: 'text',
          title: 'Quelle est votre langue principale ?',
          name: 'PrimaryLanguage',
          required: true,
        },
        {
          name: "LanguageProblem",
          type: "dropdown",
          title: "Avez-vous des difficultés linguistiques ou de communication ?",
          choices: ["Oui", "Non"]
        }, 
        {
          name: "LanguageProblemDescription",
          type: "comment",
          title: "Si oui, veuillez préciser :",
          visibleIf: "{LanguageProblem} == Oui",
          maxLength: 500
        },
        {
          type: "tagbox",
          isRequired: true,
          choices: [
              'Européen (ex: blanc)',
              'Asiatique (ex: Chinois, Japonais, Coréen, Asiatique du Sud-Est)',
              'Indien de l’Est, Pakistanais',
              'Afro-américain/Noir/Caribéen',
              'Hispanique',
              'Moyen-Orient',
              'Premières nations, Métis, Inuis',
              ],
          name: 'Ethnicity',
          title: "Quelle est votre origine ethnique (vous pouvez sélectionner plus d'une origine) ?",
          "description": "Veuillez sélectionner tous les éléments qui s'appliquent."
        },
        {
          type: 'dropdown',
          title: 'Quel est votre état civil ?',
          choices: 
          [   
              'Célibataire',
              'Marié(e)',
              'Divorcé(e)',
              'Veuf(ve)'
          ],
          name: 'marital',
          showOtherItem: true,                    
          required: true,
        },
        {
            type: 'dropdown',
            title: 'Laquelle des affirmations suivantes décrit le mieux la mesure dans laquelle vos besoins sont actuellement rencontrés ?',
            choices: 
            [
                "Les besoins en nourriture, logement, vêtements et soins médicaux sont satisfaits - vous pouvez vous permettre des luxes/il reste de l'argent à la fin du mois",
                "Les besoins en nourriture, logement, vêtements et soins médicaux sont satisfaits - vous ne pouvez pas vous permettre de luxe",
                "L'un des besoins fondamentaux (nourriture, logement, vêtements ou soins médicaux) n'est pas satisfait",
                "Deux ou plusieurs des besoins fondamentaux ne sont pas satisfaits",
                "Je ne sais pas",
            ],
            name: 'NeedsCurrently',
            required: true,
          },
          {
            type: 'dropdown',
            title: 'Laquelle des affirmations suivantes décrit le mieux la mesure dans laquelle vos besoins ont été satisfaits pendant la majeure partie de votre vie d’adulte ?',
            choices: 
            [
                "Les besoins en nourriture, logement, vêtements et soins médicaux sont satisfaits - vous pouvez vous permettre des luxes",
                "Les besoins en nourriture, logement, vêtements et soins médicaux sont satisfaits - vous ne pouvez pas vous permettre de luxe",
                "L'un des besoins fondamentaux (nourriture, logement, vêtements ou soins médicaux) n'est pas satisfait",
                "Deux ou plusieurs des besoins fondamentaux ne sont pas satisfaits",
                "Je ne sais pas",
            ],
            name: 'NeedsCurrently',
            required: true,
          }
       ]
     },
     {
       name: "Information médicale",
       title: "Information médicale",
       
       elements: [
        {
          type: 'dropdown',
          name: 'CognDeclineDiagnosis',
          title: 'Avez-vous reçu un diagnostic de démence ou de déclin cognitif ?',
          choices: 
          [
              "Oui",
              "Non",
              "Pas certain(e)"
          ],
          required: true,
          //add_other_option: true,                    
          //other_option_text: 'Oui, depuis combien de temps avez-vous été diagnostiqué ?',
      },
      {
        type: 'comment',
        title: 'Si oui, depuis combien de temps avez-vous été diagnostiqué ?',
        name: 'DementiaTime',
        visibleIf: "{CognDeclineDiagnosis} == Oui",
        required: false,
        textbox_rows: 3,
      },
      {
        type: 'comment',
        title: 'Si oui, quel est le type de démence (ou de déclin cognitif), s’il est connu ?',
        name: 'DementiaType',
        visibleIf: "{CognDeclineDiagnosis} == Oui",
        required: false,
        textbox_rows: 3,
      },
      {
          type: 'dropdown',
          title: 'Avez-vous une perte d’audition ?',
          choices: 
          [
              "Oui",
              "Non",
              "Pas certain(e)"
          ],
          name: 'HearingLoss',
          required: true,
          //add_other_option: true,                    
          //other_option_text: 'Oui, quel est le type de perte auditive dont vous souffrez ?',
      },
      {
        type: 'dropdown',
        title: 'Quel est le type de perte auditive dont vous souffrez ?',
        choices: 
        [
            "Bilatéral",
            "Unilatéral",
            "Pas certain(e)"
        ],
        name: 'HearingLossType',
        visibleIf: "{HearingLoss} == Oui",
        required: false,
        //add_other_option: true,                    
        //other_option_text: 'Oui, quel est le type de perte auditive dont vous souffrez ?',
    },
    {
      type: 'dropdown',
      title: 'Quel est votre niveau de perte auditive ?',
      choices: 
      [
          "Léger",
          "Moderéré",
          "Sévère",
          "Pas certain(e)"
      ],
      visibleIf: "{HearingLoss} == Oui",
      name: 'HearingLossLevel',
      required: false,
      //add_other_option: true,                    
      //other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
      type: 'dropdown',
      title: 'Avez-vous d’autres problèmes de santé ?',
      choices: 
      [
          "Oui",
          "Non"
      ],
      name: 'OtherHealthIssues',
      required: true,
    },
    {
      type: 'comment',
      title: 'Si oui, veuillez expliquer',
      name: 'OtherHealthIssues',
      visibleIf: "{OtherHealthIssues} == Oui",
      required: false,
      textbox_rows: 3,
    },
       ]
     },
     {
       name: "Habitudes",
       title: "Habitudes",
       
       elements: [
        {
          type: 'dropdown',
          title: 'Combien de jours par semaine faites-vous de l’exercice ?',
          choices: 
          [
              "0", "1","2","3","4","5","6","7"
          ],
          name: 'ExerciseFrequency',
          required: true,
        },
        {
          type: 'dropdown',
          title: 'Avez-vous fait de l’exercice au cours des dernières 24 heures ?',
          choices: 
          [
            "Oui",
            "Non"
          ],
          name: 'Exercise24',
          required: true,
        },
        {
          type: 'dropdown',
          title: 'Fumez-vous ou avez-vous fumé dans le passé ?',
          choices: 
          [
            "Fume actuellement",
              "Il y a plus d'un an que je ne fume plus",
              "Jamais",
              "Inconnu"
          ],
          name: 'Smoke',
          required: true,
        },
        {
          type: 'dropdown',
          title: 'En quelle année avez-vous commencé à fumer ?',
          visibleIf: "{Smoke} == 'Fume actuellement' or {Smoke} == 'Il y a plus d'un an que je ne fume plus'",
          choicesMin: 1920,
          choicesMax: 2025,
          choicesStep:1,
          name: 'SmokeStart',
          required: false,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'En quelle année avez-vous arrêté de fumer ?',
          visibleIf: "{Smoke} == 'Il y a plus d'un an que je ne fume plus'",
          choicesMin: 1920,
          choicesMax: 2025,
          choicesStep:1,
          name: 'SmokeQuit',
          required: false,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'Environ combien de paquets par jour ?',
          visibleIf: "{Smoke} == 'Fume actuellement' or {Smoke} == 'Il y a plus d'un an que je ne fume plus'",
          choices: ["0","0.5","1","2","3","4","5","6",">6"],
          name: 'SmokePacksPerDay',
          required: false,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'Consommation d’alcool',
          choices: 
          [
              "Aucune",
              "Moins de 2 boissons par jour",
              "2 à 4 boissons par jour",
              "Plus de 4 boissons par jour"
          ],
          name: 'Alcohol',
          required: true,
        },
      
  
       ]
     },
     {
      name: "Expérience musicale",
      title: "Expérience musicale",
      
      elements: [
          {
            type: 'dropdown',
            title: 'Avez-vous déjà participé à des cours de musique et de mouvement ?',
            choices: 
            [
              "Oui",
              "Non",
            ],
            name: 'MusicMovement',
            required: true,
          },
          {
            type: 'comment',
            title: 'Veuillez décrire votre expérience antérieure (quel type de cours et pendant combien de temps) :',
            name: 'MusicExperience',
            visibleIf: "{MusicMovement} == Oui",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Avez-vous déjà participé à des cours de musique en groupe ?',
            choices: 
            [
              "Oui",
              "Non",
            ],
            name: 'GroupMusic',
            required: true,
          },
          {
            type: 'comment',
            title: 'Veuillez décrire votre expérience antérieure (quel type de cours et pendant combien de temps) :',
            name: 'GroupMusicExperience',
            visibleIf: "{GroupMusic} == Oui",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Avez-vous déjà fait partie d’une chorale ?',
            choices: 
            [
              "Oui",
              "Non",
            ],
            name: 'Choir',
            required: true,
          },
          {
            type: 'comment',
            title: 'Veuillez décrire votre expérience antérieure (quel type de choral et pendant combien de temps):',
            name: 'ChoirExperience',
            visibleIf: "{Choir} == Oui",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Avez-vous une autre expérience musicale (c’est-à-dire avez-vous joué un instrument de musique régulièrement à un moment quelconque de votre vie) ',
            choices: 
            [
              "Oui",
              "Non",
            ],
            name: 'OtherMusic',
            required: true,
          },
          {
            type: 'comment',
            title: 'Quel(s) instrument(s) ?',
            name: 'WhichInstrument',
            visibleIf: "{OtherMusic} == Oui",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'comment',
            title: 'À quel âge avez-vous commencé ?',
            name: 'AgeStartInstrument',
            visibleIf: "{OtherMusic} == Oui",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'comment',
            title: 'Pendant combien de temps avez-vous joué de cet instrument (années) ?',
            name: 'YearsPlayInstrument',
            visibleIf: "{OtherMusic} == Oui",
            required: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Y jouez-vous encore ?',
            choices: 
            [
              "Oui",
              "Non",
            ],
            visibleIf: "{OtherMusic} == Oui",
            name: 'StillPlayInstrument',
            required: true,
          },
      ]
    },
    {
      name: "Commentaires supplémentaires",
      title: "Commentaires supplémentaires",
      
      elements: [
        {
          type: 'comment',
          title: 'Avez-vous des commentaires ou des informations supplémentaires qui pourraient être utiles à cette étude et/ou aux cours de musique ?',
          name: 'AdditionalCOmments',
          required: false,
          textbox_rows: 5,
        }
      ]
    }
   ]
 }


var EN_IntakeForm_MusicJSON = {}
EN_IntakeForm_MusicJSON.title = title;
EN_IntakeForm_MusicJSON.survey_JSON = json;
EN_IntakeForm_MusicJSON.shortTitle = shortTitle
EN_IntakeForm_MusicJSON.QuestionnaireType = 'Varied'
EN_IntakeForm_MusicJSON.Instructions01 = [
    {
        'page': '<p class="Instructions">Instructions are written here.'
    }
]
