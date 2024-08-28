const mongoose = require('mongoose');

// Define the Mongodb connection URL
// const mongoURL =  process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

//setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
    
})

db.on('error', (err) => {
    console.log('mongoDB connection error:', err);
    
})

db.on('disconnected', () => { 
    console.log('MongoDB disconnected');
    
})

module.exports = db;