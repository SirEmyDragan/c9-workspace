// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var mongoose = require("mongoose");
var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    seedDB     = require("./seeds");
    
//APP CONFIG
mongoose.connect("mongodb://localhost:27017/yelp_camp_v3", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
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
                res.render("index", {campgrounds:allCampgrounds});
            }
        });
        // 
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
    res.render("new.ejs");
});

//SHOW  - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with the proper ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});