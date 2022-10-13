const { createApplicationService } = require("../services/application.service");
const Job = require ("../models/Job.js");

exports.createApplication = async(req, res) => {
    try {
        const {email}= req.user;
        const {id} = req.params;
        req.body.appliedFrom = id;

        const jobForApplicant = await Job.find({_id: id});

        if(jobForApplicant.length === 0){
            return res.status(401).json({
                status: "Fail",
                error: "There is no jon that you find",
            })
        }
        const expired = new Date() > new Date(jobForApplicant.lastApplicationDate);
        

        if(expired){
            return res.status(401).json({
                status: "Fail",
                error: "Application date is expiared.",
            })
        }

        if(jobForApplicant[0].applicantEmails.includes(email)){
            return res.status(401).json({
                status: "Fail",
                error: "You are already applied.",
            })
        }

        const updatedJobFileds = createApplicationService(id, req.body, email);
        res.status(200).json({
            status:"Success",
            message: "Applied successfull.",
    })
    } catch (error) {
       res.status(401).json({
        status: "Fail",
        error: error,
       })
    }
}