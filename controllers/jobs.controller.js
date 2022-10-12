const { createJobsService, getJobsService, getJobsByEmailService, updateJobService } = require("../services/jobs.service");

exports.createJobs = async(req, res) => {
    try {
        const managerEmail = req.user.email;
        console.log(managerEmail);
        const job = {...req.body, createdBy:managerEmail}
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
        const user = await getJobsByEmailService(email);

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