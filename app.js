// "type": "module" cant use require
import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import { router as indexRouter } from './routes/index.js'
import { router as gameRouter } from './routes/game.js'
import { router as turnRouter } from './routes/turn.js'

// server
const app = express();
app.set('view engine', 'ejs'); //rendering ejs files
dotenv.config();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`ROCK PAPER SCISSORS app listening at http://localhost:${port}`)
});

// middleware
app.use(express.urlencoded({ extended: true })); //parse URL-encoded data from incoming requests (req.body object), specifically for POST/PUT (form data - usernames/passwords)
app.use(bodyParser.json()); //parse application/json data from incoming requests (can be commended out)
// import multer from 'multer';
// var upload = multer(); //handling forms with images/videos
// app.use(upload.array());
// app.use(express.static('public')); //serve static files (image/css/client-side js) from public directory

// routes
app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);

export default app;