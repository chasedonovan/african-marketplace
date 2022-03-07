const Products = require('../../models/products-model.js')
module.exports = function verifyProductId(req, res, next) {
    const id = req.params.id;

    Products.getProductsById(id)
        .then(product => {
            if (product) {
                req.product = product;
                next();
            } else {
                res.status(404).json({ message: "Product doesn't exist." });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
}