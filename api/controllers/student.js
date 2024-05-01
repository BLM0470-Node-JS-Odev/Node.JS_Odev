//Student Controller

const Student = require('../models/Student');
const Department = require('../models/Department');
const StudentDepartment = require('../models/StudentDepartment');
const Counter = require('../models/StudentCounter');

//READ - GET
exports.getAll = async (req, res, next) => {
    console.log("get all request");
    const students = await Student.findAll();
    res.status = 200;
    res.json({
        students: students,
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

    //check department has already exist
    const department = await Department.findByPk(deptid);
    if(!department) 
    {
        return res.status(404).json({
            message:"Department not found"
        });
    }

    //check department has already used
    const existStudent = await Student.findAll({where:{deptid: deptid}});
    if (!(existStudent == "")){
        return res.status(200).json({
            message: "department id used by",
            result: existStudent
        });
    }

    // count instance
    counter = await Counter.findByPk(1);
    

    //create student instance
    Student.create({
        name: req.body.name,
        email: req.body.email,
        counter: req.body.counter,
        deptid: deptid
    
    })
    .then( (student) => {

        stdid = student.id

        //count update
        tmp = counter.count;
        counter.count = (tmp + 1);
        counter.save();

        //relation instance create
        department.deptstdid = stdid
        department.save();
        StudentDepartment.create({
            std_id: stdid,
            dept_id: deptid
        })
        .then( (result) => {            
            return res.status(201).json({
                message: "student and relation succesfully created!",
                result: result
            });
        })
        .catch((err)=>{
            console.error(err);
            return res.status(500).json({
                message:"student relation cannot created!",
                error: err
            });
        });
    })
    .catch( (err) => {
      console.err(err);
      res.status(500).json({
        message:"student cannot created!",
        error: err
      });        
    });
}


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
    const id = req.params.id;

    //count instance
    counter = await Counter.findByPk(1);

    await StudentDepartment.destroy({where:{std_id:id}})
    .then( (result) => {
        console.log("relation succesfully deleted!");
        console.log(result);
    })
    .catch( (err) => {
        console.log(err);
    });
    await Student.destroy({where:{id:id}})
    .then((student)=>{
        
        //count update
        tmp = counter.count;
        counter.count = (tmp - 1);
        counter.save();

        res.json({
            message:"Succesfully Deleted",
            student: student 
        });
    })
    .catch((err) => {
        console.log(err);
    });
}