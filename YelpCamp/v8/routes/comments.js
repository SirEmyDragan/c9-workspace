var express    = require("express"),
    router     = express.Router({mergeParams: true}), //change app.get or app.post to router.get and router.post
    Campground = require("../models/campground"),
    Comment    = require("../models/comment");

//  COMMENTS ROUTES
//Comments NEW /campgrounds/:id/comments/new
router.get("/new", isLoggedIn, function(req, res) {
    //find campground by Id
    Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
       } else{
            res.render("comments/new", {campground: campground});
       }
    });
});

//Comment CREATE /campgrounds/:id/comments
router.post("/", isLoggedIn, function(req, res){
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
                    //add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    //save the comment
                    comment.save();
                    //create new comment
                    campground.comments.push(comment);
                    //connect new comment to campground
                    campground.save();
                    //redirect campground show page
                    res.redirect("/campgrounds/" + campground._id);
                }
          });
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