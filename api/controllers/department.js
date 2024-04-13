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
    const deptstdid = req.body.deptstdid;

    Department.create({
        name: name,
        email: email,
        count: count,
        deptstdid: deptstdid
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
    const id = req.body.id;
    const name = req.body.name;
    const deptstdid = req.body.deptstdid;

    Department.findByPk(id)
    .then(department => {
        department.name = name;
        department.deptstdid = deptstdid;
        department.save()
        .then(()=>{
            res.json({
                message: "updated succesfully"
            })
        })
        .catch(err =>{
            console.error(err);
        });
    })
    .catch(err=>{
        console.log(err);
    });
}

//DELETE - DELETE
exports.delete = (req, res, next) =>{
    const id = req.body.id;
    Department.destroy({where:id})
    .then(()=>{
        res.json({
            message:"Succesfully Deleted"
        });
    })
    .catch((err) => {
        console.log(err);
    });
}