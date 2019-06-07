var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");
 
var data = [
    {
        name: "Salmon Creek", 
        image: "http://cumberlandriver.com.au/wp-content/uploads/2014/04/cumberland-external-6.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e092403d111454fff77",
            username: "carrot"
        }
    },
    {
        name: "Granite Hill", 
        image: "https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/08/shutterstock_116105287-780d4794d174.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e092403d111454fff76",
            username: "admin"
        }
    },
    {
        name: "Piatra Craiului", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Refugiul_Ascutit_Carol_Lehman%2C_Piatra_Craiului.jpg/1024px-Refugiul_Ascutit_Carol_Lehman%2C_Piatra_Craiului.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e092403d111454fff71",
            username: "yelpcamp"
        }
    },
    {
        name: "Mountain Goat Crest", 
        image: "https://previews.123rf.com/images/tanasan10/tanasan101701/tanasan10170100132/70062954-camping-grounds-doi-samer-dow-from-national-park-sri-nan-from-nan-province-thailand.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e092403d111454ggg88",
            username: "admin"
        }
    },
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e123456d111454fff77",
            username: "carrot"
        }
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e123321d111454fff77",
            username: "admin"
        }
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e0924030ani454fff77",
            username: "Ani Ghergar"
        }
    },
    {
        name: "Ani Ghergar", 
        image: "https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/11053294_1377909085863985_7477619119680830095_n.jpg?_nc_cat=106&_nc_ht=scontent-otp1-1.xx&oh=d84e7e1dff3d1b617dc497fcbd41f986&oe=5CD89D4F",
        description: "One amazing and unforgettable special girl!",
        author:{
            id : "588c2e1924030ani454ftf74",
            username: "Ani Ghergar"
        }
    },
    {
        name: "Starry Night", 
        image: "https://scontent-otp1-1.cdninstagram.com/vp/cf8f41dd04908752efdc3e3ceb1f168d/5CF06228/t51.2885-15/e35/30077551_403215670146852_8708528719330803712_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com",
        description: "A night under the stars",
        author:{
            id : "588c2e0924030abi454fff77",
            username: "admin"
        }
    },
    {
        name: "Grey Mountains", 
        image: "https://scontent-otp1-1.cdninstagram.com/vp/ca7c114d5df41349c7e4bc936e946d88/5D053B68/t51.2885-15/e35/30084947_156391355194289_1238432164576493568_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com",
        description: "Lots of grey rocks",
        author:{
            id : "588c2e0924030bni454fff77",
            username: "Shadow Wolf"
        }
    },
    {
        name: "Sun Rise Campground", 
        image: "https://cdn.vox-cdn.com/thumbor/V7aPfCUFULF6xhD5HvL5TtWVb_A=/0x0:4741x3161/920x613/filters:focal(1992x1202:2750x1960):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59535149/shutterstock_625918454.0.jpg",
        description: "What a view to wake up at!!",
        author:{
            id : "588c2e092403ccni454fff77",
            username: "Shadow Wolf"
        }
    },
    {
        name: "Cairngorms National Park", 
        image: "https://thumbor-static.factorymedia.com/6sB1NoMr_iWLS6L1PcRnWH2Llrc=/2000x1300/smart/http%3A%2F%2Fcoresites-cdn.factorymedia.com%2Fmpora_new%2Fwp-content%2Fuploads%2F2017%2F06%2FWild-Camping-In-Scotland.jpg",
        description: "So much green and grass and shiny water :)",
        author:{
            id : "588c2e0924999anig54fff77",
            username: "admin"
        }
    },
    {
        name: "The Outer Hebrides", 
        image: "https://thumbor-static.factorymedia.com/d9keGdlxKJ5W7VMOkivoaYM27YM=/724x483/smart/http%3A%2F%2Fcoresites-cdn.factorymedia.com%2Fmpora_new%2Fwp-content%2Fuploads%2F2017%2F06%2FWild-Camping-Scotland-10.jpg",
        description: "Blue water and white sands!",
        author:{
            id : "588c2e0924999uuug54fff77",
            username: "yelpcamp"
        }
    },
    {
        name: "Wild Camping In Sutherland", 
        image: "https://thumbor-static.factorymedia.com/r_PMfg-9RusoshO2M0pJfBdPNfA=/724x483/smart/http%3A%2F%2Fcoresites-cdn.factorymedia.com%2Fmpora_new%2Fwp-content%2Fuploads%2F2017%2F06%2FScotland-2.jpg",
        description: "Sand dunes, grass and tall stones near the sea in Scotland",
        author:{
            id : "588c2e091239919ug54fff77",
            username: "carrot"
        }
    },
    {
        name: "Glen Coe", 
        image: "https://thumbor-static.factorymedia.com/AqPXI7OQLam50YVas0qrEwB6V4E=/725x482/smart/http%3A%2F%2Fcoresites-cdn.factorymedia.com%2Fmpora_new%2Fwp-content%2Fuploads%2F2017%2F06%2FWild-Camping-Scotland-11.jpg",
        description: "Wild Camping",
        author:{
            id : "588c2e09123amf9987654321",
            username: "Shadow Wolf"
        }
    }
]
 
function seedDB(){
   //Remove all campgrounds
   Campground.deleteMany({}, function(err){
        if (err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.deleteMany({}, function(err) {
            if (err){
                console.log(err);
            }
            console.log("removed comments!");
            //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author:{
                                    id : "588c2e092403d111454fff76",
                                    username: "Jack"
                                }
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        })
    }); 
    //add a few comments
}
 
module.exports = seedDB;