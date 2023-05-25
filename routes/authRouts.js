const passport = require('passport');

module.exports=(app)=>{
    app.get('/auth/google', passport.authenticate('google',{
    //ask google to access profile and emails
    scope:['profile','email']
}))
    app.use('/auth/google/callback', passport.authenticate('google')
)
}