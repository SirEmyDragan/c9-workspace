var mongoose = require("mongoose");

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        { //an array of object ids
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
module.exports = mongoose.model ("User", userSchema);
// Alternative solution
// var User = mongoose.model ("User", userSchema);
// module.exports = User;