const router = require("express").Router();

const Products = require("./products-model.js");
const restricted = require("../auth/middleware/restricted-middleware.js");
const validateProductsContent = require("../auth/middleware/validateProductsContent-middleware");
const verifyProductId = require("../auth/middleware/verifyProductId-middleware.js");

//add Product
router.post("/addproduct", restricted, validateProductsContent, (req, res) => {
    const id = req.jwtToken.subject
    Products.addProduct(req.body, id)
        .then(product => {
            res.status(201).json(product);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//Get Products
router.get("/", restricted, (req, res) => {
    Products.getProducts()
        .then(products => {
            res.status(200).json(products);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//Get Users Products
router.get("/:id", verifyProductId, (req, res) => {
    const id = req.params.id;

    Products.getProductsById(id)
        .then(product => {
            res.status(200).json(product);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//update Users Product
router.put("/:id", restricted, verifyProductId, validateProductsContent, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Products.updateProduct(id, changes)
        .then(updatedProduct => {
            res.status(201).json(updatedProduct);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//delete users Product
router.delete("/:id", restricted, verifyProductId, (req, res) => {
    const id = req.params.id;

    Products.deleteProduct(id)
        .then(product => {
            res.status(200).json({ message: "Product successfully deleted." });
            console.log(product)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//get products by category
router.get("/category/:category", (req, res) => {
    const category = req.params.category;

    Products.getProductsByCategory(category)
        .then(product => {
            res.status(200).json(product);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;