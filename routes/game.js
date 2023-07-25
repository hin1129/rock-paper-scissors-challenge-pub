import express from 'express'
export const router = express.Router()
import Battle from '../src/battle.js'

router.post('/', (request, response) => {
  let player1 = request.body.player1
  if (!player1) { player1 = "no name" }

  const battle = new Battle();
  // const names = [request.body.player1, request.body.player2]; //array
  const names = [player1];
  battle.setup(names);
  request.app.locals.battle = battle; //"request.app.locals" = object thats accessible across different route/middleware within same single request-response cycle
  response.redirect('/game'); //server-side responses to index.js post request
})

router.get('/', (request, response) => {
  const player = request.app.locals.battle.currentPlayer(); //retrieves battle object from local (line 13)

  response.render('game', {
    name: player.name,
    health: player.health
  });
})