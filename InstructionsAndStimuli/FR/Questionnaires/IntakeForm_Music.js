
var title = "Questionnaire démographique"
var shortTitle = 'Music Intake'  
// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "top",
  progressBarType: "pages",
  progressBarShowPageNumbers: true,
  progressBarShowPageTitles: true,
  showCompletedPage: false,
  showTitle: true,
  pages: [
    {
      name: "Information démographique",
      title: "Information démographique",
      elements: [
        {
          name: 'dem0101_gender',
          title: "Sexe",
          type: 'dropdown',
          choices: [
            {value: 1, text:'Homme'},
            {value: 2, text:'Femme'},
          ],
          showOtherItem: true,
          otherText: 'Autre (décrire)',
          placeholder: 'Sélectionner...',
          searchEnabled: false,
          isRequired: true,
        },
        {
          name: "dem0102_age",
          title: "Âge",
          type: "input",
          inputType: "number",
          choicesMin: 0,
          choicesMax: 150,
          defaultValue: '',
          isRequired: true,
        },
        {
          name: "dem0103_height",
          title: "Saisissez votre taille en pouces ou en centimètres",
          type: "input",
          inputType: "number",
          min: 0,
          max: 300,
          defaultValue: '',
          isRequired: true
        },
        {
          name: 'dem0103p1_heightU',
          title: "Quelles unités avez-vous utilisées pour la hauteur?",
          type: 'dropdown',
          choices: [
            {value:1, text:'Pouces'},
            {value:2, text:'Centimètres'},
          ],
          showOtherItem: false,
          placeholder: 'Sélectionner...',
          isRequired: true,
        },
        {
          name: "dem0104_weight",
          title: "Saisissez votre poids en livres ou en kilogrammes",
          type: "input",
          inputType: "number",
          min: 0,
          max: 1000,
          defaultValue: '',
          placeholder: 'Sélectionner...',
          isRequired: true
        },
        {
          name: 'dem0104p1_weightU',
          title: "Quelles unités avez-vous utilisées pour le poids ?",
          type: 'dropdown',
          choices: [
            {value:1, text:'Livres'},
            {value:2, text:'Kilogrammes'},
          ],
          showOtherItem: false,
          placeholder: 'Sélectionner...',
          isRequired: true,
        },
        {
          name: 'dem0105_edu',
          title: "Quel est le niveau d'études le plus élevé que vous ayez complété ?",
          type: 'dropdown',
          choices: [
            {value:1,text:'Aucune éducation formelle'},
            {value:2,text:'Diplôme d’études secondaires ou équivalent'},
            {value:3,text:'Collège ou école de métiers'},
            {value:4,text:'Baccalauréat'},
            {value:5,text:'Maîtrise'},
            {value:6,text:'Doctorat'}
          ],
          showOtherItem: true,
          placeholder: 'Sélectionner...',
          otherText: 'Autre (décrire)',
          isRequired: true,
        },
        {
          name: 'dem0106_employ',
          title: "Quelle est votre statut d'emploi ?",
          type: 'dropdown',
          choices: [
            {value: 1, text: 'Employé à temps plein'},
            {value: 2, text: 'Employé à temps partiel'},
            {value: 3, text: 'Retraité'},
            {value: 4, text: 'Sans emploi'}
          ],
          showOtherItem: true,
          placeholder: 'Sélectionner...',
          otherText: 'Autre (décrire)',
          isRequired: true
        },
        {
          name: 'dem0107_work',
          title: 'Quel type de travail occupez-vous (ou occupiez-vous avant de prendre votre retraite) ?',
          type: 'textarea',
          rows: 2,
          isRequired: true,
          autoGrow: true
        },
        {
          name: 'dem0108_live',
          title: "Vivez-vous seul ou avec d'autres personnes ?",
          type: 'dropdown',
          choices: [
            {value: 1, text: 'Seul(e)'},
            {value: 2, text: 'Avec le conjoint / partenaire'},
            {value: 3, text: 'Avec des membres de la famille'},
            {value: 4, text: 'Avec des soignants'},
            {value: 5, text: 'Dans un centre résidentiel assisté'}
          ],
          showOtherItem: true,
          placeholder: 'Sélectionner...',
          otherText: 'Autre (décrire)',
          isRequired: true,
        },
        {
          name: 'dem0109_lang',
          title: 'Quelle est votre langue principale ?',
          type: 'textarea',
          isRequired: true,
        },
        {
          name: "dem0110_langProb",
          title: "Avez-vous des difficultés linguistiques ou de communication ?",
          type: "dropdown",
          choices: [
            {value: 1, text: "Oui"},
            {value: 2, text: "Non"}
          ],
          placeholder: 'Sélectionner...',
          isRequired: true
        },
        {
          name: "dem0110p1_langProbDesc",
          title: "Si oui, veuillez préciser :",
          type: "comment",
          visibleIf: "{dem0110_langProb} == Oui",
          maxLength: 500
        },
        {
          name: 'dem0111_ethn',
          title: "Quelle est votre origine ethnique (vous pouvez sélectionner plus d'une origine) ?",
          type: "tagbox",
          choices: [
            'Européen (ex: blanc)',
            'Asiatique (ex: Chinois, Japonais, Coréen, Asiatique du Sud-Est)',
            'Indien de l\’Est, Pakistanais',
            'Afro-américain/Noir/Caribéen',
            'Hispanique',
            'Moyen-Orient',
            'Premières nations, Métis, Inuis',
          ],
          placeholder: 'Sélectionner...',
          description: "Veuillez sélectionner tous les éléments qui s'appliquent."
        },
        {
          name: 'dem0112_marital',
          title: 'Quel est votre état civil ?',
          type: 'dropdown',
          choices: [
            {value: 1, text: 'Célibataire'},
            {value: 2, text: 'Marié(e)'},
            {value: 3, text: 'Divorcé(e)'},
            {value: 4, text: 'Veuf(ve)'}
          ],
          placeholder: 'Sélectionner...',
          otherText: 'Autre (décrire)',
          showOtherItem: true,
          isRequired: true,
        },
        {
          name: 'dem0113_currNeed',
          title: 'Laquelle des affirmations suivantes décrit le mieux la mesure dans laquelle vos besoins sont actuellement rencontrés ?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Les besoins en nourriture, logement, vêtements et soins médicaux sont satisfaits - vous pouvez vous permettre des luxes/il reste de l'argent à la fin du mois"},
            {value: 2, text: "Les besoins en nourriture, logement, vêtements et soins médicaux sont satisfaits - vous ne pouvez pas vous permettre de luxe"},
            {value: 3, text: "L'un des besoins fondamentaux (nourriture, logement, vêtements ou soins médicaux) n'est pas satisfait"},
            {value: 4, text: "Deux ou plusieurs des besoins fondamentaux ne sont pas satisfaits"},
            {value: 99, text: "Je ne sais pas"},
          ],
          placeholder: 'Sélectionner...',
          isRequired: true,
        },
        {
          name: 'dem0114_pastNeed',
          title: 'Laquelle des affirmations suivantes décrit le mieux la mesure dans laquelle vos besoins ont été satisfaits pendant la majeure partie de votre vie d’adulte ?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Les besoins en nourriture, logement, vêtements et soins médicaux sont satisfaits - vous pouvez vous permettre des luxes"},
            {value: 2, text: "Les besoins en nourriture, logement, vêtements et soins médicaux sont satisfaits - vous ne pouvez pas vous permettre de luxe"},
            {value: 3, text: "L'un des besoins fondamentaux (nourriture, logement, vêtements ou soins médicaux) n'est pas satisfait"},
            {value: 4, text: "Deux ou plusieurs des besoins fondamentaux ne sont pas satisfaits"},
            {value: 99, text: "Je ne sais pas"}
          ],
          placeholder: 'Sélectionner...',
          isRequired: true,
        }
      ]
    },

    {
      name: "Information médicale",
      title: "Information médicale",
      elements: [
        {
          name: 'dem0201_CogDecDiag',
          title: 'Avez-vous reçu un diagnostic de démence ou de déclin cognitif?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Oui"},
            {value: 2, text: "Non"},
            {value: 3, text: "Pas certain(e)"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0202_DemTime',
          title: 'Si oui, depuis combien de temps avez-vous été diagnostiqué?',
          type: 'textarea',
          visibleIf: "{dem0201_CogDecDiag} == Oui",
          isRequired: true,
          textbox_rows: 3,
        },
        {
          name: 'dem0203_DementiaType',
          title: 'Si oui, quel est le type de démence (ou de déclin cognitif), s’il est connu ?',
          type: 'textarea',
          visibleIf: "{dem0201_CogDecDiag} == Oui",
          isRequired: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0204_HearLoss',
          title: 'Avez-vous une perte d’audition ?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Oui"},
            {value: 2, text: "Non"},
            {value: 3, text: "Pas certain(e)"}
          ],
          placeholder: 'Sélectionner...',
          isRequired: true,
        },
        {
          name: 'dem0204p1_HearType',
          title: 'Quel est le type de perte auditive dont vous souffrez?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Bilatéral"},
            {value: 2, text: "Unilatéral"},
            {value: 3, text: "Pas certain(e)"}
          ],
          visibleIf: "{dem0204_HearLoss} == Oui",
          placeholder: 'Sélectionner...',
          isRequired: false,
        },
        {
          name: 'dem0204p2_HearLevel',
          title: 'Quel est votre niveau de perte auditive ?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Léger"},
            {value: 2, text: "Moderéré"},
            {value: 3, text: "Sévère"},
            {value: 99, text: "Pas certain(e)"}
          ],
          visibleIf: "{dem0204_HearLoss} == Oui",
          placeholder: 'Sélectionner...',
          isRequired: false,
        },
        {
          name: 'dem0205_OtherHealth',
          title: 'Avez-vous d’autres problèmes de santé ?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Oui"},
            {value: 2, text: "Non"}
          ],
          placeholder: 'Sélectionner...',
          isRequired: true,
        },
        {
          name: 'dem0205p1_OtherHealthDesc',
          title: 'Veuillez expliquer',
          type: 'textarea',
          visibleIf: "{dem0205_OtherHealth} == Oui",
          isRequired: false,
          textbox_rows: 3,
        }
      ]
    },

    {
      name: "Habitudes",
      title: "Habitudes",
      elements: [
        {
          name: 'dem0301_ExeFreq',
          title: 'Combien de jours par semaine faites-vous de l\’exercice ?',
          type: 'dropdown',
          choices: [
            {value: 0, text: "0"},
            {value: 1, text: "1"},
            {value: 2, text: "2"},
            {value: 3, text: "3"},
            {value: 4, text: "4"},
            {value: 5, text: "5"},
            {value: 6, text: "6"},
            {value: 7, text: "7"}
          ],
          placeholder: 'Sélectionner...',
          isRequired: true,
        },
        {
          name: 'dem0302_Exe24',
          title: 'Avez-vous fait de l\’exercice au cours des dernières 24 heures ?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Oui"},
            {value: 2, text: "Non"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0303_Smoke',
          title: 'Fumez-vous ou avez-vous fumé dans le passé ?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Fume actuellement"},
            {value: 2, text: "Il y a plus d'un an que je ne fume plus"},
            {value: 3, text: "Jamais"},
            {value: 4, text: "Inconnu"}
          ],
          isRequired: true,
        },
        {
          name: 'dem0304p1_SmokeStart',
          title: 'En quelle année avez-vous commencé à fumer ?',
          type: 'dropdown',
          visibleIf: "{dem0303_Smoke} == Fume actuellement; {dem0303_Smoke} == Il y a plus d'un an que je ne fume plus",
          choicesMin: 1920,
          choicesMax: 2025,
          choicesStep:1,
          isRequired: true,
          input_type: "number"
        },
        {
          name: 'dem0304p2_SmokeQuit',
          title: 'En quelle année avez-vous arrêté de fumer ?',
          type: 'dropdown',
          visibleIf: "{dem0303_Smoke} == Il y a plus d'un an que je ne fume plus",
          choicesMin: 1920,
          choicesMax: 2025,
          choicesStep:1,
          isRequired: true,
          input_type: "number"
        },
        {
          name: 'dem0304p3_SmokePacks',
          title: 'Environ combien de paquets par jour ?',
          type: 'dropdown',
          visibleIf: "{dem0303_Smoke} == Fume actuellement; {dem0303_Smoke} == Il y a plus d'un an que je ne fume plus",
          choices: [
            {value: 0, text: "0"},
            {value: 0.5, text: "0.5"},
            {value: 1, text: "1"},
            {value: 2, text: "2"},
            {value: 3, text: "3"},
            {value: 4, text: "4"},
            {value: 5, text: "5"},
            {value: 6, text: "6"},
            {value: 7, text: "&gt;6"}
          ],
          placeholder: 'Sélectionner...',
          isRequired: true,
          input_type: "number"
        },
        {
          name: 'dem0305_Alc',
          title: 'Consommation d\’alcool',
          type: 'dropdown',
          choices: [
            {value: 0, text: "Aucune"},
            {value: 1, text: "Moins de 2 boissons par jour"},
            {value: 2, text: "2 à 4 boissons par jour"},
            {value: 3, text: "Plus de 4 boissons par jour"}
          ],
          placeholder: 'Sélectionner...',
          isRequired: true,
        }
      ]
    },

    {
      name: "Expérience musicale",
      title: "Expérience musicale",
      elements: [
        {
          name: 'dem0401_MusCls',
          title: 'Avez-vous déjà participé à des cours de musique et de mouvement ?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Oui"},
            {value: 2, text: "Non"}
          ],
          placeholder: 'Sélectionner...',
          isRequired: true,
        },
        {
          name: 'dem0401p1_MusClsExp',
          title: 'Veuillez décrire votre expérience antérieure (quel type de cours et pendant combien de temps) :',
          type: 'textarea',
          visibleIf: "{dem0401_MusCls} == Oui",
          isRequired: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0402_MusGrp',
          title: 'Avez-vous déjà participé à des cours de musique en groupe ?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Oui"},
            {value: 2, text: "Non"}
          ],
          placeholder: 'Sélectionner...',
          isRequired: true,
        },
        {
          name: 'dem0402p1_MusGrpExp',
          title: 'Veuillez décrire votre expérience antérieure (quel type de cours et pendant combien de temps) :',
          type: 'textarea',
          visibleIf: "{dem0402_MusGrp} == Oui",
          isRequired: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0403_MusChr',
          title: 'Avez-vous déjà fait partie d’une chorale ?',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Oui"},
            {value: 2, text: "Non"},
          ],
          placeholder: 'Sélectionner...',
          isRequired: true,
        },
        {
          name: 'dem0403p1_MusChrExp',
          title: 'Veuillez décrire votre expérience antérieure (quel type de choral et pendant combien de temps):',
          type: 'textarea',
          visibleIf: "{dem0403_MusChr} == Oui",
          isRequired: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0404_MusOth',
          title: 'Avez-vous une autre expérience musicale (c’est-à-dire avez-vous joué un instrument de musique régulièrement à un moment quelconque de votre vie)',
          type: 'dropdown',
          choices: [
            {value: 1, text: "Oui"},
            {value: 2, text: "Non"},
          ],
          placeholder: 'Sélectionner...',
          isRequired: true,
        },
        {
          name: 'dem0405p1_MusOthInst',
          title: 'Quel(s) instrument(s) ?',
          type: 'textarea',
          visibleIf: "{dem0404_MusOth} == Oui",
          isRequired: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0405p2_MusOthInsAge',
          title: 'À quel âge avez-vous commencé ?',
          type: 'textarea',
          visibleIf: "{dem0404_MusOth} == Oui",
          isRequired: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0405p3_MusOthInsYrs',
          title: 'Pendant combien de temps avez-vous joué de cet instrument (années) ?',
          type: 'textarea',
          visibleIf: "{dem0404_MusOth} == Oui",
          isRequired: false,
          textbox_rows: 3,
        },
        {
          name: 'dem0405p4_MusOthCur',
          title: 'Y jouez-vous encore ?',
          type: 'dropdown',
          visibleIf: "{dem0404_MusOth} == Oui",
          placeholder: 'Sélectionner...',
          choices: [
            {value: 1, text: "Oui"},
            {value: 2, text: "Non"}
          ],
          isRequired: true,
        }
      ]
    },

    {
      name: "Commentaires supplémentaires",
      title: "Commentaires supplémentaires",
      elements: [
        {
          name: 'dem0501_Comments',
          title: 'Avez-vous des commentaires ou des informations supplémentaires qui pourraient être utiles à cette étude et/ou aux cours de musique ?',
          type: 'textarea',
          isRequired: false,
          textbox_rows: 5,
        }
      ]
    }
  ]
}

var FR_IntakeForm_Music = {}
FR_IntakeForm_Music.title = title;
FR_IntakeForm_Music.survey_JSON = json;
FR_IntakeForm_Music.shortTitle = shortTitle
FR_IntakeForm_Music.QuestionnaireType = 'Varied'
