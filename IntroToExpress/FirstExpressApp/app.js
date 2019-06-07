// console.log("Our Express App will go here!");

var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){ //req = request res = response
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    console.log("SOMEONE MADE A REQUEST TO /DOG!!!");
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " Subreddit!!!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS PAGE!");
});

// Anything else => "YOU ARE A STAR!!!"
app.get("*", function(req, res) {
    res.send("YOU ARE A STAR!!!");
});

//Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
}); 
