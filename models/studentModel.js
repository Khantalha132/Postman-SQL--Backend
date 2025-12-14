const { poolPromise, sql } = require('../db');

async function getAllStudents() {
  const pool = await poolPromise;
  const result = await pool.request().query('SELECT * FROM Students');
  return result.recordset;
}

async function getStudentById(id) {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('id', sql.Int, id)
    .query('SELECT * FROM Students WHERE id = @id');

  return result.recordset[0] || null;
}

async function createStudent(data) {
  const pool = await poolPromise;
  const result = await pool.request()
    .input('name', sql.VarChar, data.name)
    .input('email', sql.VarChar, data.email)
    .input('class', sql.VarChar, data.class)
    .input('age', sql.Int, data.age)
    .query(`
      INSERT INTO Students (name, email, class, age)
      OUTPUT INSERTED.*
      VALUES (@name, @email, @class, @age)
    `);

  return result.recordset[0];
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent
};
