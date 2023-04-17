const express = require("express");
const router = express.Router()

const locationsController = require("../controller/locations.controller")
router.get("/", locationsController.getAll)
router.get("/:id", locationsController.getById)

module.exports = router