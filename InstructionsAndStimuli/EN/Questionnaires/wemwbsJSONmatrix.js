
var title = "WEMWBS"
var shortTitle = 'WEMWBS'  
// All questions use the same direction so enter that single flag as an array of size 1
var survey_JSON = 
    { 
        showQuestionNumbers: "off",
        showCompletedPage: false,
        elements: [
            { 
                type: 'matrix',
                name: 'wemwbs',
                title: 'Below are some statements about feelings and thoughts. Please tick the box that best describes your experience over the last 2 weeks.',
                alternateRows: true,
                isAllRowRequired: true,
                
                rows: [

                    {value: 'wemwbs001', text: 'I\'ve been feeling optimistic about the future'},
                    {value: 'wemwbs002', text: 'I\'ve been feeling useful'},
                    {value: 'wemwbs003', text: 'I\'ve been feeling relaxed'},
                    {value: 'wemwbs004', text: 'I\'ve been feeling interested in other people'},
                    {value: 'wemwbs005', text: 'I\'ve had energy to spare'},
                    {value: 'wemwbs006', text: 'I\'ve been dealing with problems well'},
                    {value: 'wemwbs007', text: 'I\'ve been thinking clearly'},
                    {value: 'wemwbs008', text: 'I\'ve been feeling good about myself'},
                    {value: 'wemwbs009', text: 'I\'ve been feeling close to other people'},
                    {value: 'wemwbs010', text: 'I\'ve been feeling confident'},
                    {value: 'wemwbs011', text: 'I\'ve been able to make up my own mind about things'},
                    {value: 'wemwbs012', text: 'I\'ve been feeling loved'},
                    {value: 'wemwbs013', text: 'I\'ve been interested in new things'},
                    {value: 'wemwbs014', text: 'I\'ve been feeling cheerful'},
                ],
                columns: [
                    { "value": 1, text: 'None of the time' }, 
                    { "value": 2, text: 'Rarely' },
                    { "value": 3, text: 'Some of the time' },
                    { "value": 4, text: 'Often' }, 
                    { "value": 5, text: 'All of the time'}
                ],
            }
        ]
    }

var references = ""

var notes = ""

var EN_wemwbsJSONmatrix = {}
EN_wemwbsJSONmatrix.title = title
EN_wemwbsJSONmatrix.shortTitle = shortTitle
EN_wemwbsJSONmatrix.survey_JSON = survey_JSON
//EN_panasJSON.description = instructions
EN_wemwbsJSONmatrix.QuestionnaireType = 'matrix'
EN_wemwbsJSONmatrix.references = references
EN_wemwbsJSONmatrix.notes = notes


