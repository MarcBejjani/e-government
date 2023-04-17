const express = require("express");
const router = express.Router()

const appointmentsController = require ("../controller/appointments.controller")
router.get("/", appointmentsController.getAll)
router.get("/:id", appointmentsController.getById)
router.post("/", appointmentsController.newAppointment)


module.exports = router