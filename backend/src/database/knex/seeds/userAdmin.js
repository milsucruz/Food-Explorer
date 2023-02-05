const { hash } = require("bcryptjs")

exports.seed = async function(knex) {
  await knex("users").insert([
    {
      name:"Admin",
      email: "admin@email.com",
      password: await hash("123", 8),
      isAdm: true
    }
  ]);
}