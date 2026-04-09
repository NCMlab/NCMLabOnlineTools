
var title = "Questionnaire démographique"
var shortTitle = 'IPAQ'  

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
      title: "Inventaire des Activités de la vie quotidienne (AVQ) de I'ADCS",
       elements: [
        {
            type: 'description',
            text: [
                {text: "JASON"},
                {text: "<b>SVP, lisez les instructions puis, complétez le questionnaire:</b>"},
                {text: "Nous voudrions savoir comment se déroulent certaines de vos activités de la vie de tous les jours depuis les 2 dernières semaines."},
                {text:" SVP, lisez chaque question sur ces activités. Puis, faites un crochet « √ » dans la case qui représente le mieux la façon avec laquelle vous réalisez ces activités."},
                {text: "<b> Cochez seulement une case pour chaque question.</b>"},
                {text: "Voici les choix que vous aurez :" },
                {text: "<ul><li>Si vous avez effectué l'activité sans difficulté ou changement par rapport à votre fonctionnement habituel, cochez « √ » la case indiquant <b>aussi bien que d'habitude, sans difficulté</b>. </li><li>Si vous avez éprouvé un peu plus de difficultés qu'à l'habitude lors de la réalisation de cette activité, cochez « √ » la case indiquant <b>avec un peu de difficultés</b>. Par exemple, l'activité peu avoir pris plus de temps que d'habitude ou vous avez parfois fait quelques erreurs dans sa réalisation. </li><li>Si vous avez éprouvé beaucoup de difficultés lors de la réalisation de cette activité, cochez « √ » la case indiquant <b>avec beaucoup de difficultés</b>. Par exemple, vous pouvez avoir besoin de l'aide d'une autre personne puisque vous avez beaucoup de difficultés à effectuez cette activité. </li><li>Si vous n'avez pas du tout réalisé cette activité lors des 2 dernières semaines, cochez «√» la case indiquant <b>vous n'avez pas réalisé cette activité</b>.</ul>"},
                {text: "<b>Voici un exemple vous indiquant comment répondre à une question:</b>"},
                {text: "Question: Avez-vous appris de nouvelles habiletés durant les 2 dernières semaines ? <ul><li>aussi bien que d'habitude, sans difficulté</li><li>avec un peu de difficultés</li><li>avec beaucoup de difficultés</li><li>vous n'avez pas effectué cette activité"},
                {text:"Imaginons que vous avez appris comment utiliser un nouveau four à micro-ondes lors des 2 dernières semaines. Cet apprentissage a été un peu plus difficile pour vous que d'habitude. Donc, vous cocheriez « √ » la case indiquant <b>avec un peu de difficultés</b>, tel que montré dans l'exemple précédent. "},
                {text: "Maintenant, SVP complétez toutes les questions qui suivent. Cochez « √ » la case qui décrit comment vous avez réalisé chaque activité au cours des 2 dernières semaines. "}
            ]
        },
        {
            type: "radiogroup",
            name: "adlpi01",
            title: "Question1. Au cours des 2 dernières semaines, avez-vous fait vos comptes, payé des factures ou utilisé un guichet automatique pour retirer ou déposer de l'argent?",
            choices: [
                {value: 1, text: "aussi bien que d'habitude, sans difficulté "},
                {value: 2, text: "avec un peu de difficultés"},
                {value: 3, text: "avec beaucoup de difficultés"},
                {value: 4, text: "vous n'avez pas réalisé cette activité"}
                ],
            isRequired: true,
            showClearButton: true
        },
        {
            type: "radiogroup",
            name: "adlpi02",
            title: "Question 2. Au cours des 2 dernières semaines, avez-vous conduit une voiture sans vous perdre ou avez-vous utilisé les transports en commun ou tout autre moyen de transport pour vous rendre partout où vous désiriez aller ?",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté" },
                { value: 2, text: "avec un peu de difficultés" },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi03",
            title: "Question 3. Au cours des 2 dernières semaines, avez-vous utilisé un appareil ménager (par exemple, un micro-ondes, un lave vaisselle, un ordinateur ou un aspirateur) ou avez-vous effectué des réparations dans votre domicile?",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté" },
                { value: 2, text: "avec un peu de difficultés" },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi04",
            title: "Question 4. Au cours des 2 dernières semaines, avez-vous fait la lessive ?",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté" },
                { value: 2, text: "avec un peu de difficultés" },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi05",
            title: "Question 5. Au cours des 2 dernières semaines, avez-vous choisi et payé des articles lors de votre magasinage ?",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté" },
                { value: 2, text: "avec un peu de difficultés" },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi06",
            title: "Question 6. Au cours des 2 dernières semaines, avez-vous préparé des repas ou des collations?",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté" },
                { value: 2, text: "avec un peu de difficultés" },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi07",
            title: "Question 7. Au cours des 2 dernières semaines, de quelle manière vous êtes-vous souvenus de dates ou d'heures importantes, telles que des rendez-vous ou des rencontres ? ",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté " },
                { value: 2, text: "avec un peu de difficultés " },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi08",
            title: "Question 8. Au cours des 2 dernières semaines, avez-vous généralement trouvé vos objets personnels à la maison ; par exemple des clés, des lunettes, un portefeuille ou des livres ? ",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté " },
                { value: 2, text: "avec un peu de difficultés " },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi09",
            title: "Question 9. Au cours des 2 dernières semaines, de quelle manière avez-vous été en mesure d'écrire des choses de façon à ce que d'autres personnes puissent vous comprendre (ex. : lettres, notes détaillées ou listes) ? ",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté " },
                { value: 2, text: "avec un peu de difficultés " },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi10",
            title: "Question 10. Au cours des 2 dernières semaines, de quelle manière avez-vous été en mesure de suivre des programmes de télévision ou des films et de vous souvenir des détails de l'histoire ?",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté " },
                { value: 2, text: "avec un peu de difficultés " },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi11",
            title: "Question 11. Au cours des 2 dernières semaines, de quelle manière avez-vous été en mesure de parler et de vous souvenir des événements récents que vous avez entendus ou lus à quelque part ? ",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté " },
                { value: 2, text: "avec un peu de difficultés " },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi12",
            title: "Question 12. Au cours des 2 dernières semaines, de quelle manière avez-vous été en mesure de faire des appels téléphoniques, incluant la recherche de numéros de téléphone ou l'utilisation de l'assistance annuaire au besoin ? ",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté " },
                { value: 2, text: "avec un peu de difficultés " },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi13",
            title: "Question 13. Au cours des 2 dernières semaines, avez-vous pris vos médicaments régulièrement ; incluant les médicaments sous prescriptions et sans ordonnance ? ",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté " },
                { value: 2, text: "avec un peu de difficultés " },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi14",
            title: "Question 14. Au cours des 2 dernières semaines avez-vous planifié et organisé des activités complexes pour vous ou pour des groupes de personnes, par ex : voyages, faire ses courses, participation à des activités de groupe (telles que des services religieux), ou effectué vos loisirs et passe-temps ? ",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté " },
                { value: 2, text: "avec un peu de difficultés " },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
            type: "radiogroup",
            name: "adlpi15",
            title: "Question 15. Au cours des 2 dernières semaines, avez-vous complété des activités complexes telles que des loisirs et passe-temps, par ex : jouer aux cartes, lire des livres, jardiner ? ",
            choices: [
                { value: 1, text: "aussi bien que d'habitude, sans difficulté " },
                { value: 2, text: "avec un peu de difficultés " },
                { value: 3, text: "avec beaucoup de difficultés" },
                { value: 4, text: "vous n'avez pas réalisé cette activité" }
            ],
            isRequired: true
            },
            {
                type: "description",
                text: [
                    {text: "<b>Maintenant, nous allons vous poser quelques questions sur votre vision, votre ouïe et votre mobilité:</b>"},
                    {text: "Cochez« √ » la case correspondant à « Oui » ou « Non » pour chaque question."},
                ]
            },
            {
                type: "radiogroup",
                name: "adlpi16",
                title: "Pouvez-vous voir assez bien pour être en mesure de reconnaître un(e) ami(e) qui se trouve de l'autre côté de la rue, en portant, au besoin, des lunettes ou des verres de contact ?",
                choices: [
                    { value: 1, text: "Oui" },
                    { value: 2, text: "Non" },
                ],
                isRequired: true
            },
                        {
                type: "radiogroup",
                name: "adlpi17",
                title: "Pouvez-vous généralement entendre et comprendre lorsqu'une autre personne parle avec un ton de voix normal?",
                choices: [
                    { value: 1, text: "Oui" },
                    { value: 2, text: "Non" },
                ],
                isRequired: true
            },
                        {
                type: "radiogroup",
                name: "adlpi18",
                title: "Pouvez-vous monter et descendre une série de marches (un étage) sans l'aide d'une autre personne ?",
                choices: [
                    { value: 1, text: "Oui" },
                    { value: 2, text: "Non" },
                ],
                isRequired: true
            },
                        {
                type: "radiogroup",
                name: "adlpi19",
                title: "Pouvez-vous marcher deux pâtés de maisons ou plus loin sans aide ?",
                choices: [
                    { value: 1, text: "Oui" },
                    { value: 2, text: "Non" },
                ],
                isRequired: true
            },
                        {
                type: "radiogroup",
                name: "adlpi20",
                title: "Pouvez-vous faire des travaux ménagers, tels que laver les vitres, les murs, le plancher ou sortir les vidanges sans aide?",
                choices: [
                    { value: 1, text: "Oui" },
                    { value: 2, text: "Non" },
                ],
                isRequired: true
            }

        ]   
    }
   ]
}   
        
       // <input type="number" class="numberinput" id="q01" name="quantity" min="0" 
       // required> jours par semaine
       // </label>
        //<br>
        //<label><input class="checkbox" type="checkbox" id="noneCheck01" onclick="toggleDiv(quantityInput01)"> Je n’ai pas eu d’activité physique intense</label>
    




var FR_adl_pi = {}
FR_adl_pi.title = title;
FR_adl_pi.survey_JSON = json;
FR_adl_pi.shortTitle = shortTitle
FR_adl_pi.QuestionnaireType = 'form'
//FR_IntakeForm_MusicJSON.Instructions01 = [
//    {        'page': '<p class="Instructions">Instructions are written here.'   }
//]
