const express = require("express");
const router = express.Router()

const usersController = require ("../controller/users.controller")
router.get("/", usersController.getAll)
router.get("/:id", usersController.getById)
router.post("/", usersController.newUser)
router.put("/:id", usersController.updateUser)

module.exports = router