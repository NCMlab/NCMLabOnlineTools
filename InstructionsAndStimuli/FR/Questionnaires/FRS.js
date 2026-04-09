
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
      title: "Instructions : Répondre aux questions, puis calculer le risque de maladie vasculaire sur 10 ans.",
       elements: [
         {
                type: "radiogroup",
                name: "FRS01",
                title: "Quel est votre sexe assigné à la naissance : ",
                choices: [
                    { value: 1, text: "Homme" },
                    { value: 2, text: "Femme" },
                ],
                isRequired: true
            },
            {
                name: "FRS02",
                type: "input",
                title: "Quel âge avez-vous?",
                units: "ans",
                inputType: "number",
                defaultValue: '',
                isRequired: true
            },
            {
                name: "FRS03",
                type: "input",
                title: "Cholestérol HDL (HDL-C)",
                inputType: "number",
                units: "mmol/L",
                defaultValue: '',
                isRequired: true
            },
            {
                name: "FRS04",
                type: "input",
                title: "Cholestérol Total",
                inputType: "number",
                units: "mmol/L (ou mg/dL)",
                defaultValue: '',
                isRequired: true
            },
            {
                type: "radiogroup",
                name: "FRS05",
                title: "Traitement pour l'hypertension",
                choices: [
                    { value: 1, text: "OUI" },
                    { value: 2, text: "NON" },
                ],
                isRequired: true
            },
                   {
                name: "FRS06",
                type: "input",
                title: "Pression Artérielle Systolique",
                inputType: "number",
                units: "mmHg",
                defaultValue: '',
                isRequired: true
            },
            {
                type: "radiogroup",
                name: "FRS07",
                title: "Tabagisme",
                choices: [
                    { value: 1, text: "OUI" },
                    { value: 2, text: "NON" },
                ],
                isRequired: true
            },
            {
                type: "radiogroup",
                name: "FRS08",
                title: "Diabète",
                choices: [
                    { value: 1, text: "OUI" },
                    { value: 2, text: "NON" },
                ],
                isRequired: true
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
    




var FR_FRS = {}
FR_FRS.title = title;
FR_FRS.survey_JSON = json;
FR_FRS.shortTitle = shortTitle
FR_FRS.QuestionnaireType = 'form'
//FR_IntakeForm_MusicJSON.Instructions01 = [
//    {        'page': '<p class="Instructions">Instructions are written here.'   }
//]
