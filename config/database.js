const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://vedran555:berff555@ds119150.mlab.com:19150/nutrition-ang2',
    secret: crypto
}