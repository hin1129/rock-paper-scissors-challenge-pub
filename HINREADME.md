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
2 = user select rock or paper or scissors
3 = computer will choose a random option (rock or paper or scissors)
4 = display both results
5 = repeat step 2-4

Domain Model
Object || Property         || Message                || Output
Player ||  name@string     || generateRandomChoice() || @void
       ||  pcChoice@string || setChoice(string)      || @void


App flow
index > game > turn

Routes - .js
index = start index
game = post request retrieve player name from form data
turn = post request retrieve player selection from form data

Views - .ejs
index = DFAT member should be able to enter their name before the game, 
game = DFAT member will be presented the choices (rock, paper and scissors), DFAT member can choose one option
turn = game will choose a random option, winner will be declared
------------------------------------------------------
------------------------------------------------------

============================================================
============================================================
Tests

<!-- index -->
test 1 = get request - return 200 response if index page loads succesfully
<!-- game -->
test 2 = post request - return 200 response if game page loads succesfully
<!-- turn -->
test 3 = post request - return 200 response if turn page loads succesfully
<!-- player -->
test 4 = player object name property
test 5 = player object pcChoice property
test 6 = generateRandomChoice method generates if one of the 3 (rock, paper, scissors)
============================================================
============================================================

------------------------------------------------------
------------------------------------------------------
Other

------------------------------------------------------
------------------------------------------------------