#YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds
* 
Each Campground has:
    * Name
    * Image
    
[
    {name: "Salmon Creek", image: "http://www.image.com"}
    {name: "Salmon Creek", image: "http://www.image.com"}
    {name: "Salmon Creek", image: "http://www.image.com"}
    {name: "Salmon Creek", image: "http://www.image.com"}
    {name: "Salmon Creek", image: "http://www.image.com"}
    {name: "Salmon Creek", image: "http://www.image.com"}
    {name: "Salmon Creek", image: "http://www.image.com"}
    {name: "Salmon Creek", image: "http://www.image.com"}
    {name: "Salmon Creek", image: "http://www.image.com"}
    {name: "Salmon Creek", image: "http://www.image.com"}
]

#Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model!
* Make our errors go  away!
* Display comments on campground show page

#Comment New/Create
* Discuss nested routes
* Addthe comment new and create routes
* Add the new comment form

#Style Show Page
* Add sidebar to show page
* Display comments nicely

#Finish Styling Show Page
* Add public directory
* Add custom stylesheet

#Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model

#Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

#Auth Pt. 3 - Login
* Add login routes
* Add login template

#Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

#Auth Pt. 5 - Show/Hide Links
* Show/hide auth links correctly

#Refactor the Routes
* Use Express router to reorganize all routes


RESTFUL ROUTES

name    url         verb    description
===========================================================
INDEX   /dogs       GET     Display a list of all dogs
NEW     /dogs/new   GET     Displays form to make a new dog
CREATE  /dogs       POST    Add new dog to DB
SHOW    /dogs/:id   GET     Shows info about one dog

INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     campgrounds/:id/comments/new   GET
CREATE  campgrounds/:id/comments       POST

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