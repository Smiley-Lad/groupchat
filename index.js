const express = require('express');
const bp = require('body-parser');
const path = require('path');
const loginRoutes = require('./routes/login');
const homeRoutes = require('./routes/home');

const app = express();

app.use(bp.urlencoded());

app.use(loginRoutes);
app.use(homeRoutes);

app.listen(3900);






// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 3800;

// // Set the view engine to use EJS (you need to install ejs using `npm install ejs`)
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Middleware to parse form data
// app.use(express.urlencoded({ extended: true }));

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes

// // Login page
// app.get('/login', (req, res) => {
//   res.render('login');
// });

// // Handle login form submission
// app.post('/login', (req, res) => {
//   const username = req.body.username;
//   // Store the username in local storage
//   res.cookie('username', username);
//   res.redirect('/');
// });

// // Home page with message form
// app.get('/', (req, res) => {
//   const username = req.cookies.username;
//   res.render('home', { username });
// });

// // Handle message form submission
// app.post('/', (req, res) => {
//   const username = req.cookies.username;
//   const message = req.body.message;
//   const data = `${username}: ${message}\n`;

//   // Append the message to the file
//   fs.appendFile('messages.txt', data, (err) => {
//     if (err) {
//       console.error(err);
//     }
//   });

//   res.redirect('/');
// });

// // Read and display messages from the file
// app.get('/messages', (req, res) => {
//   fs.readFile('messages.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error reading messages');
//     } else {
//       const messages = data.split('\n').filter((msg) => msg.trim() !== '');
//       res.render('messages', { messages });
//     }
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


