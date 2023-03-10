import { expect } from "chai";
import chai from "chai";
import chaiHttp from "chai-http";
import app from '../app.js'

chai.use(chaiHttp)

describe('game.test.js', () => {
    it('game route - post request - return 200 response if index page loads succesfully', async () => {
        // arrange
        const response = await chai.request(app)

            // act
            .post(`/game`)
            .send();

        // assert
        expect(response).to.have.status(200);
    })
})