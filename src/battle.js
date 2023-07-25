import Player from './player.js'

class Battle {
  setup(names, playerClass = Player) {
    this.players = names.map(name => new playerClass(name));
  }

  currentPlayer() { return this.players[0]; }

  otherPlayer() { return this.players[1]; }

  turn() {
    this.currentPlayer().generateRandomChoice();
    // this.otherPlayer().takeDamage(10);
  }

  determineWinner(playerSelection, pcSelection) {
    if (playerSelection === pcSelection) { return "draw" }
    else if (
      (playerSelection === "rock" & pcSelection === "scissors") ||
      (playerSelection === "scissors" && pcSelection === "paper") ||
      (playerSelection === "paper" && pcSelection === "rock")
    ) { return "Player wins" }
    else { return "PC wins" }
  }

  // switch() { this.players.reverse(); }
}

export default Battle;