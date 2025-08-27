import app from '../server.js'
import request from 'supertest'

let apiTest;

beforeAll(() => {
  apiTest = request(app);
});

describe("GET /curso ", () => {
    test("Deve retornar Ok", async () => {
      const response = (await apiTest.get("/curso"));
      expect(response.statusCode).toBe(200);
    });
});


describe("GET /matricula ", () => {
    test("Deve retornar Ok", async () => {
      const response = (await apiTest.get("/matricula"));
      expect(response.statusCode).toBe(200);
    });
  });

describe("GET /curso/99999999999 ", () => {
    test("Deve retornar Not Found", async () => {
      const response = (await apiTest.get("/curso/99999999999"));
      expect(response.statusCode).toBe(404);
    });
});

describe("GET /matricula/99999999999 ", () => {
    test("Deve retornar Not Found", async () => {
      const response = (await apiTest.get("/matricula/99999999999"));
      expect(response.statusCode).toBe(404);
    });
  });
