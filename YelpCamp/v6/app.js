var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    passport   = require("passport"),
    LocalStrategy = require("passport-local"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment"),
    User       = require("./models/user"),
    seedDB     = require("./seeds");
    
//APP CONFIG
mongoose.connect("mongodb://localhost:27017/yelp_camp_v3", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();


// Old Seed Data
// // Campground.create(
// //     {
// //         name: "Granite Hill", 
// //         image: "https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/08/shutterstock_116105287-780d4794d174.jpg",
// //         description: "This is a huge granite hill, no bathrooms, no water, beautiful granite!"
// //     }, function(err, campground){
// //         if(err){
// //             console.log(err);
// //         }else {
// //             console.log("Newly created campground: ");
// //             console.log(campground);
// //         }
// //     });

var campgrounds = [
            {name: "Salmon Creek", image: "http://cumberlandriver.com.au/wp-content/uploads/2014/04/cumberland-external-6.jpg"},
            {name: "Granite Hill", image: "https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/08/shutterstock_116105287-780d4794d174.jpg"},
            {name: "Mountain Goat Crest", image: "https://previews.123rf.com/images/tanasan10/tanasan101701/tanasan10170100132/70062954-camping-grounds-doi-samer-dow-from-national-park-sri-nan-from-nan-province-thailand.jpg"},
            {name: "Piatra Craiului", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Refugiul_Ascutit_Carol_Lehman%2C_Piatra_Craiului.jpg/1024px-Refugiul_Ascutit_Carol_Lehman%2C_Piatra_Craiului.jpg"}
        ];

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Better days are yet to come!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

//RESTfull Routes:
app.get("/", function(req, res){
    // res.render("landing");
    res.redirect("/campgrounds");
});

//INDEX ROUTE - show all campgrounds
app.get("/campgrounds", function(req, res){
        //Get all campgrounds from DB
        Campground.find({}, function(err, allCampgrounds){
            if(err){
                console.log(err);
            }else {
                res.render("campgrounds/index", {campgrounds:allCampgrounds});
            }
        });
});

//CREATE ROUTE - add new campground to DB
app.post("/campgrounds", function(req, res){
    //res.send("You hit the POST route!");
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    // campgrounds.push(newCampground);
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    })
});

//NEW - show form to create new campgrounds
app.get("/campgrounds/new", function(req, res) {
    res.render("campgrounds/new");
});

//SHOW  - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with the proper ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else {
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

//===================
//  COMMENTS ROUTES
//===================

app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res) {
    //find campground by Id
    Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
       } else{
            res.render("comments/new", {campground: campground});
       }
    });
});

app.post("/campgrounds/:id/comments", isLoggedIn, function(req, res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground) {
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
          Comment.create(req.body.comment, function(err, comment){
              if(err){
                  console.log(err);
              }else {
                  campground.comments.push(comment);
                  campground.save();
                  res.redirect("/campgrounds/" + campground._id);
              }
          });
       }
    });
    //create new comment
    //connect new comment to campground
    //redirect campground show page
});

//===========
//AUTH ROUTES
//===========

//SHOW REGISTER FORM
app.get("/register", function(req, res) {
    res.render("register");
});

//HANDLE SIGN UP LOGIC
app.post("/register", function(req, res) {
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

//SHOW LOGIN FORM
app.get("/login", function(req, res) {
    res.render("login");
});

//HANDLING LOGIN LOGIC
// app.post("/login", middleware, callback function);
app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res) {
    
});

//LOGOUT ROUTE
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});