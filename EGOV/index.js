

const express = require("express");
const app = express();


const usersRouter = require("./routes/users.router")
const appointmentsRouter = require("./routes/appointments.router")
const locationsRouter = require("./routes/locations.router")
const transactionsRouter = require("./routes/transactions.router")
const formsRouter = require("./routes/forms.router")
const requestsRouter = require("./routes/requests.router")

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/v1/users", usersRouter)
app.use("/api/v1/appointments", appointmentsRouter)
app.use("/api/v1/locations", locationsRouter)
app.use("/api/v1/transactions", transactionsRouter)
app.use("/api/v1/forms", formsRouter)
app.use("/api/v1/requests", requestsRouter)

app.listen(3000, () => console.log('App Available'));




