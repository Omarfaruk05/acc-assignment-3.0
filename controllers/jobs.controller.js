const { createJobsService, getJobsService, getJobsByEmailService, updateJobService, getJobByIdService, getCandidateJobByIdService } = require("../services/jobs.service");

exports.createJobs = async(req, res) => {
    try {
        const managerEmail = req.user.email;
        const managerId = req.user._id;
        console.log(managerId);
        const job = {...req.body, createdBy:managerEmail, creator:managerId}
        const user = await createJobsService(job);

        res.status(200).json({
            status: 'Success',
            message:'Job is successfully created.',
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Job is't successfully created.",
            error: error.message,
        });
    }
}

exports.findJobs = async(req, res) => {
    try {
        const user = await getJobsService();

        res.status(200).json({
            status: 'Success',
            message:'Successfully get jobs.',
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Successfully doesn't get jobs.",
            error: error.message,
        });
    }
}

exports.findMangerJobs = async(req, res) => {
    try {
        const email = req.user.email;
        const job = await getJobsByEmailService(email);

        res.status(200).json({
            status: 'Success',
            message:'Successfully get jobs.',
            data: job,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Successfully doesn't get jobs.",
            error: error.message,
        });
    }
}

exports.findMangerJobById = async(req, res) => {
    try {
        const {id}= req.params;
        const job = await getJobByIdService(id);
        if(!job){
            return res.status(403).json({
                status: "Fail",
                error: "There has no job in this id."
            })
        }

        res.status(200).json({
            status: 'Success',
            message:'Successfully get job by id.',
            data: job,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Doesn't get job by id.",
            error: error.message,
        });
    }
}
exports.findCandidateJobById = async(req, res) => {
    try {
        const {id}= req.params;
        const job = await getCandidateJobByIdService(id);
        if(!job){
            return res.status(403).json({
                status: "Fail",
                error: "There has no job in this id."
            })
        }

        res.status(200).json({
            status: 'Success',
            message:'Successfully get job by id.',
            data: job,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Doesn't get job by id.",
            error: error.message,
        });
    }
}

exports.updateJobs = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await updateJobService(id, req.body);

        res.status(200).json({
            status: 'Success',
            message:'Successfully updated the job.',
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Successfully doesn't upadat the job.",
            error: error.message,
        });
    }
}