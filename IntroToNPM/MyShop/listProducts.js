var faker = require('faker');
// var pName = faker.commerce.productName();
console.log("===================");
console.log("WELCOME TO MY SHOP:");
console.log("===================");
for(var i = 0; i < 10; i++){
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}