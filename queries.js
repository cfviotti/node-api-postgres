const Pool = require('pg').Pool
const pool = new Pool({
  user: 'caio',
  host: 'localhost',
  database: 'api',
  password: '123',
  port: 5432,
})

// Retrieve all users
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// Retrieve a single user by id
const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}