const Department = require('../../models/Department');

//READ - GET
exports.getAll = (req, res, next) =>{
    const departments = Department.findAll();
    res.status = 200;
    res.json({
        departments: departments
    });
}

//READ - GET
exports.get = (req, res, next) => {
    const department = Department.findByPk(req.params.id);
    res.status = 200;
    res.json({
        department: department
    });
}

//CREATE - POST
exports.add = (req, res, next) => {
    const name = req.body.name;
    const dept_id = req.body.deptstdid;

    Department.create({
        name: name,
        email: email,
        count: count,
        dept_id: dept_id
    })
    .then( result => {
        console.log(result);
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