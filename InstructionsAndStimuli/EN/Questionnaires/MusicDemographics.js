
var FormTitle = 'MHRI Intake Form'
var pages = [
    [
        {
            type: 'text',
            prompt: 'Gender',
            name: 'Gender',
            required: true,
        },
        {
            type: 'text',
            prompt: 'Age',
            name: 'Age',
            required: true,
        },
        {
            type: 'text',
            prompt: 'Height (cm or feet/inches)',
            name: 'Height',
            required: true,
        },
        {
            type: 'text',
            prompt: 'Weight (kg or lbs)',
            name: 'Weight',
            required: true,
        },
    ]
]

var EN_IntakeForm_Music = {}
EN_IntakeForm_Music.title = FormTitle;
EN_IntakeForm_Music.pages = pages;
EN_IntakeForm_Music.Instructions01 = [
    {
        'page': '<p class="Instructions">Instructions are written here.',
    }
]
add('EN_Instructions_Music', function(){ Instructions = EN_IntakeForm_Music });
/*
Gender

Age

Height (cm or feet/inches)

Weight (kg or lbs)

What is the highest level of education you have completed/
No formal education
High school diploma or equivalent
College or Trade school
Bachelor’s degree
Master’s degree
Doctoral degree
Other: __________________

What is your employment status?
Employed full-time
Employed part-time
Retired
Unemployed
Other: ___________________

What type of work do you do (or did you do before retirement)?

Do you live alone or with others?
Alone
With spouse / partner
With family members
With caregivers
In assisted living facility
Other: ___________________

What is your primary language(s)?

Are there any language or communication challenges you have?
Yes
No
If yes, please specify:
1.11
What is your ethnic background (you may select more than one)
European (e.g., white)
Asian (e.g., Chinese, Japanese, Korean, South-east Asian)
East Indian, Pakistani
African-American/Black/Caribbean
Hispanic
Middle-Eastern
First Nations, Métis, Inuit
Other: ________
4
1.12
What is your marital status?
Single
Married
Divorced
Widowed
Other (please specify): __________________________
1.13
What is your annual household income?
Less than $20,000
$20,000 - $40,000
$40,001 - $60,000
$60,001 - $80,000
$80,001 - $100,000
Above $100,000
SECTION 2: MEDICAL INFORMATION
2.1
Have you received a diagnosis of dementia or cognitive decline?
Yes
No
Not sure
2.2
If yes, how long ago were you diagnosed?
2.3
If yes, what type of dementia (or cognitive decline), if known?
2.4
Do you have hearing loss?
Yes
No
Not sure
If yes:
Bilateral
Unilateral
Not sure
Level of hearing loss:
Mild
Moderate
Severe
Not sure
5
2.5
Do you have any other health issues?
Yes
No
If yes, please explain:
SECTION 3: HABITS
3.1
How often do you exercise per week?
3.2
Have you exercised in the last 24 hours?
Yes
No
3.3
Do you smoke, or have you smoked in the past?
Currently smoke
Haven’t smoked for more than 1 year
Never
Unknown
3.4
If you smoke, or have smoked regularly in the past:
Year started: _________
Year quit (leave blank if you still smoke):
__________
Approximate number of packs per day:
__________
3.5
Alcohol consumption
None
Less than 2 drinks per day
2 to 4 drinks per day
More than 4 drinks per day
6
SECTION 4: MUSIC EXPERIENCE
4.1
Have you engaged in music and movement classes before?
Yes
No
If yes, please describe your previous experience (what type of class and for how long):
4.2
Have you participated in group music classes before?
Yes
No
If yes, please describe your previous experience (what type of class and for how long):
4.3
Have you been in a choir before?
Yes
No
If yes, please describe your previous experience (what type of choir, and for how long):
4.4
Do you have any other music experience (i.e. have you played a musical instrument at any time in your life on a regular basis)?
Yes
No
4.5
If yes, please answer the following:
Which instrument(s):
At what age did you start?
For how long did you play this instrument (years)?
Do you still play it?
7
SECTION 5: ADDITIONAL COMMENTS
5.1
Do you have any additional comments or information that you think might be relevant to this study and/or music classes?
THANK YOU FOR TAKING THE TIME TO FILL OUT THIS FORM