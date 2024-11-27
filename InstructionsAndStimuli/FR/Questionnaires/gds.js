
var EN_pages_04 = [
    [
        {
            type: 'likert-table',
            prompt: ' ',
            accuracy: [1,1,1,1],
            statements: [
                {prompt: 'Êtes-vous dans lensemble satisfait de votre vie ?', name: 'gds001'},
                {prompt: 'Avez-vous renoncé à nombre de vos activités et intérêts ?', name: 'gds002'},
                {prompt: 'Avez-vous le sentiment que votre vie est vide ?', name: 'gds003'},
                {prompt: 'Vous ennuyez-vous souvent ?', name: 'gds004'},
                {prompt: 'Êtes-vous de bonne humeur la plupart du temps ?', name: 'gds005'},
                {prompt: 'Avez-vous peur quil ne vous arrive quelque chose de mauvais ?', name: 'gds006'},
                {prompt: 'Êtes-vous heureux/-se la plupart du temps ?', name: 'gds007'},
                {prompt: 'Vous sentez-vous souvent faible et dépendant ?', name: 'gds008'},
                {prompt: 'Préférez-vous rester chez vous, plutôt que de sortir et faire quelque chose de nouveau ?', name: 'gds009'},
                {prompt: 'Estimez-vous avoir plus de troubles de la mémoire que la plupart des gens ?', name: 'gds010'},
                {prompt: 'Vous dites-vous quil est merveilleux dêtre vivant en ce moment ?', name: 'gds011'},
                {prompt: 'Vous sentez-vous inutile tel que vous êtes aujourdhui ?', name: 'gds012'},
                {prompt: 'Vous sentez-vous plein dénergie ?', name: 'gds013'},
                {prompt: 'Avez-vous limpression que votre situation est désespérée ?', name: 'gds014'},
                {prompt: 'Croiyez-vous que la plupart des gens soient plus à laise que vous ?', name: 'gds015'},
                ],
            options: ['Oui', 'Non'],
            required: true
        }
    ]
]

var EN_gds_04 = {}
EN_gds_04.title = 'Échelle de Dépression Gériatrique'
EN_gds_04.shortTitle = 'GDS'
EN_gds_04.description = "Cocher la réponse qui convient"
EN_gds_04.pages = EN_pages_04
EN_gds_04.QuestionnaireType = 'YesNoLikertTable'
// Yes = 0, No = 1
// Add one point for answers equal to the following responses
EN_gds_04.values = [0,0,0,0]


