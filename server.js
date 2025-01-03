const express = require('express');
const bodyParser = require('body-parser');
const { addSubscription } = require('./database');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Handle subscription requests
app.post('/subscribe', (req, res) => {
    const email = req.body.email;
    addSubscription(email, (err) => {
        if (err) {
            if (err.code === 'EREQUEST' && err.originalError.info.number === 2627) {
                res.json({ success: false, message: 'Email already subscribed' });
            } else {
                res.json({ success: false, message: 'Subscription failed' });
            }
        } else {
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
