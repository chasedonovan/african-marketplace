
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('products').del()
    .then(function () {
  
      return knex('products').insert([
    { name: 'chicken', description: "seed test data", price: 4, location: "Sauti", category: "Animal Products", user_id: 2, },
    { name: 'edamame', description: "seed test data", price: 5, location: "Kinshasa", category: "Beans", user_id: 2 },
    { name: 'Dry Maize', description: "seed test data", price: 12, location: "Niger", category: "Cereals-Maize", user_id: 3 },
    { name: 'Corn', description: "seed test data", price: 5, location: "South Africa", category: "Maize", user_id: 3 },
    { name: 'Wheat', description: "seed test data", price: 7, location: "Kinshasa", category: "Grain", user_id: 4 },
    { name: 'Pears', description: "seed test data", price: 8, location: "Luanda", category: "Fruits", user_id: 4 }
  ]);
});
};