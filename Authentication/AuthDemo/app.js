var express               = require("express"),
    app                   = express(),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
    
mongoose.connect("mongodb://localhost:27017/auth_demo_app", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(require("express-session")({
    secret: "Veritas, Anoris, Amare",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
//reading data from session decoding, encoding and putting it back in session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//==========
//ROUTES
//==========
//Home Page
app.get("/", function(req, res){
    res.render("home");
});

//Secret Page
app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

//AUTH ROUTES
//Show Sign Up Form
app.get("/register", function(req, res) {
    res.render("register");
});

//Handling User Sign Up
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

//LOGIN ROUTES
//Render Login Form
app.get("/login", function(req, res) {
    res.render("login");
});

//Login Logic
//middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}) ,function(req, res){
});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next){ //request object, response object, next thing to be called
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!");
});