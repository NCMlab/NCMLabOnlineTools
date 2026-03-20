
var title = "Questionnaire démographique"
var shortTitle = 'Sleep CIMAQ'  
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
            name: "ipaq01",
            type: "multiInput",
            title: "Au cours des 7 derniers jours, combien y a-t-il eu de jours au cours desquels vous avez fait des activités physiques intenses comme porter des charges lourdes, bêcher, faire du VTT ou jouer au football ? ",
            inputs: [
                {
                    id: "q01jour",
                    label:  "jours par semaine",
                    type: "number",
                    min: 0,
                    max: 7,
                },
                
            ],
            checkbox: true,
            checkboxLabel: "Je n\’ai pas eu d\’activité physique intense",
            checkboxId: "noneCheck02" 
        },
        {
            name: "ipaq02",
            type: "multiInput",
            title: "Au total, combien de temps avez-vous passé à faire des activités intenses au cours des 7 derniers jours ?",
            inputs: [
                {
                    id: "q02heure",
                    label:  "heures(s) par jour",
                    type: "number",
                    min: 0,
                    max: 24,
                },
                {
                    id: "q02min",
                    label:  "minutes par jour",
                    type: "number",
                    min: 0,
                    max: 59,
                }
            ],
            checkbox: true,
            checkboxLabel: "Je ne sais pas",
            checkboxId: "noneCheck02" 
        },
        {
            name: 'textbox01',
            type: 'textbox',
            text: "Pensez à toutes les activités <b>modérées</b> que vous avez faites au cours des 7 derniers jours. Les activités physiques modérées font référence aux activités qui vous demandent un effort physique modéré et vous font respirer un peu plus difficilement que normalement. Pensez seulement aux activités que vous avez effectuées pendant au moins 10 minutes d’affilée.",
        },
        {
            name: "ipaq03",
            type: "multiInput",
            title: "Au cours des 7 derniers jours, combien y a-t-il eu de jours au cours desquels vous avez fait des activités physiques modérées comme porter des charges légères, passer l’aspirateur, faire du vélo tranquillement, ou jouer au volley- ball ? Ne pas inclure la marche.",
            inputs: [
                {
                    id: "q03jours",
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
                    id: "q04heure",
                    label:  "heures(s) par jour",
                    type: "number",
                    min: 0,
                    max: 24,
                },
                {
                    id: "q05min",
                    label:  "minutes par jour",
                    type: "number",
                    min: 0,
                    max: 59,
                }
            ],
            checkbox: true,
            checkboxLabel: "Je ne sais pas",
            checkboxId: "noneCheck02" 
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
FR_ipaq.QuestionnaireType = 'Varied'
//FR_IntakeForm_MusicJSON.Instructions01 = [
//    {        'page': '<p class="Instructions">Instructions are written here.'   }
//]
