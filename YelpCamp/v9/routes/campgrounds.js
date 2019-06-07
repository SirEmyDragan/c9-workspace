var express    = require("express"),
    router     = express.Router(), //change app.get or app.post to router.get and router.post
    Campground = require("../models/campground");

//INDEX Route - show all campgrounds /campgrounds
router.get("/", function(req, res){
        //Get all campgrounds from DB
        Campground.find({}, function(err, allCampgrounds){
            if(err){
                console.log(err);
            }else {
                res.render("campgrounds/index", {campgrounds:allCampgrounds});
            }
        });
});

//CREATE Route - add new campground to DB /campgrounds
router.post("/", isLoggedIn, function(req, res){
    //res.send("You hit the POST route!");
    //get data from form and add to campgrounds array
    var name          = req.body.name,
        image         = req.body.image,
        desc          = req.body.description,
        author        = {
                            id: req.user._id,
                            username: req.user.username
                        },
        newCampground = {name: name, image: image, description: desc, author: author};
    // campgrounds.push(newCampground);
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create new campgrounds /campgrounds/new
router.get("/new", isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
});

//SHOW  - shows more info about one campground /campgrounds/:id
router.get("/:id", function(req, res) {
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

//Middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;