const Job = require("../models/Job");

exports.createJobsService = async(job) =>{
    const result = Job.create(job);
    return result;
}

exports.getJobsService = async() =>{
    const result = Job.find({});
    return result;
}

exports.getJobsByEmailService = async(email) =>{
    const result = Job.find({createdBy: email});
    return result;
}

exports.updateJobService = async(id, data) =>{
    const result = Job.updateOne({_id: id }, data, {runValidators: true});
    return result;
}