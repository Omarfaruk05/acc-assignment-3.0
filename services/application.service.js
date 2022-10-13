const Application = require ("../models/Application.js");
const Job = require("../models/Job");

exports.createApplicationService = async(id, data, email) => {

    const application = await Application.create(data);

    const {_id:applyId} = application;
    const jobForUpdate = await Job.findOne({_id: id});

    const updatedEmail = jobForUpdate.applicantEmails.push(email)
    console.log(email) ;
    const updatedId =jobForUpdate.applicantIds.push(applyId) ;
    
    const result = await Job.updateOne({_id: id }, {$push:{applicantIds: applyId, applicantEmails: email}}, {runValidators: true});

    return  application;
}