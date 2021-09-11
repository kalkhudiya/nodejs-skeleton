const jwt = require("jsonwebtoken");

const jwtSecret = "jwtString";

class Jwt {
    encode(json) {
        return jwt.sign(json, jwtSecret);
    }

    decode(string) {
        return string;
    }

    getSecret() {
        return jwtSecret;
    }
}

module.exports = new Jwt();
