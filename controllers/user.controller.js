const { signupService, findUserByEmail } = require("../services/user.service");
const { genetateToken } = require("../utils/token");
const bcrypt = require('bcrypt');


exports.signup = async(req, res) =>{
    try {
        const user = await signupService(req.body);

        res.status(200).json({
            status: 'Success',
            message:'signup successfull.',
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "signup is not successfull.",
            error: error.message,
        });
    }
};

exports.login = async(req, res) =>{
    try {
        const{email, password} = req.body;

        if(!email || !password){
            return res.status(401).json({
                status: "Fail",
                error:"Please provide your email and password."
            });
            
        };

        const user = await findUserByEmail(email);

        if(!user){
            return res.status(401).json({
                status: "Fail",
                error:"No user found. Please creat a account."
            });
        };
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if(!isPasswordValid){
            return res.status(401).json({
                status: "Fail",
                error:"Email or password is not valid."
            });  
        };

        const token = genetateToken(user);

       delete user.password;

        res.status(200).json({
            status: 'Success',
            message:'login successfull.',
            data: {
                user,
                token
            },
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "logn is not successfull.",
            error: error.message,
        });
    }
};

exports.getMe = async(req, res) => {
    try {
       const user = await findUserByEmail(req.user?.email);

       res.status(200).json({
        status: 'Success',
        data: user,
       })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "logn is not successfull.",
            error: error.message,
        });
    }
}