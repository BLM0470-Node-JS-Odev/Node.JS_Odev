const Student = require('../../models/Student');

//READ - GET
exports.getAll = (req, res, next) =>{
    const students = Student.findAll();
    res.status = 200;
    res.json({
        students: students
    });
}

//READ - GET
exports.get = (req, res, next) => {
    const student = Student.findByPk(req.params.id);
    res.status = 200;
    res.json({
        student: student
    });
}

//CREATE - POST
exports.add = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const count = req.body.count;
    const dept_id = req.body.dept_id;

    Student.create({
        name: name,
        email: email,
        count: count,
        dept_id: dept_id
    })
    .then( result => {
        console.log(result);
        res.status = 200;
        res.json({
            result:"Succesfuly Created",
        });
    })
    .catch( err => {
        console.log(err);
    });
}


//UPDATE - PATCH
exports.update = (req, res, next) => {

}

//DELETE - DELETE
exports.delete = (req, res, next) =>{

}