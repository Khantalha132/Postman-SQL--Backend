const {
  getAllStudents,
  getStudentById,
  createStudent
} = require('../models/studentModel');

async function getAll(req, res) {
  const students = await getAllStudents();
  res.json(students);
}

async function getById(req, res) {
  const student = await getStudentById(req.params.id);

  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  res.json(student);
}

async function create(req, res) {
  try {
    const student = await createStudent(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getAll,
  getById,
  create
};
