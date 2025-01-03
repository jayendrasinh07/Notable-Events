const sql = require('mssql');
const config = require('./config');

// Connect to the SQL server
sql.connect(config, err => {
    if (err) {
        console.error('Failed to connect to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

// Function to add a new subscription
function addSubscription(email, callback) {
    const request = new sql.Request();
    request.input('email', sql.VarChar, email);
    request.query('INSERT INTO subscriptions (email) VALUES (@Email)', (err, result) => {
        callback(err);
    });
}

// Function to get all subscriptions
function getSubscriptions(callback) {
    const request = new sql.Request();
    request.query('SELECT email FROM subscriptions', (err, result) => {
        callback(err, result.recordset);
    });
}

module.exports = {
    addSubscription,
    getSubscriptions
};
