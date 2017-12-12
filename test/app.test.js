const request = require('supertest');
const app = require('../app');

describe('app', function() {
    it('Debe server html en /', (done) => {
        request(app).get('/').expect('Content-Type', /html/).expect(200, done);
    });
});