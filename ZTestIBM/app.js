var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    methodOverride = require("method-override");

//APP CONFIG
mongoose.connect("mongodb://localhost:27017/user_list", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
mongoose.set('useFindAndModify', false);

//SCHEMA SETUP | MONGOOSE/MODEL CONFIG
var userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    username: String,
    email: String,
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    lat: Number,
    lng: Number,
    phone: String,
    website: String,
    companyname: String,
    catchPhrase: String,
    bs: String
});
var User = mongoose.model("User", userSchema);

// User.create(
//         {   "id": 10,
//             "name": "Clementina DuBuque",
//             "username": "Moriah.Stanton",
//             "email": "Rey.Padberg@karina.biz",
//             "address": {
//               "street": "Kattie Turnpike",
//               "suite": "Suite 198",
//               "city": "Lebsackbury",
//               "zipcode": "31428-2261",
//               "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//               }
//             },
//             "phone": "024-648-3804",
//             "website": "ambrose.net",
//             "company": {
//               "companyname": "Hoeger LLC",
//               "catchPhrase": "Centralized empowering task-force",
//               "bs": "target end-to-end models"
//             }
//           }, function(err, user){
//             if(err){
//               console.log(err);
//             }else {
//               console.log("Newly created user: ");
//               console.log(user);
//             }
//           }  
//   );

//RESTFUL ROUTES
app.get("/", function(req, res){
    // res.render("landing");
    res.redirect("/users");
});

//INDEX - show all users
app.get("/users", function(req, res){
    User.find({}, function(err, allUsers){
      if(err){
        console.log(err);
      }else {
        res.render("index", {users:allUsers});         
      }
    });
});

//NEW - show form to create new user
app.get("/users/new", function(req, res){
    res.render("new");
});

//CREATE - add new user
app.post("/users", function(req, res){
    //get data from form and add to users array
    var id = req.body.id;
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var street = req.body.street;
    var suite = req.body.suite;
    var city = req.body.city;
    var zipcode = req.body.zipcode;
    var lat = req.body.lat;
    var lng = req.body.lng;
    var phone = req.body.phone;
    var website = req.body.website;
    var companyname = req.body.companyname;
    var catchPhrase = req.body.catchPhrase;
    var bs = req.body.bs;

    var newUser = {id: id, name:name, username: username, email: email, street: street, suite: suite, city: city, zipcode: zipcode, lat: lat, lng: lng, phone: phone, website: website, companyname: companyname, catchPhrase: catchPhrase, bs: bs};
    // users.push(newUser);
    User.create(req.body.user, function(err, newUser){
      if(err){
          // console.log(err);
          res.render("new");
      }else {
        //redirect to users/index page
        res.redirect("/users");
      }
    });
});

//SHOW - shows more info about one user
app.get("/users/:id", function(req, res) {
    //find the user with provided ID
    User.findById(req.params.id, function(err, foundUser){
      if(err){
        // console.log(err);
        res.redirect("/users");
      }else {
        //render show template with that user
        res.render("show", {user: foundUser});
      }
    });
});

//EDIT ROUTE
app.get("/users/:id/edit", function(req, res) {
  User.findById(req.params.id, function(err, foundUser){
    if(err){
      res.redirect("/users");
    }else {
      res.render("edit", {user: foundUser});
    }
  });
});

//UPDATE ROUTE
app.put("/users/:id", function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body.user, function(err, updatedUser){
    if(err){
      res.redirect("index");
    }else {
      res.redirect("/users/" + req.params.id);
    }
  });
});

//DELETE ROUTE
app.delete("/users/:id", function(req, res){
  //destroy user
  User.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect("/users");
    }else {
      res.redirect("/users");
    }
  });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("User List Server Has Started!");
});