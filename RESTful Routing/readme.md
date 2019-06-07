#RESTful Routing

##Introduction
* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD (CREATE, READ, UPDATE, DESTROY)
REST: REpresentational State Transfer

BLOG

INDEX       /blog               GET
NEW         /blog/new           GET
CREATE      /blog               POST
SHOW        /blog/:id           GET
EDIT        /blog/:id/edit      GET
UPDATE      /blog/:id           PUT
DESTROY     /blog/:id           DELETE

#Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template
* Add Simple Nav Bar

#Basic Layout
* Add Header and Footer Partials
* Include Semantic UI
* Add Simple Navbar

#Putting the C in CRUD
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

#SHOWtime
* Add Show route
* Add Show template
* Add links to show page
* Style show template

#Edit/Update
* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override (for PUT in forms)

#DESTROY
* Add Destroy Route
* Add Edit and Destroy Links

##Final Updates
* Sanitize blog body
* Style Index
* Update REST Table

