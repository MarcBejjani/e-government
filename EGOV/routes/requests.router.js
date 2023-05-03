const express = require("express");
const router = express.Router();

const requestsController = require ("../controller/requests.controller")
router.get("/", requestsController.getAll)
router.get("/:id", requestsController.getById)
router.post("/", requestsController.newRequest)

module.exports = router