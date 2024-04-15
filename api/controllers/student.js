const Student = require('../models/Student');
const Department = require('../models/Department');
const StudentDepartment = require('../models/StudentDepartment');

//READ - GET
exports.getAll = async (req, res, next) =>{
    console.log("get all request");
    const students = await Student.findAll();
    res.status = 200;
    res.json({
        students: students
    });
}

//READ - GET
exports.getOne = async (req, res, next) => {
    const student = await Student.findByPk(req.params.id);
    res.status = 200;
    res.json({
        student: student
    });
}

//CREATE - POST
exports.addOne = async (req, res, next) => {
    deptid = req.body.deptid

    const department = await Department.findByPk(deptid);
    if(!department) {
        return res.status(404).json({
            message:"Department not found"
        });
    } else {
        console.log("the department has found");
        student = await Student.findAll({
            where:{
                deptid: deptid
            }
        })
        .then( (result) => {
            if (result == "") {
                Student.create({
                    name: req.body.name,
                    email: req.body.email,
                    count: req.body.count,
                    deptid: deptid
                })
                .then( (student) => {
                    StudentDepartment.create({
                        std_id: student.id,
                        dept_id: deptid
                    })
                    .then( () => {
                        console.log("Student Department relation created");
                        return res.status(201).json({
                            message:"Student succesfully created"
                        });
                    })
                    .catch( (err) => {
                        console.error(err);
                    })
                })
                .catch( (err) => {
                    console.error(err);
                });
                } else {
                    return res.status(200).json({
                        message: "department id used by",
                        result: result
                    })
                }
        })
        .catch( (err) => {
            console.error(err);
            res.status(500).json({
                message:"unexpected error"
            })
        })

    }
}

        // .then( (student) => {
        //     if(student){
        //         console.log(student);
        //         return res.status(500).json({
        //             message:"department_id is already used. Please create another one!"
        //         });
        //     } else {
        //         
        //         .then( student => {
        //             console.log("Student succesfully created")
        //             console.log(student);
        //             StudentDepartment.create({
        //                 std_id: student.id,
        //                 dept_id: deptid
        //             })
        //             .then( (relation) => {
        //                
        //                 console.log(relation);
        //                 res.status(201).json({
        //                     
        //                 })
        //             })
        //             .catch( (err) => {
        //                 console.error(err);
        //             });
        //         })
        //         .catch( err => {
        //                 console.log(err);
        //             });
        //         }
        //         })


   
    
 

   
 


//UPDATE - PATCH
exports.updateOne = async (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const count = req.body.count;
    const dept_id = req.body.dept_id;

    await Student.findByPk(id)
    .then(student => {
        student.name = name;
        student.email = email;
        student.count = count;
        student.dept_id = dept_id;
        student.save()
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
exports.deleteOne = async (req, res, next) =>{
    const id = req.body.id;
    await Student.destroy({where:id})
    .then(()=>{
        res.json({
            message:"Succesfully Deleted"
        });
    })
    .catch((err) => {
        console.log(err);
    });
}