exports.up = function (knex) {
    return knex.schema
        .createTable("users", users => {
            users.increments();

            users
                .string("username", 128)
                .notNullable()
                .unique();
            users.string("password", 128).notNullable();
            users.string("department", 128).notNullable();
        })
        .createTable("products", products => {
            products.increments();
            products.text("name");
            products.text("description");
            products.float("price");
            products.text("location");
            products.text("category");
            products.string("URL");
            products
                .integer("user_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("products").dropTableIfExists("users");
};