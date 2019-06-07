#Databases

##Intro to Databases
* What is a database?
    * A collection of information/data
    * Has an interface
* SQL(relational) vs. NoSQL(non-relational)
* 


USER TABLE
id | name  |  city
------------------------
1  | Tim   |  NYC
2  | Ira   |  Missoula
3  | Sue   |  Boulder







COMMENTS TABLE
id |       text
-------------------------
1  | "lol"
2  | "Come visit Montana!"
3  | "I love puppies!!!"
4  | "Seriously Montana is great!"

USER/COMMENTS JOIN TABLE
userId  |  commentId
--------------------------
   1         3
   2         2
   2         4
   3         1
   
   
==========================
A NON-RELATIONAL DATABASE:
==========================
{ 
    name: "Ira",
    age: 24,
    city: Missoula,
    comments: [
        {text: "Come visit Montana!"},
        {text: "Seriously Montana is great"},
        {text: "Why does no one care about Montana???"}
    ],
    favColor: "purple"
}    

{ 
    name: "Tammy",
    age: 24,
    city: Missoula,
    comments: [
        {text: "Come visit Montana!"},
        {text: "Seriously Montana is great"},
        {text: "Why does no one care about Montana???"}
    ],
    favFood: "Ribeye"
}


#Intro to MongoDB
* What is MongoDB?
* Why are we using it?
    * Really good tools to use for Express 
* Let's install it!

MEAN Stack:
M - MongoDB
E - Express
A - Angular
N - Node

#Our first Mongo Commands
* mongod
* mongo
* help
* show dbs
* use
* insert
* find
* update
* remove


dogs:
name
age
breed

CRUD:
Create
Read
Update
Destroy

#Mongoose
* What is Mongoose?
* Why are we using it?
* Interact with a Mongo Database using Mongoose

