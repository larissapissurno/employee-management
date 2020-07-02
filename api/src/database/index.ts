import { createConnection } from 'typeorm';

createConnection().then(conection => {
  conection.runMigrations();
});
