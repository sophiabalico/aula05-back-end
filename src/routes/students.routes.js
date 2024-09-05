import { Router } from "express";

const studentsRoutes = Router();

let students = [
  { id: 1, name: "Alice", email: "alice@senai.br" },
  { id: 2, name: "Bob", email: "bob@senai.br" },
  { id: 3, name: "Charlie", email: "charlie@senai.br" },
  { id: 4, name: "David", email: "david@senai.br" },
];

studentsRoutes.get("/", (req, res) => {
  return res.status(200).json(students);
});

studentsRoutes.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required!" });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    email,
  };

  students.push(newStudent);

  return res.status(201).json(newStudent);
});

studentsRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  const student = students.find((student) => student.id === Number(id));

  if (!student) {
    return res.status(404).json({ message: "Student not found!" });
  }

  return res.status(200).json(student);
});

studentsRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const student = students.find((student) => student.id === Number(id));

  if (!student) {
    return res.status(404).json({ message: "Student not found!" });
  }

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required!" });
  }

  student.name = name;
  student.email = email;

  return res.status(200).json(student);
});

studentsRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  const student = students.find((student) => student.id === Number(id));

  if (!student) {
    return res.status(404).json({ message: "Student not found!" });
  }

  students = students.filter((student) => student.id !== Number(id));

  return res.status(200).json({ message: "Student deleted successfully!" });
});

export default studentsRoutes;
