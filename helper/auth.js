const env = process.env.NODE_ENV || 'development';
const passport = require('passport');
class Auth {
    isAccessAllowed(role) {
        return (req, res, next) => {
            /**
             * Role logic
             * 1 for super admin
             * 10 for Admin
             * 30 for Manager
             * So user role should be less or equal to the role required
             */
            if (req.user && req.user.role <= role) {
                next();
            } else {
                res.status(403).send();
            }
        }
    }
}

module.exports = new Auth();
