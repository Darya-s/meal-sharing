const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async(request, response) => {
    try {
        
        const titles = await knex("reservation");
        response.json(titles);
    } catch (error) {
        console.log (error);
    }
});
	

router.post("/", async (request, response) => {
    try {
          const newReservation = await knex("reservation").insert(request.body);
      response.send("New reservation added");
    } catch (error) {
      console.log (error);
    }
  });
  

  router.get("/:id", async (request, response) => {
    try {
      const reservations = await knex("reservation").where("id", parseInt(request.params.id));
      response.json(reservations);
    } catch (error) {
      console.log (error);
    }
  });

 
  router.put("/:id", async (request, response) => {
    try {
        const reservations = await knex("reservation")
        .where("id", parseInt(request.params.id))
        .update(request.body);
      response.json(reservations);
    } catch (error) {
      console.log (error);
    }
  });


router.delete("/:id", async (request, response) => {
    try {
      const deleteReservation = await knex("reservation")
        .where("id", parseInt(request.params.id))
        .del();
      response.json(deleteReservation);
    } catch (error) {
      console.log (error);
    }
  });

module.exports = router;