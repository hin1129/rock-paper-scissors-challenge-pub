class Player {
  constructor(name, pcChoice = this.generateRandomChoice()) {
    this.name = name;
    this.pcChoice = pcChoice;
    this.health = 20;
  }

  // generate random choice for pc
  generateRandomChoice() {
    const choicesArray = ["rock", "paper", "scissors"];
    let randomChoice = choicesArray[Math.floor(Math.random() * 3)];
    // this.pcChoice = randomChoice //same as setChoice()
    this.setChoice(randomChoice)
  }

  // set pc's choice, store to player object
  setChoice(pcSelection) { this.pcChoice = pcSelection; }

  takeDamage(amount) { if (this.health != 0) { this.health -= amount; } }
}

export default Player;