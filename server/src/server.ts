import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log("Listagem de usuarios");
  response.json({
    'status': true,
    'message': 'Sua requisição foi atendida com sucesso!'
  });
  response.status(200);
});

app.listen(3333);