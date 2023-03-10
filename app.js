// "type": "module" cant use require
// const express = require('express');
import express from 'express';
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// const indexRouter = require('./routes/index.js');
// const gameRouter = require('./routes/game.js');
// const turnRouter = require('./routes/turn.js');
import { router as indexRouter } from './routes/index.js'
import { router as gameRouter } from './routes/game.js'
import { router as turnRouter } from './routes/turn.js'
app.use('/', indexRouter);
app.use('/game', gameRouter);
app.use('/turn', turnRouter);

// for parsing application/json
import bodyParser from 'body-parser';
app.use(bodyParser.json());
// import multer from 'multer';
// var upload = multer();
// // for parsing multipart/form-data
// app.use(upload.array());
// app.use(express.static('public'));
// // for parsing application/xwww-
// app.use(bodyParser.urlencoded({ extended: true }));

// const port = 3000;
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`ROCK PAPER SCISSORS app listening at http://localhost:${port}`)
});