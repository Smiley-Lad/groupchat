const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// router.get('/home', (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
// });
router.get('/home', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
});

router.post('/home', (req, res, next) => {
    const username = req.body.username;
    const msgs = req.body.msgs;

    // Append the username and message to a file (e.g., chat.txt)
    fs.appendFile('chat.txt', `${username}: ${msgs}\n`, (err) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }

        // Send a success response
        res.sendStatus(200);
    });
});

router.get('/messages', (req, res, next) => {
    // Read the contents of the chat.txt file
    fs.readFile('chat.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }

        const messages = data.split('\n');
        console.log(messages); // Add this line to check if the messages are correctly read

        // Send the messages as a JSON response
        res.json({ messages });
    });
});


module.exports = router;