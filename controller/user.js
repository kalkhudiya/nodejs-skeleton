const jwt = require("jsonwebtoken");
const passport = require("passport");

const jwtHelper = require('../helper/jwt');

class User {
    async signIn(req, res, next) {
        try {
            passport.authenticate('local', {
                session: false
            }, (err, user, info) => {
                if (err || !user) {
                    return res.status(400).json(info);
                }
                req.login(user, {
                    session: false
                }, (err) => {
                    if (err) {
                        res.send(err);
                    }
                    const token = jwtHelper.encode(info);
                    return res.json({ user, token });
                });
            })(req, res);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new User();
