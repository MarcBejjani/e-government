const express = require("express");
const router = express.Router();

const formsController = require ("../controller/forms.controller")
router.get("/", formsController.getAll)
router.get("/:id", formsController.getById)

module.exports = router