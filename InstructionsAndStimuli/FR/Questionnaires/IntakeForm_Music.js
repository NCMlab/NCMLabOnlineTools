
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
          type: 'dropdown',
          title: "Sexe", 
          name: 'dem0101_gender', 
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
          type: "input",
          title: "Âge",
          inputType: "number",
          choicesMin: 0,
          choicesMax: 150,
          defaultValue: '',
          isRequired: true,
        },
        {
          name: "dem0103_height",
          type: "input",
          title: "Saisissez votre taille en pouces ou en centimètres",
          inputType: "number",
          min: 0,
          max: 300,
          defaultValue: '',
          isRequired: true
        },
        {
          type: 'dropdown',
          title: "Quelles unités avez-vous utilisées pour la hauteur?", 
          name: 'dem0103p1_heightU', 
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
          type: "input",
          title: "Saisissez votre poids en livres ou en kilogrammes",
          inputType: "number",
          min: 0,
          max: 1000,
          defaultValue: '',
          placeholder: 'Sélectionner...',
          isRequired: true
        },
        {
          type: 'dropdown',
          title: "Quelles unités avez-vous utilisées pour le poids ?", 
          name: 'dem0104p1_weightU', 
          choices: [
                    {value:1, text:'Livres'},
                    {value:2, text:'Kilogrammes'},
              ],
          showOtherItem: false,
          placeholder: 'Sélectionner...',
          isRequired: true,
        },
        {
          type: 'dropdown',
          title: "Quel est le niveau d'études le plus élevé que vous ayez complété ?", 
          name: 'dem0105_edu', 
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
          type: 'dropdown',
          title: "Quelle est votre statut d'emploi ?", 
          name: 'dem0106_employ', 
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
          type: 'textarea',
          title: 'Quel type de travail occupez-vous (ou occupiez-vous avant de prendre votre retraite) ?',
          name: 'dem0107_work',
          rows: 2,
          isRequired: true,
          autoGrow: true
        },          
        {
          type: 'dropdown',
          title: "Vivez-vous seul ou avec d'autres personnes ?", 
          name: 'dem0108_live', 
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
          type: 'textarea',
          title: 'Quelle est votre langue principale ?',
          name: 'dem0109_lang',
          isRequired: true,
        },
        {
          name: "dem0110_langProb",
          type: "dropdown",
          title: "Avez-vous des difficultés linguistiques ou de communication ?",
          choices: [
            {value: 1, text: "Oui"},
            {value: 2, text: "Non"}
          ],
          placeholder: 'Sélectionner...',
          isRequired: true
        }, 
        {
          name: "dem0110p1_langProbDesc",
          type: "comment",
          title: "Si oui, veuillez préciser :",
          visibleIf: "{dem0110_langProb} == Oui",
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
          name: 'dem0111_ethn',
          placeholder: 'Sélectionner...',
          title: "Quelle est votre origine ethnique (vous pouvez sélectionner plus d'une origine) ?",
          "description": "Veuillez sélectionner tous les éléments qui s'appliquent."
        },
        {
          type: 'dropdown',
          title: 'Quel est votre état civil ?',
          choices: 
          [   
              {value: 1, text: 'Célibataire'},
              {value: 2, text: 'Marié(e)'},
              {value: 3, text: 'Divorcé(e)'},
              {value: 4, text: 'Veuf(ve)'}
          ],
          name: 'dem0112_marital',
          placeholder: 'Sélectionner...',
          otherText: 'Autre (décrire)',
          showOtherItem: true,                    
          isRequired: true,
        },
        {
            type: 'dropdown',
            title: 'Laquelle des affirmations suivantes décrit le mieux la mesure dans laquelle vos besoins sont actuellement rencontrés ?',
            choices: 
            [
                {value: 1, text: "Les besoins en nourriture, logement, vêtements et soins médicaux sont satisfaits - vous pouvez vous permettre des luxes/il reste de l'argent à la fin du mois"},
                {value: 2, text: "Les besoins en nourriture, logement, vêtements et soins médicaux sont satisfaits - vous ne pouvez pas vous permettre de luxe"},
                {value: 3, text: "L'un des besoins fondamentaux (nourriture, logement, vêtements ou soins médicaux) n'est pas satisfait"},
                {value: 4, text: "Deux ou plusieurs des besoins fondamentaux ne sont pas satisfaits"},
                {value: 99, text: "Je ne sais pas"},
            ],
            name: 'dem0113_currNeed',
            placeholder: 'Sélectionner...',
            isRequired: true,
          },
          {
            type: 'dropdown',
            title: 'Laquelle des affirmations suivantes décrit le mieux la mesure dans laquelle vos besoins ont été satisfaits pendant la majeure partie de votre vie d’adulte ?',
            choices: 
            [
                {value: 1, text: "Les besoins en nourriture, logement, vêtements et soins médicaux sont satisfaits - vous pouvez vous permettre des luxes"},
                {value: 2, text: "Les besoins en nourriture, logement, vêtements et soins médicaux sont satisfaits - vous ne pouvez pas vous permettre de luxe"},
                {value: 3, text: "L'un des besoins fondamentaux (nourriture, logement, vêtements ou soins médicaux) n'est pas satisfait"},
                {value: 4, text: "Deux ou plusieurs des besoins fondamentaux ne sont pas satisfaits"},
                {value: 99, text: "Je ne sais pas"}
            ],
            name: 'dem0114_pastNeed',
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
          type: 'dropdown',
          name: 'dem0201_CogDecDiag',
          title: 'Avez-vous reçu un diagnostic de démence ou de déclin cognitif?',
          choices: 
          [
              {value: 1, text: "Oui"},
              {value: 2, text: "Non"},
              {value: 3, text: "Pas certain(e)"}
          ],
          isRequired: true,
          //add_other_option: true,                    
          //other_option_text: 'Oui, depuis combien de temps avez-vous été diagnostiqué ?',
      },
      {
        type: 'textarea',
        title: 'Si oui, depuis combien de temps avez-vous été diagnostiqué?',
        name: 'dem0202_DemTime',
        visibleIf: "{dem0201_CogDecDiag} == Oui",
        isRequired: true,
        textbox_rows: 3,
      },
      {
        type: 'textarea',
        title: 'Si oui, quel est le type de démence (ou de déclin cognitif), s’il est connu ?',
        name: 'dem0203_DementiaType',
        visibleIf: "{dem0201_CogDecDiag} == Oui",
        isRequired: false,
        textbox_rows: 3,
      },
      {
          type: 'dropdown',
          title: 'Avez-vous une perte d’audition ?',
          choices: 
          [
              {value: 1, text: "Oui"},
              {value: 2, text: "Non"},
              {value: 3, text: "Pas certain(e)"}
          ],
          name: 'dem0204_HearLoss',
          isRequired: true,
          placeholder: 'Sélectionner...',
          //add_other_option: true,                    
          //other_option_text: 'Oui, quel est le type de perte auditive dont vous souffrez ?',
      },
      {
        type: 'dropdown',
        title: 'Quel est le type de perte auditive dont vous souffrez?',
        choices: 
        [
            {value: 1, text: "Bilatéral"},
            {value: 2, text: "Unilatéral"},
            {value: 3, text: "Pas certain(e)"}
        ],
        name: 'dem0204p1_HearType',
        visibleIf: "{dem0204_HearLoss} == Oui",
        placeholder: 'Sélectionner...',
        isRequired: false,
        //add_other_option: true,                    
        //other_option_text: 'Oui, quel est le type de perte auditive dont vous souffrez ?',
    },
    {
      type: 'dropdown',
      title: 'Quel est votre niveau de perte auditive ?',
      choices: 
      [
          {value: 1, text: "Léger"},
          {value: 2, text: "Moderéré"},
          {value: 3, text: "Sévère"},
          {value: 99, text: "Pas certain(e)"}
      ],
      visibleIf: "{dem0204_HearLoss} == Oui",
      name: 'dem0204p2_HearLevel',
      placeholder: 'Sélectionner...',
      isRequired: false,
      //add_other_option: true,                    
      //other_option_text: 'Yes, how long ago were you diagnosed?',
    },
    {
      type: 'dropdown',
      title: 'Avez-vous d’autres problèmes de santé ?',
      choices: 
      [
          {value: 1, text: "Oui"},
          {value: 2, text: "Non"}
      ],
      name: 'dem0205_OtherHealth',
      placeholder: 'Sélectionner...',
      isRequired: true,
    },
    {
      type: 'textarea',
      title: 'Veuillez expliquer',
      name: 'dem0205p1_OtherHealthDesc',
      visibleIf: "{dem0205_OtherHealth} == Oui",
      isRequired: false,
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
          name: 'dem0301_ExeFreq',
          isRequired: true,
        },
        {
          type: 'dropdown',
          title: 'Avez-vous fait de l’exercice au cours des dernières 24 heures ?',
          choices: 
          [
              {value: 1, text: "Oui"},
              {value: 2, text: "Non"}
          ],
          name: 'dem0302_Exe24',
          isRequired: true,
        },
        {
          type: 'dropdown',
          title: 'Fumez-vous ou avez-vous fumé dans le passé ?',
          choices: 
          [
            {value: 1, text: "Fume actuellement"},
            {value: 2, text: "Il y a plus d'un an que je ne fume plus"},
            {value: 3, text: "Jamais"},
            {value: 4, text: "Inconnu"}
          ],
          name: 'dem0303_Smoke',
          isRequired: true,
        },
        {
          type: 'dropdown',
          title: 'En quelle année avez-vous commencé à fumer ?',
          visibleIf: "{dem0303_Smoke} == Fume actuellement; {dem0303_Smoke} == Il y a plus d\'un an que je ne fume plus",
          choicesMin: 1920,
          choicesMax: 2025,
          choicesStep:1,
          name: 'dem0304p1_SmokeStart',
          isRequired: true,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'En quelle année avez-vous arrêté de fumer ?',
          visibleIf: "{dem0303_Smoke} == Il y a plus d\'un an que je ne fume plus",
          choicesMin: 1920,
          choicesMax: 2025,
          choicesStep:1,
          name: 'dem0304p2_SmokeQuit',
          isRequired: true,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'Environ combien de paquets par jour ?',
          visibleIf: "{dem0303_Smoke} == Fume actuellement; {dem0303_Smoke} == Il y a plus d\'un an que je ne fume plus",
          choices: [
            {value: 0, text: "0"},
            {value: 0.5, text: "0.5"},
            {value: 1, text: "1"},
            {value: 2, text: "2"},
            {value: 3, text: "3"},
            {value: 4, text: "4"},
            {value: 5, text: "5"},
            {value: 6, text: "6"},
            {value: 7, text: ">6"}
          ],
          name: 'dem0304p3_SmokePacks',
          placeholder: 'Sélectionner...',
          isRequired: true,
          input_type: "number"
        },
        {
          type: 'dropdown',
          title: 'Consommation d\’alcool',
          choices: 
          [
              {value: 0, text: "Aucune"},
              {value: 1, text: "Moins de 2 boissons par jour"},
              {value: 2, text: "2 à 4 boissons par jour"},
              {value: 3, text: "Plus de 4 boissons par jour"}
          ],
          name: 'dem0305_Alc',
          placeholder: 'Sélectionner...',
          isRequired: true,
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
              {value: 1, text: "Oui"},
              {value: 2, text: "Non"}
            ],
            name: 'dem0401_MusCls',
            placeholder: 'Sélectionner...',
            isRequired: true,
          },
          {
            type: 'textarea',
            title: 'Veuillez décrire votre expérience antérieure (quel type de cours et pendant combien de temps) :',
            name: 'MusicExperience',
            visibleIf: "{dem0401_MusCls} == Oui",
            isRequired: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Avez-vous déjà participé à des cours de musique en groupe ?',
            choices: 
            [
              {value: 1, text: "Oui"},
              {value: 2, text: "Non"}
            ],
            name: 'dem0402_MusGrp',
            placeholder: 'Sélectionner...',
            isRequired: true,
          },
          {
            type: 'textarea',
            title: 'Veuillez décrire votre expérience antérieure (quel type de cours et pendant combien de temps) :',
            name: 'GroupMusicExperience',
            visibleIf: "{dem0402_MusGrp} == Oui",
            isRequired: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Avez-vous déjà fait partie d’une chorale ?',
            choices: 
            [
              {value: 1, text: "Oui"},
              {value: 2, text: "Non"},
            ],
            name: 'dem0403_MusChr',
            placeholder: 'Sélectionner...',
            isRequired: true,
          },
          {
            type: 'textarea',
            title: 'Veuillez décrire votre expérience antérieure (quel type de choral et pendant combien de temps):',
            name: 'dem0403p1_MusChrExp',
            visibleIf: "{dem0403_MusChr} == Oui",
            isRequired: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Avez-vous une autre expérience musicale (c’est-à-dire avez-vous joué un instrument de musique régulièrement à un moment quelconque de votre vie) ',
            choices: 
            [
              {value: 1, text: "Oui"},
              {value: 2, text: "Non"},
            ],
            name: 'dem0404_MusOth',
            placeholder: 'Sélectionner...',
            isRequired: true,
          },
          {
            type: 'textarea',
            title: 'Quel(s) instrument(s) ?',
            name: 'WhichInstrument',
            visibleIf: "{dem0404_MusOth} == Oui",
            isRequired: false,
            textbox_rows: 3,
          },
          {
            type: 'textarea',
            title: 'À quel âge avez-vous commencé ?',
            name: 'dem0405p2_MusOthInsAge',
            visibleIf: "{dem0404_MusOth} == Oui",
            isRequired: false,
            textbox_rows: 3,
          },
          {
            type: 'textarea',
            title: 'Pendant combien de temps avez-vous joué de cet instrument (années) ?',
            name: 'dem0405p3_MusOthInsYrs',
            visibleIf: "{dem0404_MusOth} == Oui",
            isRequired: false,
            textbox_rows: 3,
          },
          {
            type: 'dropdown',
            title: 'Y jouez-vous encore ?',
            choices: 
            [
              {value: 1, text: "Oui"},
              {value: 2, text: "Non"}
            ],
            visibleIf: "{dem0404_MusOth} == Oui",
            placeholder: 'Sélectionner...',
            name: 'StillPlayInstrument',
            isRequired: true,
          },
      ]
    },
    {
      name: "Commentaires supplémentaires",
      title: "Commentaires supplémentaires",
      
      elements: [
        {
          type: 'textarea',
          title: 'Avez-vous des commentaires ou des informations supplémentaires qui pourraient être utiles à cette étude et/ou aux cours de musique ?',
          name: 'dem0501_Comments',
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
//FR_IntakeForm_MusicJSON.Instructions01 = [
//    {        'page': '<p class="Instructions">Instructions are written here.'   }
//]
