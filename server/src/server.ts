import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/users', (req, res) => {
  res.json({ status:true });
  res.status(200);
});

app.listen(3333);
console.log("Servidor iniciado com sucesso!");