============================================================
============================================================
Installing
Forked rock-paper-scissors-challenge folder from DF to my own GitHub account, then cloned the folder onto my local machine.
On VSC terminal, inside rock-paper-scissors-challenge folder, set up the framework/library with the following commands for development: npm install dotenv ejs express nodemon body-parser multer
and the following commands for testing: npm i mocha chai chai-http
Modified package.json to the following code: "type": "module".
To run program: "npm start"
To run tests: "npm test"
============================================================

============================================================

------------------------------------------------------
------------------------------------------------------
Initial thoughts
1 = enter player name
2 = select rock or paper or scissors
3 = game will choose a random option
4 = compare result
5 = repeat selection and comparison

Domain Model
Object || Property || Message || Output
Player ||  name, selection    ||     ||
Battle ||  player  ||     ||

App flow
index > game > turn

Routes = get html elements
index = start index
game = 
turn = 

Views
index = DFAT member should be able to enter their name before the game, 
game = DFAT member will be presented the choices (rock, paper and scissors), DFAT member can choose one option
turn = game will choose a random option, winner will be declared
------------------------------------------------------

------------------------------------------------------

============================================================
============================================================

============================================================
============================================================

------------------------------------------------------
------------------------------------------------------
Tests
<!-- header.test.jsx -->
Test 1 = header should match the snapshot

<!-- footer.test.jsx -->
Test 1 = footer should match the snapshot

<!-- body.test.jsx -->
Test 1 = useState, getNewsArticle, useEffect', async

<!-- NewsArticle.test.jsx -->
Test 1 = render the correct headline

<!-- getRequest.test.jsx -->
Test 1 = getRequest function same as getNewsArticle function in body
------------------------------------------------------
------------------------------------------------------

============================================================
============================================================
Other
Cant get body.test.jsx and NewsArticle.test.jsx working

============================================================
============================================================