var title = "Beck Depression Index"
var instructions = "This questionnaire consists of 21 groups of statements. Please read each group of statements carefully. And then pick out the one statement in each group that best describes the way you have been feeling during the past two weeks, including today. Circle the number beside the statement you have picked. If several statements in the group seem to apply equally well, circle the highest number for that group."
var reference = ""
var values = [0, 1, 2, 3]
var pages = [
				[
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi01_sadness',
						options: 
							["I do not feel sad.", 
							"I feel sad.", 
							"I am sad all the time and I can't snap out of it.", 
							"I am so sad and unhappy that I can't stand it."], 
						required: false,
						alert: "I am so sad and unhappy that I can't stand it.",
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi02_pessimism',
						options: 
							["I am not particularly discouraged about the future.",
							"I feel discouraged about the future.",
							"I feel I have nothing to look forward to.",
							"I feel the future is hopeless and that things cannot improve."], 
						required: false,
						alert: "I feel the future is hopeless and that things cannot improve."
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi03_PastFailure',
						options: 
							["I do not feel like a failure.",
							"I feel I have failed more than the average person.",
							"As I look back on my life, all I can see is a lot of failures.",
							"I feel I am a complete failure as a person."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi04_LossPleasure',
						options: 
							["I get as much satisfaction out of things as I used to.",
							"I don't enjoy things the way I used to.",
							"I don't get real satisfaction out of anything anymore.",
							"I am dissatisfied or bored with everything."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi05_GuiltyFeelings',
						options: 
							["I don't feel particularly guilty.",
							"I feel guilty a good part of the time.",
							"I feel quite guilty most of the time.",
							"I feel guilty all of the time."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi06_PunishmentFeelings',
						options: 
							["I don't feel I am being punished.",
							"I feel I may be punished.",
							"I expect to be punished.",
							"I feel I am being punished."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi07_Self-Dislike',
						options: 
							["I don't feel disappointed in myself.",
							"I am disappointed in myself.",
							"I am disgusted with myself.",
							"I hate myself."], 
						required: false,
						alert: "I hate myself."
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi08_SelfCriticalness',
						options: 
							["I don't feel I am any worse than anybody else.",
							"I am critical of myself for my weaknesses or mistakes.",
							"I blame myself all the time for my faults.",
							"I blame myself for everything bad that happens."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi09_SuicidalThoughts',
						options: 
							["I don't have any thoughts of killing myself.",
							"I have thoughts of killing myself, but I would not carry them out.",
							"I would like to kill myself.",
							"I would kill myself if I had the chance."], 
						required: false,
						alert: "I would kill myself if I had the chance."
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi10_Crying',
						options: 
							["I don't cry any more than usual.",
							"I cry more now than I used to.",
							"I cry all the time now.",
							"I used to be able to cry, but now I can't cry even though I want to."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi11_Agitation',
						options: 
							["I am no more irritated by things than I ever was.",
							"I am slightly more irritated now than usual.",
							"I am quite annoyed or irritated a good deal of the time.",
							"I feel irritated all the time."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi12_LossInterest',
						options: 
							["I have not lost interest in other people.",
							"I am less interested in other people than I used to be.",
							"I have lost most of my interest in other people.",
							"I have lost all of my interest in other people."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi13_Indecisiveness',
						options: 
							["I make decisions about as well as I ever could.",
							"I put off making decisions more than I used to.",
							"I have greater difficulty in making decisions more than I used to.",
							"I can't make decisions at all anymore."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi14_Worthlessness',
						options: 
							["I don't feel that I look any worse than I used to.",
							"I am worried that I am looking old or unattractive.",
							"I feel there are permanent changes in my appearance that make me look unattractive.",
							"I believe that I look ugly."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi15_LossEnergy',
						options: 
							["I can work about as well as before.",
							"It takes an extra effort to get started at doing something.",
							"I have to push myself very hard to do anything.",
							"I can't do any work at all."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi16_Sleep',
						options: 
							["I can sleep as well as usual.",
							"I don't sleep as well as I used to.",
							"I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.",
							"I wake up several hours earlier than I used to and cannot get back to sleep."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi17_Tired',
						options: 
							["I don't get more tired than usual.",
							"I get tired more easily than I used to.",
							"I get tired from doing almost anything.",
							"I am too tired to do anything."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi18_Appetite',
						options: 
							["My appetite is no worse than usual.",
							"My appetite is not as good as it used to be.",
							"My appetite is much worse now.",
							"I have no appetite at all anymore."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi19_WeightLoss',
						options: 
							["I haven't lost much weight, if any, lately.",
							"I have lost more than five pounds.",
							"I have lost more than ten pounds.",
							"I have lost more than fifteen pounds."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi20_PersonalHealth',
						options: 
							["I am no more worried about my health than usual.",
							"I am worried about physical problems like aches, pains, upset stomach, or constipation.",
							"I am very worried about physical problems and it's hard to think of much else.",
							"I am so worried about my physical problems that I cannot think of anything else."], 
						required: false,
					},
					{
						type: 'multi-choice',
						prompt: ' ', 
						name: 'bdi21_InterestSex',
						options: 
							["I have not noticed any recent change in my interest in sex.",
							"I am less interested in sex than I used to be.",
							"I have almost no interest in sex.",
							"I have lost interest in sex completely."], 
						required: false,
					},
				]
			]	

var bdi = {}
bdi.title = title
bdi.description = "Some statements that people have used to describe their feelings are given below. Read each statement and then circle the appropriate number to the right of the statement to indicate how you generally feel. There are no right or wrong answers. Do not spend too much time on a single statement, but give the answer that comes closest to how you generally feel."
bdi.pages = pages
bdi.values = values
bdi.QuestionnaireType = 'multi-choice'
bdi.AlertLimit = 17
// Notes:
//  1-10____________________These ups and downs are considered normal
//  11-16___________________ Mild mood disturbance
//  17-20___________________Borderline clinical depression
//  21-30___________________Moderate depression
//  31-40___________________Severe depression
//  over 40__________________Extreme depression 


// =================================================
/*
Nom:______________________________ Date:_________________
d'énoncés, vous en trouvez plusieurs qui semblent décrire également bien ce que vous
ressentez, choisissez celui qui a le chiffre le plus élevé et encerclez ce chiffre. Assurez-vous
bien de ne choisir qu'un seul énoncé dans chaque groupe, y compris le groupe #16 et #18.
{
	type: 'multi-choice',
	prompt: ' ', 
	name: 'bdi01_sadness',
	options: 
		['Je ne me sens pas triste.',
		'Je me sens très souvent triste.',
		'Je suis tout le temps triste.',
		'Je suis si triste ou si malheureux(se) que ce n\'est pas supportable.'],
		required: true,
},
{
	type: 'multi-choice',
	prompt: ' ', 
	name: 'bdi02_pessimism',
	options: 
		[
			'Je ne suis pas découragé(e) face à mon avenir.',
			'Je me sens plus découragé(e) qu'avant face à mon avenir.',
			'Je ne m'attends pas à ce que les choses s'arrangent pour moi.',
			'J\'ai le sentiment que mon avenir est sans espoir et qu'il ne peut qu'empirer.'
		]
},
0 Je ne suis pas découragé(e) face à mon avenir.
1 Je me sens plus découragé(e) qu'avant face à mon avenir.
2 Je ne m'attends pas à ce que les choses s'arrangent pour moi.
3 J'ai le sentiment que mon avenir est sans espoir et qu'il ne peut qu'empirer.
3 Échecs dans le passé
0 Je n'ai pas le sentiment d'avoir échoué dans la vie, d'être un(e) raté(e).
1 J'ai échoué plus souvent que je n'aurais dû.
2 Quand je pense à mon passé, je constate un grand nombre d'échecs.
3 J'ai le sentiment d'avoir complètement raté ma vie.
4 Perte de plaisir
0 J'éprouve toujours autant de plaisir qu'avant aux choses qui me plaisent.
1 Je n'éprouve pas autant de plaisir aux choses qu'avant.
2 J'éprouve très peu de plaisir aux choses qui me plaisaient habituellement.
3 Je n'éprouve aucun plaisir aux choses qui me plaisaient habituellement.
5 Sentiments de culpabilité
0 Je ne me sens pas particulièrement coupable.
1 Je me sens coupable pour bien des choses que j'ai faites ou que j'aurais dû faire.
2 Je me sens coupable la plupart du temps.
3 Je me sens tout le temps coupable.
Encerclez alors le chiffre placé devant l'énoncé que vous avez choisi. Si, dans un groupe
BDI-II
Ce questionnaire comporte 21 groupes d'énoncés. Veuillez lire avec soin chacun de ces
groupes puis, dans chaque groupe, choisissez l'énoncé qui décrit le mieux comment vous
vous êtes senti(e) au cours des deux dernières semaines, incluant aujourd'hui.
Nom:______________________________ Date:_________________
6 Sentiment d'être puni(e)
0 Je n'ai pas le sentiment d'être puni(e).
1 Je sens que je pourrais être puni(e).
2 Je m'attends à être puni(e).
3 J'ai le sentiment d'être puni(e).
7 Sentiments négatifs envers soi-même
0 Mes sentiments envers moi-même n'ont pas changé.
1 J'ai perdu confiance en moi.
2 Je suis déçu(e) par moi-même.
3 Je ne m'aime pas du tout.
8 Attitude critique envers soi
0 Je ne me blâme pas ou ne me critique pas plus que d'habitude.
1 Je suis plus critique envers moi-même que je ne l'étais.
2 Je me reproche tous mes défauts.
3 Je me reproche tous les malheurs qui arrivent.
9 Pensées ou désirs de suicide
0 Je ne pense pas du tout à me suicider.
1 Il m'arrive de penser à me suicider, mais je ne le ferai pas.
2 J'aimerais me suicider.
3 Je me suiciderais si l'occasion se présentait.
10 Pleurs
0 Je ne pleure pas plus qu'avant.
1 Je pleure plus qu'avant.
2 Je pleure pour la moindre petite chose.
3 Je voudrais pleurer mais je ne suis pas capable.
11 Agitation
0 Je ne suis pas plus agité(e) ou plus tendu(e) que d'habitude.
1 Je me sens plus agité(e) ou plus tendu(e) que d'habitude.
2 Je suis si agité(e) ou tendu(e) que j'ai du mal à rester tranquille.
3 Je suis si agité(e) ou tendu(e) que je dois continuellement bouger ou faire quelque chose.
12 Perte d'intérêt
0 Je n'ai pas perdu d'intérêt pour les gens ou pour les activités.
1 Je m'intéresse moins qu'avant aux gens et aux choses.
2 Je ne m'intéresse presque plus aux gens et aux choses.
3 J'ai du mal à m'intéresser à quoique ce soit.
Nom:______________________________ Date:_________________
13 Indécision
0 Je prends des décisions toujours aussi bien qu'avant.
1 Il m'est plus difficile que d'habitude de prendre des décisions.
2 J'ai beaucoup plus de mal qu'avant à prendre des décisions.
3 J'ai du mal à prendre n'importe quelle décision.
14 Dévalorisation
0 Je pense être quelqu'un de valable.
1 Je ne crois pas avoir autant de valeur ni être aussi utile qu'avant.
2 Je me sens moins valable que les autres.
3 Je sens que je ne vaux absolument rien.
15 Perte d'énergie
0 J'ai toujours autant d'énergie qu'avant.
1 J'ai moins d'énergie qu'avant.
2 Je n'ai pas assez d'énergie pour pouvoir faire grand-chose.
3 J'ai trop peu d'énergie pour faire quoi que ce soit.
16 Modifications dans les habitudes de sommeil
0 Mes habitudes de sommeil n'ont pas changé.
1a Je dors un peu plus que d'habitude.
1a Je dors un peu moins que d'habitude.
2b Je dors beaucoup plus que d'habitude.
2b Je dors beaucoup moins que d'habitude.
3c Je dors presque toute la journée.
3c Je me réveille une ou deux heures plus tôt et je suis incapable de me rendormir.
17 Irritabilité
0 Je ne suis pas plus irritable que d'habitude.
1 Je suis plus irritable que d'habitude.
2 Je suis beaucoup plus irritable que d'habitude.
3 Je suis constamment irritable.
18 Modifications de l'appétit
0 Mon appétit n'a pas changé.
1a J'ai un peu moins d'appétit que d'habitude.
1b J'ai un peu plus d'appétit que d'habitude.
2a J'ai beaucoup moins d'appétit que d'habitude.
2b J'ai beaucoup plus d'appétit que d'habitude.
3a Je n'ai pas d'appétit du tout.
3b J'ai constamment envie de manger.
Nom:______________________________ Date:_________________
19 Difficulté à se concentrer
0 Je parviens à me concentrer toujours aussi bien qu'avant.
1 Je ne parviens pas à me concentrer aussi bien que d'habitude.
2 J'ai du mal à me concentrer longtemps sur quoi que ce soit.
3 Je me trouve incapable de me concentrer sur quoi que ce soit.
20 Fatigue
0 Je ne suis pas plus fatiqué(e) que d'habitude.
1 Je me fatigue plus facilement que d'habitude.
2 Je suis trop fatigué(e) pour faire un grand nombre de choses que je faisais avant.
3 Je suis trop fatigué(e) pour faire la plupart des choses que je faisais avant.
21 Perte d'intérêt pour le sexe
0 Je n'ai pas noté de changement récent dans mon intérêt pour le sexe.
1 Le sexe m'intéresse moins qu'avant.
2 Le sexe m'intéresse beaucoup moins maintenant.
3 J'ai perdu tout intérêt pour le sexe.
*/