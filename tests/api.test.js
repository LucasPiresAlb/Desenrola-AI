// tests/api.test.js

const request = require('supertest');
const app = require('../src/server');

describe('Testes dos Endpoints de Prestadores', () => {

  // Teste para o endpoint de CADASTRO (POST)
  it('Deve cadastrar um novo prestador com sucesso', async () => {
    const response = await request(app)
      .post('/api/prestadores')
      .send({
        nome: "José Testador",
        contato: "85912341234",
        categoria: "Testes Automatizados", // <-- A VÍRGULA FALTANDO ERA AQUI
        "servico_descricao": "Crio testes para garantir a qualidade do software." // <-- E A ASPA ERRADA ERA AQUI
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });


  // Teste para o endpoint de BUSCA (GET)
  it('Deve listar todos os prestadores', async () => {
    const response = await request(app)
      .get('/api/prestadores');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });


  // Teste para o tratamento de erro (POST sem o campo 'nome')
  it('Deve retornar erro 400 ao tentar cadastrar um prestador sem nome', async () => {
    const response = await request(app)
      .post('/api/prestadores')
      .send({
        contato: "85999999999",
        categoria: "Testes de Erro",
        "servico_descricao": "Tentativa de cadastro inválida."
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.erro).toBe("O campo 'nome' é obrigatório.");
  });

});