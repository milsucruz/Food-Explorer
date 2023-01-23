//
const { Router } = require("express");
const MealsController = require("../controllers/MealsController");

const mealsRoutes = Router();

const mealsController = new MealsController();

mealsRoutes.get("/", mealsController.index);
mealsRoutes.post("/", mealsController.create);
mealsRoutes.get("/:id", mealsController.show);
mealsRoutes.delete("/:id", mealsController.delete);


module.exports = mealsRoutes;

//o middleware (UserIsAdmin) ainda não foi aplicado