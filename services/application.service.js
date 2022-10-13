const Application = require ("../models/Application.js");
const Job = require("../models/Job");

exports.createApplicationService = async(id, data, email) => {

    const application = await Application.create(data);

    const {_id:applyId} = application;
    
    const updatedJobFileds = await Job.updateOne({_id: id }, {$push:{applicantIds: applyId, applicantEmails: email}}, {runValidators: true});

    return  updatedJobFileds;
}