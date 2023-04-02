import mysql from 'mysql2'

// Esta es una mala practica, los datos de conección a la base de datos no deberian estar expuestos en el codigo de esta manera. Aqui se hace con fines meramente practicos y de aprendizaje. Esto abre muchos huecos de seguridad.
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: '12345',
  port: 3306
})

export { conn }

