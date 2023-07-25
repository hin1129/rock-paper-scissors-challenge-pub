import { expect } from "chai";
import Player from "../src/player.js";

describe('player.test.js', () => {
    it('generateRandomChoice method generates if one of the 3 (rock, paper, scissors)', () => {
        const testPlayer = new Player('abc');
        testPlayer.generateRandomChoice();
        expect(testPlayer.pcChoice).to.be.oneOf(
            ["rock", "paper", "scissors"]
        )
    })

    it('setChoice method sets choice to player object', () => {
        const testPlayer2 = new Player('abc');
        testPlayer2.setChoice("rock")
        expect(testPlayer2.pcChoice).to.be.equal("rock")
    })

    it('takeDamage method takes health from player object if health is not 0', () => {
        const testPlayer3 = new Player('abc');
        testPlayer3.takeDamage(10)
        expect(testPlayer3.health).to.be.equal(10)
    })


    it('takeDamage method avoids to take health from player object if health is 0', () => {
        const testPlayer4 = new Player('abc');
        testPlayer4.takeDamage(20)
        testPlayer4.takeDamage(10)
        expect(testPlayer4.health).to.be.equal(0)
    })
})