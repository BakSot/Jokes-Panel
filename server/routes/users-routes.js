const express = require("express");

const usersControllers = require("../controllers/users-controllers");

const router = express.Router();

router.get("/", usersControllers.getUsers);
router.get("/users", usersControllers.getUsers);
router.get("/users/:uid", usersControllers.getJoke);
router.put("/users/:uid", usersControllers.updateUser);

module.exports = router;
