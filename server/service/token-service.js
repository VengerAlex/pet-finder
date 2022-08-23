const jwt = require("jsonwebtoken");

class TokenService {
    generateToken(payload){
        const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '30d'})

        return token;
    }
}

module.exports = new TokenService();
