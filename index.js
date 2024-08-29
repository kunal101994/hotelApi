require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./db.js')
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body
const passport = require('./auth.js');

<<<<<<< HEAD

//Middleware function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();  // move pn to the next phase
}

app.use(logRequest);
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})

app.get('/',(req, res) => {
=======
app.get('/', (req, res) => {
>>>>>>> 62ca0dd0b2f2659c4e718188f5a3064beb5fa356
    res.send("<h1>Welcome to out Hotel</h1>")
})

// Import the router files
const personRoutes = require('./routes/personRoutes.js')
const menuItemRoutes = require('./routes/menuItemRoutes.js')

// use the routers
app.use('/person', localAuthMiddleware,personRoutes);
app.use('/menuitem',localAuthMiddleware, menuItemRoutes);


app.listen(PORT, () => {
    console.log(`Server running at port 3000`);
    
})
