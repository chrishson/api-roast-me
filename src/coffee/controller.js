const pool = require('../db');
const queries = require('./queries');

const getCoffeesByUserID = (req, res) => {
    const userID = req.auth.payload.sub;
    pool.query(queries.getCoffeesByUserID, [userID], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const addCoffeeByUserID = (req, res) => {
    const userID = req.auth.payload.sub;
    const { size, consumption_date } = req.body;

    pool.query(queries.addCoffeeByUserID, [userID, size, consumption_date], (error, results) => {
        if (error) throw error;
        pool.query(queries.getCoffeesByUserID, [userID], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows)
        })
    })
}

module.exports = {
    getCoffeesByUserID,
    addCoffeeByUserID
}