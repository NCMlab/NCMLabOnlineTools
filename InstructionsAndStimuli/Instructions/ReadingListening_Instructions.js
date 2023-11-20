
var EN_Instructions = {}
var List01 = []
List01.push({stim:"Rice is often served in round bowls."})
List01.push({stim:"The birch canoe slid on the smooth planks."})
List01.push({stim:"Glue the sheet to the dark blue background."})
List01.push({stim:"It's easy to tell the depth of a well."})
List01.push({stim:"These days a chicken leg is a rare dish."})
List01.push({stim:"The juice of lemons makes fine punch."})
List01.push({stim:"The box was thrown beside the parked truck."})
List01.push({stim:"The hogs were fed chopped corn and garbage."})
List01.push({stim:"4 hours of steady work faced us."})
/*
List01.push({stim:"A large size in stockings is hard to sell."})
List01.push({stim:"The boy was there when the sun rose."})
List01.push({stim:"A rod is used to catch pink salmon."})
List01.push({stim:"The source of the huge river is the clear spring."})
List01.push({stim:"Kick the ball straight and follow through."})
List01.push({stim:"Help the woman get back to her feet."})
List01.push({stim:"A pot of tea helps to pass the evening."})
List01.push({stim:"Smoky fires lack flame and heat."})
List01.push({stim:"The soft cushion broke the man's fall."})
List01.push({stim:"The salt breeze came across from the sea."})
List01.push({stim:"The girl at the booth sold fifty bonds."})*/
EN_Instructions.List = List01
EN_Instructions.Instructions01 = [
    {'page':'<p class="Instructions">To ensure the computer can accurately hear and understand you, please, clearly read out loud each of the sentences on the next few screens.'},
]
EN_Instructions.WelcomeText = [{'page': '<p class="Instructions">This is a Reading Test Task.</p>'}]
EN_Instructions.ThankYouText = [{'page': '<p class="Instructions">Thank you'}]
add('EN_Instructions_Default', function(){ Instructions = EN_Instructions});
/*
// ===================================================================================
List01.push({'stim':"La lampe de néon rouge irise ses cheveux."})
List01.push({'stim':"La nacelle du ballon tire sa souplesse de l’osier."})
List01.push({'stim':"Devine qui a volé le précieux collier de jade."})
List01.push({'stim':"C’est facile d’atteindre la branche en sautant du muret."})
List01.push({'stim':"Ne collez jamais d’affiche sur le mur de la poste."})
List01.push({'stim':"Découpe de fines lamelles de cette truffe noire."})
List01.push({'stim':"Une croisière dans un grand bateau, c’est un bonheur parfait."})
List01.push({'stim':"Une brèche dans le mur laissait entrer de l’air."})
List01.push({'stim':"Le groupe d’amis s’est quitté devant le kiosque."})
List01.push({'stim':"La voiture de course partit en trombe sur la piste."})
List01.push({'stim':"Note sur le papier le poids de la bonbonne de gaz."})
List01.push({'stim':"Prends ce chiffon pour enlever la graisse de ton visage."})
List01.push({'stim':"La source de la rivière boueuse est un ruisseau clair."})
List01.push({'stim':"Tire la fléchette et inscris tes points sur le tableau."})
List01.push({'stim':"Aide la femme à monter à l’arrière du tramway."})
List01.push({'stim':"Ils ont enfin trouvé une place à la crèche publique."})
List01.push({'stim':"L’affaire reste étrange pour les vieux et les sages."})
List01.push({'stim':"Il a un cou propre sur un col net et soigné."})
List01.push({'stim':"Son dernier congé dura deux semaines."})
List01.push({'stim':"L’idée est de coudre ensemble ces morceaux de tissus."})

var FR_Instructions_Default = {}
FR_Instructions_Default.List = List01
FR_Instructions_Default.Instructions01 = [
    {'page':'<p class="Instructions">To ensure the computer can accurately hear and understand you, please, clearly read out loud each of the sentences on the next few screens. <p>Press next to start</p>'},
]
FR_Instructions_Default.WelcomeText = [{'page': '<p class="Instructions">This is a Reading Test Task.</p>'}]
FR_Instructions_Default.ThankYouText = [{'page': '<p class="Instructions">Thank you'}]
add('FR_Instructions_Default', function(){ Instructions = FR_Instructions_Default});
*/