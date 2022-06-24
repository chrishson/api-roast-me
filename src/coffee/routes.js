const { Router } = require('express');
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
const { getCoffeesByUserID } = require('./controller')
require('dotenv').config();

if (!process.env.ISSUER_BASE_URL || !process.env.AUDIENCE) {
    throw 'Make sure you have ISSUER_BASE_URL, and AUDIENCE in your .env file';
}

const checkJwt = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
});

const router = Router();

router.get('/', checkJwt, getCoffeesByUserID);

router.get('/private-scoped', checkJwt, requiredScopes('read:messages'), function (req, res) {
    res.json({
        message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
    });
});

module.exports = router;