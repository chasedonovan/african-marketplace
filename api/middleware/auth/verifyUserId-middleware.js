const Users = require('../../models/users-model.js')

function verifyUserId(req, res, next) {
    const id = req.params.id;

    Users.findById(id)
        .then(product => {
            if (product) {
                req.product = product;
                next();
            } else {
                res.status(404).json({ message: "User Not Found." });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

module.exports = verifyUserId;

