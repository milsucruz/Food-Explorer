exports.up = knex => knex.schema.createTable("items", table => {
  table.increments("id");
  table.integer("order_id").references("id").inTable("orders").onDelete("CASCADE");
  table.integer("meal_id").references("id").inTable("meals").onDelete("CASCADE");
  table.text("title");
  table.text("quantity");

  table.timestamp("created_at").default(knex.fn.now());
});

exports.down =  knex => knex.schema.dropTable("items");