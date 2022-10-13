module.exports  = (...role) => {
    
    return (req, res, next) => {
        const userRole = req.user.role;
        console.log(userRole)
        
        if(!role.includes(userRole)){
            return res.status(403).json({
                status: "Fail",
                error: "You are not authorized for this route."
            });
        };
        next();
    }
}