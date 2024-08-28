require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const db = require('./db.js')
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

app.get('/', (req, res) => {
    res.send("Welcome to out Hotel")
})



// Import the router files
const personRoutes = require('./routes/personRoutes.js')
const menuItemRoutes = require('./routes/menuItemRoutes.js')

// use the routers
app.use('/person', personRoutes);
app.use('/menuitem', menuItemRoutes);


app.listen(PORT, () => {
    console.log(`Server running at port 3000`);
    
})