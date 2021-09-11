const commonHelper = require('../helper/common');

class Vendor {
    async get(req, res) {
        try {
            res.json([{
                success: true
            }]);
        } catch (error) {
            commonHelper.sendError(res, 500, error);
        }
    }
}

module.exports = new Vendor();
