const pool = require ("../database/index")

const locationsController ={
    getAll : async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM location")
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
             const [rows, fields] = await pool.query("SELECT * FROM location where locationID = ?", [id])
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error)
        }
    },

}

module.exports = locationsController