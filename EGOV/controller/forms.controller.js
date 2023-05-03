const pool = require ("../database/index")
const formsController ={
    getAll : async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM GovForms")
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
             const [rows, fields] = await pool.query("SELECT * FROM GovForms where formID = ?", [id])
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error)
        }
    },

}

module.exports = formsController