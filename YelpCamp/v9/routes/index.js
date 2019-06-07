var express    = require("express"),
    router     = express.Router(), //change app.get or app.post to router.get and router.post
    passport   = require("passport"),
    User       = require("../models/user");

//ROOT Route:
router.get("/", function(req, res){
    // res.render("landing");
    res.redirect("/campgrounds");
});

//AUTH ROUTES
//REGISTER Form Route
router.get("/register", function(req, res) {
    res.render("register");
});

//Handle SIGN UP Logic
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/campgrounds");
        });
    });
});

//LOGIN Form Route
router.get("/login", function(req, res) {
    res.render("login");
});

//Handling LOGIN Logic
// app.post("/login", middleware, callback function);
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {
    
});

//LOGOUT Route
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

//Middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;