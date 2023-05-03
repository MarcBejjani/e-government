const pool = require ("../database/index")

const appointmentsController = {
    getAll : async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select appointmentID, appointment_time, appointmentType, location.address, location.city, users.firstName, users.lastName from appointment inner join location on appointment.locationID = location.locationID Inner join users on appointment.govID = users.govID")
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error)
        }
    },

    getById : async (req, res) => {
        try {
            const {id} = req.params
             const [rows, fields] = await pool.query("select appointmentID, appointment_time, appointmentType, location.address, location.city, users.firstName, users.lastName from appointment inner join location on appointment.locationID = location.locationID Inner join users on appointment.govID = users.govID where appointmentID= ?", [id])
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error)
        }
    },

    newAppointment : async (req, res) => {
        try {
            const {appointmentID, appointment_time, locationID, govID, appointmentType} = req.body
            const sql = "insert into appointment (appointmentID, appointment_time, locationID, govID, appointmentType) values (?,?,?,?,?)"
            const [rows, fields] = await pool.query(sql, [appointmentID, appointment_time, locationID, govID, appointmentType])
            res.json({
                data: rows
            })  
         
        } catch (error) {
            console.log(error)
        }
    },
}


module.exports = appointmentsController