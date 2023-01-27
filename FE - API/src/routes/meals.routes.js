//
const { Router } = require("express");
const MealsController = require("../controllers/MealsController");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const mealsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const mealsController = new MealsController();

mealsRoutes.get("/", mealsController.index);
mealsRoutes.post("/", upload.single("image"), mealsController.create);
mealsRoutes.get("/:id", mealsController.show);
mealsRoutes.delete("/:id", mealsController.delete);
mealsRoutes.put("/:id", mealsController.update);


module.exports = mealsRoutes;

//o middleware (UserIsAdmin) ainda não foi aplicado