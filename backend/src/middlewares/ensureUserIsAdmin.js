const knex = require("../database/knex");
const AppError = require("../utils/AppError");

async function ensureUserIsAdmin(request, response, next) {
  const user_id = request.user.id;

  const user = await knex("users").where({id: user_id}).first();

  if(!user.isAdm) {
    throw new AppError("Usuário não autorizado!", 401)
  }

  next();
}

module.exports = ensureUserIsAdmin;