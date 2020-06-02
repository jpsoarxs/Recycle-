import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqllite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
});

export default connection;