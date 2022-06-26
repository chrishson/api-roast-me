const getCoffeesByUserID = "SELECT * FROM coffees WHERE user_id = $1";
const addCoffeeByUserID = "INSERT INTO coffees (user_id, size, consumption_date) VALUES ($1, $2, $3)";

module.exports = {
    getCoffeesByUserID,
    addCoffeeByUserID
}