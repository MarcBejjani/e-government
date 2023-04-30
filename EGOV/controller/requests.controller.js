const pool = require ("../database/index")
const requestsController ={
    getAll : async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT requestID, formID, Requests.govID, requestDate, firstName,lastName FROM Requests join Users where Requests.govID = users.govID")
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
             const [rows, fields] = await pool.query("SELECT requestID, formID, Requests.govID, requestDate, firstName,lastName FROM Requests join Users where Requests.govID = users.govID AND requestID = ?", [id])
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error)
        }
    },

    newRequest : async (req, res) => {
        try {
            const {requestID, govID, formID, requestDate} = req.body
            const sql = "Insert into Requests values (?,?,?,?)"
            const [rows, fields] = await pool.query(sql, [requestID, govID, formID, requestDate])
            res.json({
                data: rows
            })  
         
        } catch (error) {
            console.log(error)
        }
    },

}

module.exports = requestsController