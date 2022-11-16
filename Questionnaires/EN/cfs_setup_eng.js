var title = "Cognitive Flexibility Scale"

var scale01 = [
	"Strongly Agree",
	"Agree",
	"Slightly Agree",
	"Slightly Disagree",
	"Disagree",
	"Strongly Disagree"
	]

var ReverseScoreDirection = [false, true, true, false, true, false, false, false, false, true, false, false]

var items = [
	{prompt: "I can communicate an idea in many different ways.", labels: scale01},
	{prompt: "I avoid new and unusual situations.", labels: scale01},
	{prompt: "I feel like I never get to make decisions.", labels: scale01},
	{prompt: "I can find workable solutions to seemingly unsolvable problems.", labels: scale01},
	{prompt: "I seldom have choices when deciding how to behave.", labels: scale01},
	{prompt: "I am willing to work at creative solutions to problems.", labels: scale01},
	{prompt: "In any given situation, I am able to act appropriately.", labels: scale01},
	{prompt: "My behavior is a result of conscious decisions that I make.", labels: scale01},
	{prompt: "I have many possible ways of behaving in any given situation.", labels: scale01},
	{prompt: "I have difficulty using my knowledge on a given topic in real life situations.", labels: scale01},
	{prompt: "I am willing to listen and consider alternatives for handling a problem.", labels: scale01},
	{prompt: "I have the self-confidence necessary to try different ways of behaving. ", labels: scale01}
	]

var instructions = "The following statements deal with your beliefs and feelings about your own behavior. Read each statement and respond by circling the number that best represents your agreement with each statement. "

var reference = "Martin, M. M., & Rubin, R. B. (1995). A New Measure of Cognitive Flexibility. Psychological Reports, 76(2), 623–626. doi:10.2466/pr0.1995.76.2.623 "