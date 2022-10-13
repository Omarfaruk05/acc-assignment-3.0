const Job = require("../models/Job");

exports.createJobsService = async(job) =>{
    const result = Job.create(job);
    return result;
}

exports.getJobsService = async(filters, queries) =>{
    const result = Job.find(filters)
        .sort(queries.sortBy)
        .select(queries.fields);
    return result;
}

exports.getJobsByEmailService = async(email) =>{
    const result = Job.find({createdBy: email});
    return result;
}

exports.getJobByIdService = async(id) =>{
    const result = await Job.findOne({_id: id}).populate("applicantIds");
    return result;
}

exports.getCandidateJobByIdService = async(id) =>{
    const result = await Job.findOne({_id: id}).populate("creator");
    return result;
}

exports.updateJobService = async(id, data) =>{
    const result = Job.updateOne({_id: id }, data, {runValidators: true});
    return result;
}