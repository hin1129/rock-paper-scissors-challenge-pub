import express from 'express'
export const router = express.Router()

router.post('/', (request, response) => {
  const battle = request.app.locals.battle;
  battle.turn();
  const currentPlayer = battle.currentPlayer();
  // const otherPlayer = battle.otherPlayer();
  // battle.switch();

  const playerSelection = request.body.playerSelection; //get player's choice from "select-name"
  // request.app.locals.playerSelection = playerSelection; //similar to 21
  const pcSelection = currentPlayer.pcChoice;
  const winner = battle.determineWinner(playerSelection, pcSelection)
  if (winner === "PC wins") { currentPlayer.takeDamage(10) }
  const health = currentPlayer.health;

  response.render('turn', {
    // otherPlayer: otherPlayer
    currentPlayer: currentPlayer,
    playerSelection: playerSelection, //similar to 12, pass to specific template(ejs)
    winner: winner,
    health: health,
  })
})