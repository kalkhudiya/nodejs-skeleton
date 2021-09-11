const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;

const userHelper = require('../helper/user');
const jwtHelper = require('../helper/jwt')

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
},
    async function (email, password, cb) {
        try {
            const user = await userHelper.getUserByEmail(email);
            if (user && user.id && user.password) {
                const isPasswordValid = await userHelper.comparePassword(password, user.password);
                if (isPasswordValid) {
                    return cb(null, {
                        id: user.id,
                        role: user.role,
                        clientId: user.clientId,
                        email: user.email,
                        name: user.name
                    }, {
                        id: user.id,
                        role: user.role,
                        clientId: user.clientId
                    });
                }
            }
            return cb(null, false, {
                message: 'Incorrect email or password.'
            });
        } catch (error) {
            return cb(error);
        }
    }
));

// Passport middleware function for authorizing route
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtHelper.getSecret()
}, function (jwtPayload, cb) {
    cb(null, jwtPayload);
}));
