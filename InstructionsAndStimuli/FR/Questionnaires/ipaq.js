
var title = "Questionnaire démographique"
var shortTitle = 'IPAQ'  

// All questions use the same direction so enter that single flag as an array of size 1

const json = {
  showProgressBar: "aboveHeader",
   progressBarType: "pages",
   name: 'ipaq',
   progressBarShowPageNumbers: true,
   progressBarShowPageTitles: true,
   showCompletedPage: false,
   pages: [
     {
      
      name: "Information démographique",
      title: "Information démographique",
       elements: [

        {
            name: 'textbox00',
            type: 'textbox',
            text: "Nous nous intéressons aux différents types d’activités physiques que vous faites dans votre vie quotidienne. Les questions suivantes portent sur le temps que vous avez passé à être actif physiquement au cours des 7 derniers jours. Répondez à chacune de ces questions même si vous ne vous considérez pas comme une personne active. Les questions concernent les activités physiques que vous faites au travail, dans votre maison ou votre jardin, pour vos déplacements, et pendant votre temps libre.",
            box: false
        },
        {
            name: 'textbox01',
            type: 'textbox',
            text: "Pensez à toutes les activités <b>intenses</b> que vous avez faites au cours des <u><b>7 derniers jours</b></u>. Les activités physiques intenses font référence aux activités qui vous demandent un effort physique important et vous font respirer beaucoup plus difficilement que normalement. Pensez seulement aux activités que vous avez effectuées pendant au moins <b>10 minutes d’affilées</b>.",
            box: true
        },

        {
            name: "ipaq01",
            type: "multiInput",
            title: "Au cours des  <b> 7 derniers jours</b>, combien y a-t-il eu de jours au cours desquels vous avez fait des activités physiques <b>intenses</b> comme porter des charges lourdes, bêcher, faire du VTT ou jouer au football ? ",
             
            inputs: [
                {
                    id: "ipaq01jour",
                    label:  "jours par semaine",
                    type: "number",
                    min: 0,
                    max: 7,
                },
                
            ],
            checkbox: true,
            checkboxLabel: "Je n\’ai pas eu d\’activité physique intense",
            checkboxId: "noneCheck01" 
        },
        {
            name: "ipaq02",
            type: "multiInput",
            title: "Au total, combien de temps avez-vous passé à faire des activités intenses au cours des 7 derniers jours ?",
            inputs: [
                {
                    id: "ipaq02heure",
                    label:  "heures(s) par jour",
                    type: "number",
                    min: 0,
                    max: 24,
                },
                {
                    id: "ipaq02min",
                    label:  "minutes par jour",
                    type: "number",
                    min: 0,
                    max: 59,
                }
            ],
            visibleIf: "ipaq01",
            checkbox: true,
            checkboxLabel: "Je ne sais pas",
            checkboxId: "noneCheck02" 
        },
        {
            name: 'textbox01',
            type: 'textbox',
            text: "Pensez à toutes les activités <b>modérées</b> que vous avez faites au cours des 7 derniers jours. Les activités physiques modérées font référence aux activités qui vous demandent un effort physique modéré et vous font respirer un peu plus difficilement que normalement. Pensez seulement aux activités que vous avez effectuées pendant au moins 10 minutes d’affilée.",
            box: true,
        },
        {
            name: "ipaq03",
            type: "multiInput",
            title: "Au cours des 7 derniers jours, combien y a-t-il eu de jours au cours desquels vous avez fait des activités physiques modérées comme porter des charges légères, passer l’aspirateur, faire du vélo tranquillement, ou jouer au volley- ball ? Ne pas inclure la marche.",
            inputs: [
                {
                    id: "ipaq03jours",
                    label:  "jours par semaine",
                    type: "number",
                    min: 0,
                    max: 7,
                },
            ],
            checkbox: true,
            checkboxLabel: "Je n\’ai pas eu d\’activité physique modérée",
            checkboxId: "noneCheck03" 
        },
        {
            name: "ipaq04",
            type: "multiInput",
            title: "Au total, combien de temps avez-vous passé à faire des activités modérées au cours des 7 derniers jours?",
            inputs: [
                {
                    id: "ipaq04heure",
                    label:  "heures(s) par jour",
                    type: "number",
                    min: 0,
                    max: 24,
                },
                {
                    id: "ipaq05min",
                    label:  "minutes par jour",
                    type: "number",
                    min: 0,
                    max: 59,
                }
            ],
            visibleIf: 'ipaq03',
            checkbox: true,
            checkboxLabel: "Je ne sais pas",
            checkboxId: "noneCheck02" 
        },
        {
            name: 'textbox04',
            type: 'textbox',
            text: "Pensez au temps que vous avez passé à marcher au cours des 7 derniers jours. Cela comprend la marche au travail et à la maison, la marche pour vous rendre d’un lieu à un autre, et tout autre type de marche que vous auriez pu faire pendant votre temps libre pour la détente, le sport ou les loisirs.",
            box: true,
        },
        {
            name: "ipaq05",
            type: "multiInput",
            title: "Au cours des <b>7 derniers jours</b>, combien y a-t-il eu de jours au cours desquels vous avez <b>marché</b> pendant <b>au moins 10 minutes d’affilée.</b>",
            inputs: [
                {
                    id: "ipaq05jours",
                    label:  "jours par semaine",
                    type: "number",
                    min: 0,
                    max: 7,
                },
            ],
            checkbox: true,
            checkboxLabel: "Je n’ai pas fait de marche",
            checkboxId: "noneCheck05" 
        },
        {
            name: "ipaq06",
            type: "multiInput",
            title: "Au total, combien de temps avez-vous passé à <b>marcher</b> au cours des <b>7 derniers jours</b>?",
            inputs: [
                {
                    id: "ipaq06heure",
                    label:  "heures(s) par jour",
                    type: "number",
                    min: 0,
                    max: 24,
                },
                {
                    id: "ipaq06min",
                    label:  "minutes par jour",
                    type: "number",
                    min: 0,
                    max: 59,
                }
            ],
            visibleIf: 'ipaq05',
            checkbox: true,
            checkboxLabel: "Je ne sais pas",
            checkboxId: "noneCheck02" 
        },
           {
            name: 'textbox05',
            type: 'textbox',
            text: "La dernière question porte sur le temps que vous avez passé assis pendant un jour de semaine, au cours des 7 derniers jours. Cela comprend le temps passé assis au travail, à la maison, lorsque vous étudiez et pendant votre temps libre. Il peut s’agir par exemple du temps passé assis à un bureau, chez des amis, à lire, à être assis ou allongé pour regarder la télévision.",
            box: true,
        },
        {
            name: "ipaq07",
            type: "multiInput",
            title: "Au cours des <b>7 derniers jours</b>, combien de temps avez-vous passé assis pendant un <b>jour de semaine</b>?",
            inputs: [
                {
                    id: "ipaq07jours",
                    label:  "jours par semaine",
                    type: "number",
                    min: 0,
                    max: 7,
                },
                {
                    id: "ipaq07min",
                    label:  "minutes par jour",
                    type: "number",
                    min: 0,
                    max: 59,
                }
            ],
            checkbox: true,
            checkboxLabel: "Je ne sais pas",
            checkboxId: "noneCheck07" 
        },
    ]
    }
   ]
}   
        
       // <input type="number" class="numberinput" id="q01" name="quantity" min="0" 
       // required> jours par semaine
       // </label>
        //<br>
        //<label><input class="checkbox" type="checkbox" id="noneCheck01" onclick="toggleDiv(quantityInput01)"> Je n’ai pas eu d’activité physique intense</label>
    




var FR_ipaq = {}
FR_ipaq.title = title;
FR_ipaq.survey_JSON = json;
FR_ipaq.shortTitle = shortTitle
FR_ipaq.QuestionnaireType = 'form'
//FR_IntakeForm_MusicJSON.Instructions01 = [
//    {        'page': '<p class="Instructions">Instructions are written here.'   }
//]
