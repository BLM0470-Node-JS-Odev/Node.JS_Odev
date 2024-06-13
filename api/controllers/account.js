//Account Controller
const Acccount = require('../models/Account');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signin = async (req, res, next) => {
    await Acccount.findOne({where: {
        username: req.body.username
    }})
    .then(account => {
        console.log(account);
        if (account == null){
            return res.status(404).json({
                message: "non-exist account"
            });
        }

        bcrypt.compare(req.body.password, account.password, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "auth failed",
                    error: err
                })
            }
            
            if (result) {
                //succeful login
                const token = jwt.sign(
                {
                    username: account.username,
                    email: account.email,
                }, 
                "JWTSECRETKEY",
                {expiresIn: "8h"});

                return res.status(200).json({
                    message:"auth succesful",
                    token: token
                });
            }

            res.status(401).json({
                message: "auth failed"
            });
            
        });
    })
    .catch( err =>{
        res.status(500).json({
            error: err
        })
    });
}

exports.signup = async (req, res, next) => {
    await bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
         return res.status(500).json({
             errror:err
            })
        } else {
            Acccount.create({
                username: req.body.username,
                email: req.body.email,        
                password: hash
            })
            .then( result => {
                console.log(result)
                res.status(201).json({
                    message: "Account Created",
                    result: result
                });
            })
            .catch( err => {              
                res.status(500).json({
                    error:err
                })
            });
        }
    });
    
}

exports.remove = async (req, res, next) => {
    await Acccount.destroy({where:{
        username: req.userData.username
    }})
    .then( result => {
        res.status(200).json({
            message:"Succesfully deleted",
            result: result
        })
    })
    .catch( err => {
        res.status(500).json({
            error: err
        });
    });
}