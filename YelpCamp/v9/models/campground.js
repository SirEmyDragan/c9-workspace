var mongoose = require("mongoose");

//SCHEMA SETUP | MONGOOSE/MODEL CONFIG
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
        ]
});
//Compiling Schema into a model
module.exports = mongoose.model("Campground", campgroundSchema);
// Alternate solution
// var Campground = mongoose.model("Campground", campgroundSchema);
// module.exports = Campground;