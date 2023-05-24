const express= require('express');
 var passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys=require('./config/keys');

const app = express();
passport.use(
    new GoogleStrategy(
    {
    clientID:keys.googleClientId,
    clientSecret:keys.googleSecreteKey,
    callbackURL: '/auth/google/callback'
}, 
(accessToken,refreshToken,profile,done)=>{
    console.log("access token "+accessToken);
    console.log("refresh token "+refreshToken);
    console.log("profile "+profile);
}
)); 

app.get('/auth/google', passport.authenticate('google',{
    //ask google to access profile and emails
    scope:['profile','email']
}))
app.use('/auth/google/callback', passport.authenticate('google')
)
const PORT =process.env.PORT||3000;
app.listen(PORT);