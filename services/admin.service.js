const User = require ("../models/User.js");

exports.findCandidateService = async()=> {
    const users = await User.find({role: "candidate"});
    return users;
}

exports.findManagerService = async()=> {
    const managers = await User.find({role: "hiring manager"});
    return managers;
}