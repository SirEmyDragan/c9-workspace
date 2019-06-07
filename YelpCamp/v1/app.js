var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
            {name: "Salmon Creek", image: "http://cumberlandriver.com.au/wp-content/uploads/2014/04/cumberland-external-6.jpg"},
            {name: "Granite Hill", image: "https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/08/shutterstock_116105287-780d4794d174.jpg"},
            {name: "Mountain Goat Crest", image: "https://previews.123rf.com/images/tanasan10/tanasan101701/tanasan10170100132/70062954-camping-grounds-doi-samer-dow-from-national-park-sri-nan-from-nan-province-thailand.jpg"},
            {name: "Piatra Craiului", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Refugiul_Ascutit_Carol_Lehman%2C_Piatra_Craiului.jpg/1024px-Refugiul_Ascutit_Carol_Lehman%2C_Piatra_Craiului.jpg"}
        ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //res.send("You hit the POST route!");
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});