import app from '../server.js'
import request from 'supertest'

let apiTest;

const cursoValido = {
    id: 0,
    nome: "Curso Teste",
    valor: 750.99
}

const cursoInvalido = {
    id: 0,
    valor: 750.99
}

const matrValida = {
    id: 0,
    nome: "Fulano de Tal",
    email: "fulano@unoeste.br",
    cep: "1900-000",
    endereco: "Rua dos bobos, Número 0",
    bairro: "Bairro Teste",
    cidade: "Presidente Prudente",
    uf: "SP",
    cursando: "S",
    curso: {
        id: 1
    }
}

const matrInvalida = {
    id: 0,
    email: "fulano@unoeste.br",
    cep: "1900-000",
    endereco: "Rua dos bobos, Número 0",
    bairro: "Bairro Teste",
    cidade: "Presidente Prudente",
    uf: "SP",
    cursando: "S",
    curso: {
        id: 1
    }
}

beforeAll(() => {
  apiTest = request(app);
});

describe("POST /curso ", () => {
    test("Deve retornar Ok", async () => {
      const response = (await apiTest.post("/curso", cursoValido));
      expect(response.statusCode).toBe(200);
    });
});


describe("POST /matricula ", () => {
    test("Deve retornar Ok", async () => {
      const response = (await apiTest.post("/matricula", matrValida));
      expect(response.statusCode).toBe(200);
    });
  });

describe("POST /curso ", () => {
    test("Deve retornar Bad Request", async () => {
      const response = (await apiTest.post("/curso", cursoInvalido));
      expect(response.statusCode).toBe(400);
    });
});

describe("POST /matricula ", () => {
    test("Deve retornar Bad Request", async () => {
      const response = (await apiTest.post("/matricula", matrInvalida));
      expect(response.statusCode).toBe(400);
    });
  });


describe("POST /curso/cadastrar ", () => {
    test("Deve retornar Not Found", async () => {
      const response = (await apiTest.post("/curso/cadastrar", cursoValido));
      expect(response.statusCode).toBe(404);
    });
});

describe("POST /matricula/cadastrar ", () => {
    test("Deve retornar Not Found", async () => {
      const response = (await apiTest.post("/matricula/cadastrar", matrValida));
      expect(response.statusCode).toBe(404);
    });
  });