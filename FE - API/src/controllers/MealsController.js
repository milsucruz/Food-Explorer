//Imports
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

 
class MealsController {
  async create (request, response) {
    const { title, description, category, price, ingredients } = request.body;
    
    const checkMealExists = await knex("meals").where({title}).first();

    if(checkMealExists) {
      throw new AppError("Esse prato já está cadastrado!")
    }

    const meal_id = await knex("meals").insert({
      title,
      description,
      category,
      price
    });

    const hasOnlyOneIngredient = typeof(ingredients) === "string";
    let ingredientsInsert;

    if (hasOnlyOneIngredient) {
      ingredientsInsert = {
        name: ingredients,
        meal_id
      }
    } else if (ingredients.length > 1) {
      ingredientsInsert = ingredients.map(name => {
        return{
          name,
          meal_id
        }
      });
    }
   
    await knex("ingredients").insert(ingredientsInsert);

    return response.status(201).json();
  }

  async show (request, response) {
    const {id} = request.params;

    const meal = await knex("meals").where({id}).first();
    const ingredients = await knex("ingredients").where({meal_id: id}).orderBy("name");
    
    return response.json({
      ...meal,
      ingredients
    });
  }

  async delete (request, response) {
    const {id} = request.params;

    await knex("meals").where({id}).delete();

    response.json();
  }

  async index (request, response) {
    const {title, ingredients} = request.query;

    let meals;

    if(ingredients) {
      const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim());
      
      meals = await knex("ingredients")
      .select([
        "meals.id", "meals.title", "meals.description", "meals.category", "meals.price", "meals.image"
      ])
      .whereLike("meals.title", `%${title}%`)
      .whereIn("title", filterIngredients)
      .innerJoin("meals", "meals.id", "ingredients.meals_id")
      .orderBy("meals.title")
    }

    else {
      meals = await knex("meals").whe("title", `%${title}%`).orderBy("title")
    }

    const mealsIngredients = await knex("ingredients")
    const mealsWithIngredients = meals.map(meal => {
      const mealIngredient = mealsIngredients.filter(ingredient => ingredient.meal_id === meal.id);

      return{
        ...meal,
        ingredients: mealIngredient
      }
    });

    return response.json(mealsWithIngredients);
  }
  
}

module.exports = MealsController