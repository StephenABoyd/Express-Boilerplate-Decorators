import { AppTest } from '@ornate/express/lib/testing';
import { Express } from 'express';
import request from 'supertest';

import TestController from './TestController';

describe('Integration - TestController', () => {

  let service: Express;

  beforeEach(() => {
    service = AppTest({
      router: TestController,
      middlewares: []
    });
  });

  it('(GET) /methods/test - should return success message', async () => {
    const response = await request(service).get('/methods/test');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Get request successful');
  });

  it('(POST) /methods/test - should return success message', async () => {
    const response = await request(service).post('/methods/test');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Post request successful');
  });

  it('(DELETE) /methods/test - should return success message', async () => {
    const response = await request(service).delete('/methods/test');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Delete request successful');
  });

  it('(OPTIONS) /methods/test - should return success message', async () => {
    const response = await request(service).options('/methods/test');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Options request successful');
  });

  it('(PUT) /methods/test - should return success message', async () => {
    const response = await request(service).put('/methods/test');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Put request successful');
  });

  it('(PATCH) /methods/test - should return success message', async () => {
    const response = await request(service).patch('/methods/test');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Patch request successful');
  });
});