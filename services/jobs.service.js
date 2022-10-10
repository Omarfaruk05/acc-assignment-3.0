const Job = require("../models/Job");

exports.createJobsService = async(job) =>{
    const result = Job.create(job);
    return result;
}

exports.getJobsService = async() =>{
    const result = Job.find({});
    return result;
}