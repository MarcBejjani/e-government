const pool = require ("../database/index")

const transactionsController = {
    getAll : async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM transactions")
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
             const [rows, fields] = await pool.query("SELECT * FROM transactions where transactionID = ?", [id])
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error)
        }
    },

    newTransaction : async (req, res) => {
        try {
            const {transactionID, senderAddress, recieverAddress, amount, type, timestamp, senderID} = req.body
            const sql = "insert into transactions (transactionID, senderAddress, recieverAddress, amount, type, timestamp, senderID) values (?,?,?,?,?,?,?)"
            const [rows, fields] = await pool.query(sql, [transactionID, senderAddress, recieverAddress, amount, type, timestamp, senderID])
            res.json({
                data: rows
            })  
         
        } catch (error) {
            console.log(error)
        }
    },

}

module.exports = transactionsController