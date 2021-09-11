const express = require('express');
const controller = require('../controller/vendor');
const authHelper = require('../helper/auth');
const passport = require('passport');

const router = express.Router();
router.get('/', authHelper.isAccessAllowed(30), controller.get);

module.exports = {
    path: '/vendor',
    router,
    auth: passport.authenticate('jwt', {
        session: false
    })
};
