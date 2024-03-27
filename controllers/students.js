const Student = require('../models/student')

exports.getStudents = (req, res, next) => {
    const students = Student.getAll();
    res.send("students listed");
};

exports.getAddStudent = (req, res, next) => {
    res.send("students get called");
};

exports.postAddStudent = (req, res, next) => {
    const student = new Student(req.body.name, req.body.email, req.body.counter, req.body.department);
    student.saveStudent();
    console.log("student added");
    res.redirect("/");
};