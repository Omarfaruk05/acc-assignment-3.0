const { createJobsService, getJobsService } = require("../services/jobs.service");

exports.createJobs = async(req, res) => {
    try {
        const user = await createJobsService(req.body);

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