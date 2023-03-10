import express from 'express'
export const router = express.Router()
import Battle from '../src/battle.js'
// const express = require('express');
// const router = express.Router();
// const Battle = require('../src/battle.js');
// const Player = require('../src/player.js');

router.post('/', (request, response) => {
  const battle = new Battle();
  const names = [request.body.player1];
  // const names = [request.body.player1, request.body.player2];
  battle.setup(names);
  request.app.locals.battle = battle;
  response.redirect('/game');
})

router.get('/', (request, response) => {
  const player = request.app.locals.battle.currentPlayer();

  response.render('game', {
    name: player.name,
    health: player.health
  });
})
// module.exports = router;