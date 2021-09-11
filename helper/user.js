const { users } = require('../models');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;

class User {

    async create(clientId, name, email, mobile, password) {
        try {
            password = await bcryptjs.hash(password, saltRounds);
            await users.create({
                clientId,
                name,
                email,
                mobile,
                password
            });
            return "User created!";
        } catch (error) {
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            return await users.findOne({
                where: {
                    email
                },
                plain: true
            });
        } catch (error) {
            throw error;
        }
    }

    comparePassword(password, hash) {
        try {
            return bcryptjs.compare(password, hash);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new User();
