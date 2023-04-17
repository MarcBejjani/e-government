const pool = require ("../database/index")

const usersController = {
    getAll : async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM users")
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
             const [rows, fields] = await pool.query("SELECT * FROM users where govId = ?", [id])
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error)
        }
    },

    newUser : async (req, res) => {
        try {
            const {govId, firstName, lastName, address, password, dOB, gender, hasVoted, voterID} = req.body
            const sql = "insert into users (govId, firstName, lastName, address, password, dOB, gender, hasVoted, voterID) values (?,?,?,?,?,?,?,?,?)"
            const [rows, fields] = await pool.query(sql, [govId, firstName, lastName, address, password, dOB, gender, hasVoted, voterID])
            res.json({
                data: rows
            })  
         
        } catch (error) {
            console.log(error)
        }
    },

    updateUser : async (req, res) => {
        try {
            const {id} = req.params
            const {firstName, lastName, address, } = req.body
            const sql = "update users set firstName = ?, lastName =? , address=?  where govId =? "
            const [rows, fields] = await pool.query(sql, [firstName, lastName, address, id])
            res.json({
                data: rows
            })  
         
        } catch (error) {
            console.log(error)
        }
    },

}

module.exports = usersController