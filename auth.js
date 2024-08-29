const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person.js');

passport.use(new LocalStrategy(async (username, password, done)=>{
    // Authentication logic
    // varification logic
    try {
       console.log('Received credentials:', username, password);
       const user = await Person.findOne({username});
       if(!user)
           return done(null, false,{message: "Incorrect username."});

       const isPasswordMatch = user.password === password ? true : false;
       if(isPasswordMatch){
           return done(null, user);
       } else {
           return done(null, false, {message: "Incorrect password."});
       }
    } catch (error) {
       return done(error);
    }
}))

module.exports = passport;
