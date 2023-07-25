import { expect } from "chai";
import Battle from "../src/battle.js";
import Player from "../src/player.js";

describe('battle.test.js', () => {
    it('determineWinner method determines winner of game - draw', () => {
        const battle = new Battle()
        const testPlayer = new Player('abc');
        testPlayer.setChoice("rock")

        const playerChoice = "rock";
        const result = battle.determineWinner(playerChoice, testPlayer.pcChoice)

        expect(result).to.be.equal("draw")
    })

    it('determineWinner method determines winner of game - Player wins', () => {
        const battle = new Battle()
        const testPlayer2 = new Player('abc');
        testPlayer2.setChoice("scissors")

        const playerChoice = "rock";
        const result = battle.determineWinner(playerChoice, testPlayer2.pcChoice)

        expect(result).to.be.equal("Player wins")
    })

    it('determineWinner method determines winner of game - PC wins', () => {
        const battle = new Battle()
        const testPlayer3 = new Player('abc');
        testPlayer3.setChoice("scissors")

        const playerChoice = "paper";
        const result = battle.determineWinner(playerChoice, testPlayer3.pcChoice)

        expect(result).to.be.equal("PC wins")
    })
})