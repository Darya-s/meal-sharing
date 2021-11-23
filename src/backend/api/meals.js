const express = require("express");
const router = express.Router();
const knex = require("../database");


// Display All meals 
router.get("/", async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const titles = await knex("meals");
        response.json(titles);
    } catch (error) {
        throw error;
    }
});
//Adds a new meal
router.post("/", async (request, response) => {
    try {
          const newmeals = await knex("meals").insert(request.body);
      response.send("New meal added");
    } catch (error) {
      throw error;
    }
  });
  //Returns meal by id
  router.get("/:id", async (request, response) => {
    try {
      const meals = await knex("meals").where("id", parseInt(request.params.id));
      response.json(meals);
    } catch (error) {
      throw error;
    }
  });
  //Updates the meal by id	
  router.put("/:id", async (request, response) => {
    try {
        const meals = await knex("meals")
        .where("id", parseInt(request.params.id))
        .update(request.body);
      response.json(meals);
    } catch (error) {
      throw error;
    }
  });
//Deletes the meal by id
router.delete("/:id", async (request, response) => {
    try {
      const deleteMeal = await knex("meals")
        .where("id", parseInt(request.params.id))
        .del();
      response.json(deleteMeal);
    } catch (error) {
      throw error;
    }
  });
  
     
  router.get("/", async (req, res) => {
    try {
      const maxPrice = req.query.maxPrice;
      const availableReservations = req.query.availableReservations;
      const title = req.query.title;
      const createdAfter = req.query.createdAfter;
      const limit = req.query.limit;
      // For maxPrice
      if (maxPrice) {
        const result = await knex("meals").where("price", "<", maxPrice);
        res.send(result);
      }// Get meals that still has available reservations
      else if (availableReservations) {
        const result = await knex("meals").where("number_of_guests", ">", 0);
        res.send(result);
      }
      // Get meals that partially match a title
      else if (title) {
        const result = await knex("meals").where("title", "like", `%${title}%`);
        res.send(result);
      }
      // Get meals that has been created after the date
      else if (createdAfter) {
        const newDate = new Date(createdAfter);
        const result = await knex("meals").where("when", ">", newDate);
        res.send(result);
      }
      // Only specific number of meals
      else if (limit) {
        const result = await knex("meals").limit(limit);
        res.send(result);
      }
      //limit+maxPrice
      else {
      const meal = await knex("meals")
      .where("price", "<=", parseInt(maxPrice))
      .limit(parseInt(limit));
    return response.json(meal);
    }
    } catch (error) {
      throw error;
    }
    });
    module.exports = router;