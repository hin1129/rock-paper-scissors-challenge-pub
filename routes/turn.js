import express from 'express'
export const router = express.Router()
// const express = require('express');
// const router = express.Router();

router.post('/', (request, response) => {
  const battle = request.app.locals.battle;
  battle.turn();
  const currentPlayer = battle.currentPlayer();
  // const otherPlayer = battle.otherPlayer();
  // battle.switch();

  // get data from select element 
  const playerSelection = request.body.playerSelection;
  // same as line 23
  // request.app.locals.playerSelection = playerSelection;

  response.render('turn', {
    // currentPlayer: currentPlayer,
    // otherPlayer: otherPlayer
    currentPlayer: currentPlayer,
    // same as line 16
    playerSelection: playerSelection,
  });
})
// module.exports = router;