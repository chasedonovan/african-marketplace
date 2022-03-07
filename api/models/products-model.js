const db = require("../database/dbConfig.js");

module.exports = {
    getProductss,
    addProducts,
    getProductssById,
    updateProducts,
    deleteProducts,
    find,
    getProductssByCategory
};

function getProductss() {
    return db("products");
}

function addProducts(product, id) {
    product.user_id = id
    return db("products").insert(product, "id");
}

function getProductssByCategory(category) {
    return db("products")
        .where({ category })

}

function getProductssById(id) {
    return db("products")
        .where({ id })
        .first();
}

function updateProducts(id, changes) {
    return db("products")
        .where({ id })
        .update(changes);
}

function deleteProducts(id) {
    return db("products")
        .where({ id })
        .del();
}

function find(category) {
    const query = db('products').select('id', 'name', 'category');
    if (category === null) {
        return query
    } else if (category) {
        query.where({ category });
    }
    return query;
}