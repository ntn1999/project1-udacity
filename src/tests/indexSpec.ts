import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint success', async () => {
    const response = await request.get('/api/images?filename=fjord&width=400&height=300');
    expect(response.status).toBe(200);
  });

  it('gets the api endpoint faild', async () => {
    const response = await request.get('/api/images?filename=fjord&width=400&height=');
    expect(response.status).toBe(500);
  });
});
