//Department Controller
const Department = require('../models/Department');

//READ - GET
exports.getAll = async (req, res, next) =>{
    const departments = await  Department.findAll();
    console.log(JSON.stringify(departments, null, 2));
    res.status = 200;
    res.json({
        departments: departments
    });
}

//READ - GET
exports.getOne = async (req, res, next) => {
    const department = await Department.findByPk(req.params.id);
    res.status = 200;
    res.json({
        department: department
    });
}

//CREATE - POST
exports.addOne = async (req, res, next) => {
    await Department.create({
        name: req.body.name,
        deptstdid: req.body.deptstdid
    })
    .then( result => {
        res.status(201).json({
            message: "Succesfuly Created",
        });
    })
    .catch( err => {
        res.status(500).json({
            message:"fail"
            });
        console.log(err);
    });

}

//UPDATE - PATCH
exports.updateOne = async (req, res, next) => {
    await Department.findByPk(req.params.id)
    .then( (department) => {
        if(!department){
            return res.status(404).json({
                message:"department not found"
            });
        }  else {
            department.name = req.body.name;
            department.deptstdid = req.body.deptstdid;
            department.save()
            .then(()=>{
                res.json({
                    message: "updated succesfully"
                })
            })
            .catch(err =>{
                console.error(err);
            });
        }
    })
    .catch(err => {
        return res.status("500").json({
            error: err
        });
    });
}

//DELETE - DELETE
exports.deleteOne = async (req, res, next) =>{
    const id = req.params.id;
    await Department.destroy({where:{id:id}})
    .then(()=>{
        res.json({
            message:"Succesfully Deleted"
        });
    })
    .catch((err) => {
        console.log(err);
    });
}