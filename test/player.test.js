import { expect } from "chai";
import Player from "../src/player.js";

describe('player.test.js', () => {
    it('player object name property', () => {
        const testPlayer = new Player('abc');
        expect(testPlayer.name).to.be.equal('abc')
    })

    it('player object pcChoice property', () => {
        const testPlayer2 = new Player('abc', "rock");
        expect(testPlayer2.pcChoice).to.be.equal('rock')
    })

    it('generateRandomChoice method generates if one of the 3 (rock, paper, scissors)', () => {
        const testPlayer3 = new Player('abc');
        testPlayer3.generateRandomChoice();
        expect(testPlayer3.pcChoice).to.be.oneOf(
            ["rock", "paper", "scissors"]
        )
    })
})

