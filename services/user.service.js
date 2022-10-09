const User = require("../models/User");

exports.signupService = async(user)=> {
    const newUser = await User.create(user);
    return newUser;
};

exports.findUserByEmail = async(email)=> {
    return await User.findOne({email});
}