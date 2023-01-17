exports.up = knex => knex.schema.createTable("meals", table => {
  table.increments("id");
  table.text("category");
  table.text("title");
  table.text("description");
  table.text("price");
  table.varchar("image");

  table.timestamp("created_at").default(knex.fn.now());
});

exports.down =  knex => knex.schema.dropTable("meals");