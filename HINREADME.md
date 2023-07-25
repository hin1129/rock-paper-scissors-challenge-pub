============================================================
============================================================
Installing
Forked rock-paper-scissors-challenge folder from DF to my own GitHub account, then cloned the folder onto my local machine.
On VSC terminal, inside rock-paper-scissors-challenge folder, set up the framework/library with the following commands for development: npm install dotenv ejs express nodemon body-parser
and the following commands for testing: npm i mocha chai chai-http
Modified package.json to the following code:
"type": "module"
"test": "mocha --timeout 10000 --exit"

To run program: "nodemon"
To run tests: "npm test"
============================================================
============================================================

------------------------------------------------------
------------------------------------------------------
Initial thoughts
1 = enter player name
2 = user selects an option (rock/paper/scissors)
3 = computer selects a random option (rock/paper/scissors)
4 = display results/winner
5 = repeat step 2-4

Domain Model
Object || Property         || Message                || Output
Player ||  name@string     || generateRandomChoice() || @void
       ||  pcChoice@string || setChoice(string)      || @void

App flow
index > game > turn

Routes (.js) = http requests
index = start index
game = post request retrieve player name from form data
turn = post request retrieve player selection from form data

Views (.ejs) = html
index = DFAT member should be able to enter their name before the game
game = DFAT member will be presented the choices (rock, paper and scissors), DFAT member can choose one option
turn = game will choose a random option, winner will be declared
------------------------------------------------------
------------------------------------------------------

============================================================
============================================================
Tests

<!-- index -->
test 1 = get request - return 200 response if index page loads successfully
<!-- game -->
test 2 = post request - return 200 response if game page loads successfully
<!-- turn -->
test 3 = post request - return 200 response if turn page loads successfully
<!-- player -->
test 4 = generateRandomChoice method generates one of the 3 (rock, paper, scissors)
test 5 = setChoice method sets choice to player object
test 6 = takeDamage method takes health from player object if health is not 0
test 7 = takeDamage method avoids to take health from player object if health is 0
<!-- battle -->
test 8 = determineWinner method determines winner of game - draw
test 9 = determineWinner method determines winner of game - Player wins
test 10 = determineWinner method determines winner of game - PC wins
============================================================
============================================================

------------------------------------------------------
------------------------------------------------------
Other
------------------------------------------------------
------------------------------------------------------