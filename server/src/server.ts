import express from 'express'
import routes from './routes'

const app = express();

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação no back-end
// DELETE: Remover uma informação no back-end

// Request Param: Parâmetro que vem na própia rota que identificam um recurso
// Query Param: Parâmetros que vem na própia rota, geralmente opicionais

app.use(express.json())
app.use(routes);

app.listen(3333);