const request = require('supertest');
const app = require('../app.test.js');
describe('GET /', () => {
    test('It should respond with the index page', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain('Welcome to my app');
    });
  });
  
  describe('GET /about', () => {
    test('It should respond with the about page', async () => {
      const response = await request(app).get('/about');
      expect(response.statusCode).toBe(200);
      expect(response.text).toContain('About Us');
    });
  });
  