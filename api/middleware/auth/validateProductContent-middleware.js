module.exports = function validateProductsContent(req, res, next) {
    if (!req.body) {
        res.status(400).json({ message: "Products field is required." });
    } else {
        next();
    }
}