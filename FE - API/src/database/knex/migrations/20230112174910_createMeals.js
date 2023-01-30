exports.up = knex => knex.schema.createTable("meals", table => {
  table.increments("id");
  table.text("title");
  table.text("description");
  table.text("price");
  table.text("category");
  table.varchar("image");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

exports.down =  knex => knex.schema.dropTable("meals");