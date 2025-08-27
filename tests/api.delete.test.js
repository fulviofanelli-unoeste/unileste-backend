import app from '../server.js'
import request from 'supertest'


let apiTest;

beforeAll(() => {
  apiTest = request(app);
});

describe("DELETE /curso/1 ", () => {
    test("Deve retornar Bad Request", async () => {
      const response = (await apiTest.delete("/curso/1"));
      expect(response.statusCode).toBe(400);
    });
});


describe("DELETE /curso/2 ", () => {
    test("Deve retornar Ok", async () => {
      const response = (await apiTest.delete("/curso/2"));
      expect(response.statusCode).toBe(200);
    });
});

describe("DELETE /curso/99999999999 ", () => {
    test("Deve retornar Not Found", async () => {
      const response = (await apiTest.delete("/curso/99999999999"));
      expect(response.statusCode).toBe(404);
    });
});

describe("DELETE /matricula/1 ", () => {
    test("Deve retornar Ok", async () => {
      const response = (await apiTest.delete("/matricula/1"));
      expect(response.statusCode).toBe(200);
    });
});

describe("DELETE /matricula/99999999999 ", () => {
    test("Deve retornar Not Found", async () => {
      const response = (await apiTest.delete("/matricula/99999999999"));
      expect(response.statusCode).toBe(404);
    });
});