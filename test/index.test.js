import { expect } from "chai";
import chai from "chai";
import chaiHttp from "chai-http";
import app from '../app.js'

chai.use(chaiHttp)

describe('index.test.js', () => {
    it('index route - get request - return 200 response if index page loads succesfully', async () => {
        // arrange
        const response = await chai.request(app)

            // act
            // Make get request to "/" route on server
            .get(`/`)
            // send request
            .send();

        // assert
        expect(response).to.have.status(200);
    })
})