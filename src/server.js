const express = require('express');
const app = express();
const cors = require('cors');

const coffeeRoutes = require('./coffee/routes')

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/api', function (req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

app.use('/api/coffees', coffeeRoutes)

app.use(function (err, req, res, next) {
  console.error(err.stack);
  return res.set(err.headers).status(err.status).json({ message: err.message });
});

app.listen(3010);
console.log('Listening on http://localhost:3010');