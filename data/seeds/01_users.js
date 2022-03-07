
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users').del()
    .then(function () {
    return knex('users').insert([
    { username: 'Chase', password: "123Test", department: "buyer" },
    { username: 'Max', password: "123Test", department: "seller" },
    { username: 'Sue', password: "123Test", department: "buyer" },
    { username: 'Joan', password: "123Test", department: "seller" },
  ]);
});
};