const express = require('express');
const controller = require('../controller/user');

const router = express.Router();
router.post('/signin', controller.signIn);


module.exports = {
    path: '/user',
    router
};
