

    
    // EN_IntakeForm_NCM.Instructions01 = [
    // {'page': ' Please, make sure your microphone and speakers are on and that the volume is set so you can hear the tasks. '+
    //   'Please, do not press your browser\'s back or reload buttons.'},
    //   {'page': 'If you have feedback you would like to share '+
    //   'with us, there will be a text box at the very end of the experiment where you can type in comments.'} 
    // ]


// =====================================================
const FRjson = {
  showProgressBar: "top",
  progressBarType: "pages",
  progressBarShowPageNumbers: true,
  progressBarShowPageTitles: true,
  showCompletedPage: false,
  showTitle: true,
  pages: 
  [

    {      
      name: "Formulaire d\'admission",
      title: "Formulaire d\'admission",
      elements: [
        {
          name: 'desc',
          title: "Instructions01",
          type: 'description',
          text: [
            {'text': "<h2>Veuillez-vous assurer que votre microphone et vos haut-parleurs sont "+
                "allumés et que le volume est réglé pour que vous puissiez entendre les tâches. "+
                 "S'il vous plaît, n'appuyez pas sur les boutons de retour ou de rechargement de "+
                "votre navigateur.</h2>"},
            {"text": "<h2>Si vous avez des commentaires, et que vous aimeriez les partager "+
                "avec nous, il y aura une zone de texte à la fin où vous pourrez écrire des commentaires.</h2>"}
          ],
          showOtherItem: true,
          isRequired: true
        },
    ]},
    {
        name: "Intake Form",
        title: "Intake Form",
        elements: [
            {
                name: 'dem0101_month',
                title: "En quel mois année êtes-vous né?", 
                type: 'dropdown',
                choices: [
                    {value: 1, text:'janvier'},
                    {value: 2, text:'février'},
                    {value: 3, text:'mars'},
                    {value: 4, text:'avril'},
                    {value: 5, text:'mai'},
                    {value: 6, text:'juin'},
                    {value: 7, text:'juillet'},
                    {value: 8, text:'août'},
                    {value: 9, text:'septembre'},
                    {value: 10, text:'octobre'},
                    {value: 11, text:'novembre'},
                    {value: 12, text:'décembre'},
                ],
                showOtherItem: false,
                isRequired: true,
            },
            {
                name: 'dem0101_year',
                title: "En quelle année êtes-vous né?", 
                type: 'dropdown',
                choicesMin: 1920,
                choicesMax: 2010,
            },
            {
                name: 'dem0101_sex',
                title: "Quel sexe vous a été attribué à la naissance, sur votre acte de naissance original?",
                type: 'dropdown',
                choices: [
                    {value: 1, text:'Femelle'},
                    {value: 2, text:'Mâle'},
                ],
                showOtherItem: true,
                isRequired: true,
                other_option_text: "Vous n'avez pas d'option qui s'applique à moi. Je m'identifie comme (veuillez préciser)",
            },
            {
                name: 'dem0101_gender',
                title: "Quel est votre genre?", 
                type: 'dropdown',
                choices: [
                    {value: 1, text:'Femme'},
                    {value: 2, text:'Homme'},
                    {value: 3, text:'Femme trans'},
                    {value: 4, text:'Homme trans'},
                    {value: 5, text:'Non binaire'},
                ],
                showOtherItem: true,
                isRequired: true,
                other_option_text: "Vous n'avez pas d'option qui s'applique à moi. Je m'identifie comme (veuillez préciser)",
            },
            {
                name: 'dem0101_edu',
                title: "Combien d'années d'études avez-vous complétées ? (par exemple, terminer ses études secondaires est de 12 ans, terminer un BA/BS est de 16 ans, terminer une MA/MS est de 18 ans, terminer un doctorat est de 21 ans.", 
                type: 'dropdown',
                choicesMin: 0,
                choicesMax: 25,
            },
                        {
                name: 'dem0101_hand',
                title: "Quelle main préférez-vous utiliser?", 
                type: 'dropdown',
                choices: [
                    {value: 1, text: "Gauche"},
                    {value: 2, text: "Aucune préférence"},
                    {value: 3, text: "Driote"},
                    {value: 4, text: "Je ne sais pas"},
                    {value: 5, text: "Je préfère ne pas répondre"},
                ],
                showOtherItem: false,
                isRequired: true,                
            },
        ]
    }
  ]
}
     
  var FR_IntakeForm_NCM = {}
    FR_IntakeForm_NCM.title = 'Intake Form',
    FR_IntakeForm_NCM.shortTitle = 'Intake Form',
    FR_IntakeForm_NCM.survey_JSON = FRjson
    FR_IntakeForm_NCM.description = ""
    FR_IntakeForm_NCM.QuestionnaireType = 'form'
    FR_IntakeForm_NCM.references = "references"
    FR_IntakeForm_NCM.notes = ''

    