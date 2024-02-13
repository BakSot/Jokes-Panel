const express = require("express");

const jokesControllers = require("../controllers/jokes-controllers");

const router = express.Router();

// router.get("/", jokesControllers.getUsers);
router.get("/jokes", jokesControllers.getJokes);
router.get("/jokes/:uid", jokesControllers.getJoke);
router.put("/jokes/:uid", jokesControllers.updateJokes);

module.exports = router;
