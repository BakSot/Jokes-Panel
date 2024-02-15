const express = require("express");

const jokesControllers = require("../controllers/jokes-controllers");

const router = express.Router();

// router.get("/", jokesControllers.getUsers);
router.get("/jokes", jokesControllers.getJokes);
router.get("/jokes/:uid", jokesControllers.getJoke);
router.put("/jokes/:uid", jokesControllers.updateJokes);
// router.patch("/jokes/:uid", jokesControllers.updateJoke);
router.post("/jokes", jokesControllers.postJoke);
// router.patch("/jokes/:uid", jokesControllers.updateAJoke);
router.delete("/jokes/:uid", jokesControllers.deleteAJoke);

module.exports = router;
