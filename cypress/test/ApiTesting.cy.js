/// <reference types="cypress" />

describe('Validar un POST por API', () => {
  it('Debería registrar un usuario usando un POST request ', () => {
    cy.request({
      method: 'POST',
      url: 'https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users', // Endpoint de la API si está disponible
      body: {
        username: 'nuevoUsuarioAPI11',
        firstName: 'John',
        lastName: 'Doe',
        password: 'Qwe1234@',
        confirmPassword: 'Qwe1234@'
      }
    }).then((response) => {
      // Asegúrate de que el estatus sea 200 o el código esperado
      expect(response.status).to.eq(201);
    });
  });
});

