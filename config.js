const config = {
    user: 'your_username', // Replace 'your_username' with your actual username
    password: 'your_password',
    server: 'your_server', // You can use 'localhost\\instance' to connect to named instance
    database: 'your_database',
    options: {
        encrypt: true, // Use this to ensure the connection is encrypted
        trustServerCertificate: true // Change to true for local dev / self-signed certs
    }
};

module.exports = config;
