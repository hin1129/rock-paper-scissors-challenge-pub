class Player {
  constructor(name, pcChoice = this.generateRandomChoice()) {
    this.name = name;
    this.health = 100;
    this.pcChoice = pcChoice;
  }

  takeDamage(amount) {
    this.health -= amount;
  }

  // generate random choice for pc
  generateRandomChoice() {
    const choicesArray = ["rock", "paper", "scissors"];
    // console.log(choicesArray);
    let randomChoice = choicesArray[Math.floor(Math.random() * 3)];
    console.log(randomChoice);
    // return (randomChoice)
    this.setChoice(randomChoice)
  }

  // set pc's choice, store to player object
  setChoice(pcSelection) {
    this.pcChoice = pcSelection;
  }
}

export default Player;
// "type": "module" cant use module as object
// module.exports = Player;