var title = "Instrumental Activities of Daily Living Scale"

var instructions = ""

var reference = ""

var ReverseScoreDirection = [false]

var items = [
  {
    prompt: "Ability to Use Telephone", 
    name: "telephone", 
    options: ["Operates telephone on own initiative; looks up and dials numbers",
		"Dials a few well-known numbers",
		"Answers telephone, but does not dial",
		"Does not use telephone at all"
    ], 
    values: [1, 1, 1, 0],
    required:true
  },
  {
    prompt: "Shopping",
    name: "shopping",
    options: ["Takes care of all shopping needs independently",
		"Shops independently for small purchases",
		"Needs to be accompanied on any shopping trip",
		"Completely unable to shop"
	    ],
	  values: [1, 0, 0, 0],
    required: true
  },
  {
  	prompt: "Food Preparation",
  	name: "foodPreparation",
  	options:["Plans, prepares, and serves adequate meals independently",
		"Prepares adequate meals if supplied with ingredients",
		"Heats and serves prepared meals or prepares meals but does not maintain adequate diet",
		"Needs to have meals prepared and served"
		],
		values: [1, 0, 0, 0],
  	required: true
  },
  {
  	prompt: "Housekeeping",
  	name: "housekeeping",
  	options: ["Maintains house alone with occasion assistance (heavy work)",
		"Performs light daily tasks such as dishwashing, bed making",
		"Performs light daily tasks, but cannot maintain acceptable level of cleanliness",
		"Needs help with all home maintenance tasks",
		"Does not participate in any housekeeping tasks"
		],
		values: [1, 1, 1, 1, 0],
 	required: true
  },
  {
  	prompt: "Laundry",
  	name: "laundry",
  	options: ["Does personal laundry completely",
		"Launders small items, rinses socks, stockings, etc",
		"All laundry must be done by others"
		],
		values: [1, 1, 0],
  	required: true
  },
  {
  	prompt: "Mode of Transportation",
  	name: "transportation",
  	options: ["Travels independently on public transportation or drives own car",
		"Arranges own travel via taxi, but does not otherwise use public transportation",
		"Travels on public transportation when assisted or accompanied by another",
		"Travel limited to taxi or automobile with assistance of another",
		"Does not travel at all"
		],
		values: [1, 1, 1, 0, 0],
  	required: true
  },
  {
  	prompt: "Responsibility for Own Medicine",
  	name: "medicine",
  	options: ["Is responsible for taking medication in correct dosages at correct time",
		"Takes responsibility if medication is prepared in advance in separate dosages",
		"Is not capable of dispensing own medication"
		],
		values: [1, 0, 0],
  	required: true
  },
  {
  	prompt: "Ability to Handle Finances",
  	name: "finances",
  	options: ["Manages financial matters independently (budgets, writes checks, pays rent and bills, goes to bank); collects and keeps track of income",
		"Manages day-to-day purchases, but needs help with banking, major purchases, etc",
		"Incapable of handling money"
		],
		values: [1, 1, 0],
  	required: true
  }  
 ]

