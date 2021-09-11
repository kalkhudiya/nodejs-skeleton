class Common {
    sendError(res, code, err) {
        console.error(err);
        if (err && err.stack) {
            res.status(code).send('<pre>' + err.stack + '</pre>');
        } else {
            let error = (err) ? err : "No error object found";
            res.status(code).json(error);
        }
    }
}

module.exports = new Common();
