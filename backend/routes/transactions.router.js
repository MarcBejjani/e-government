const express = require("express");
const router = express.Router()

const transactionsController= require("../controller/transactions.controller")
router.get("/", transactionsController.getAll)
router.get("/:id", transactionsController.getById)
router.post("/", transactionsController.newTransaction)


module.exports = router