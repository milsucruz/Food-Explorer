//
const { Router } = require("express");
const userRouter = require("./users.routes");
const mealsRouter = require("./meals.routes")
const sessionsRouter = require("./sessions.routes")

//
const routes = Router();
routes.use("/users", userRouter);
routes.use("/meals", mealsRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;