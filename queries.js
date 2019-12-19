const Pool = require('pg').Pool
const pool = new Pool({
  user: 'caio',
  host: 'localhost',
  database: 'api',
  password: '123',
  port: 5432,
})