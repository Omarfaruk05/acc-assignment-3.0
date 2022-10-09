const jwt = require('jsonwebtoken');

exports.genetateToken = (userInfo) => {
    const payload = {
        email: userInfo.email,
        role: userInfo.role,
    }
    const token = jwt.sign(payload, process.env.TOKEN_SECTET, {
        expiresIn:'1d'
    });

    return token;
}