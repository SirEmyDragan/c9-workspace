var express = require("express");
var app = express();

//Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});
//===============================================================
//Visiting "/speak/pig" should print "The pig says 'Oink'"
//Visiting "/speak/cow" should print "The cow says 'Moo'"
//Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human!",
        goldfish: "..."
    }
    var sound = sounds[animal];
    //var sound = "";
    // if (animal === "pig"){
    //     sound = "Oink";
    // }else if(animal === "cow"){
    //     sound = "Moo";
    // }else if(animal === "dog"){
    //     sound = "Woof Woof!";
    // }
    res.send("The " + animal + " says '" + sound + "'.");
});
//===============================================================

//Visiting "/repeat/hello/3" should print "hello hello hello"
//Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
//Visiting "/repeat/blah/2" should print "blah blah"
app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for(var i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
});

//If a user visits any other route, print:
//"Sorry, page not found...What are you doing with your life?"
app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
}); 
