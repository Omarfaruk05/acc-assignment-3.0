const { findCandidateService, findManagerService } = require("../services/admin.service");

exports.findCandidate = async(req, res) => {
    try {
        const candidates = await findCandidateService();

        if(!candidates){
            return res.status(400).json({
                    status: "Fail",
                    message: "Sorry there has no candidate.",
                    error: error.message,
                    });
        }

        res.status(200).json({
            status: 'Success',
            message:'Successfully get all the candidate.',
            data: candidates,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Doesn't get all the candidate.",
            error: error.message,
        });
    }
}

exports.findManager = async(req, res) => {
    try {
        const managers = await findManagerService();

        if(!managers){
            return res.status(400).json({
                    status: "Fail",
                    message: "Sorry there has no candidate.",
                    error: error.message,
                });
        }

        res.status(200).json({
            status: 'Success',
            message:'Successfully get all the candidate.',
            data: managers,
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: "Doesn't get all the candidate.",
            error: error.message,
        });
    }
}