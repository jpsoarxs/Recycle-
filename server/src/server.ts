import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

require('./controllers/authController')(app);

app.listen(3333);
console.log("Servidor iniciado com sucesso!");