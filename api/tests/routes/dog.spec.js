/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  id: '201', 
  weight: '8',
  height: '25',
  life_span: '14',
  temperament: "Clever",
  image: 'https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg' 
};

describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
});

describe("Obtiene un Dog por id o por name", () => {
  describe("GET /dogs/:id", () => {
    it("Se espera una respuesta 200 si se pasa un id", () =>
      agent.get("/dogs/201").expect(200));
  });
  
  describe("GET /dogs?name=xxx", () => {
    it("Si se recibe name devuelve una respuesta 200", () =>
      agent.get("/dogs?name=Pug").expect(200));
  });

  describe('/temperament', function() {
    it('GET respond with a status 200 if you find temperaments', () =>
      agent.get('/temperament').expect(200)); 
    });
  })
