const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const contacts = require("./routes/contacts");
const vehicles = require("./routes/vehicles");
const comments = require("./routes/comments");
const products = require("./routes/products");

const port = process.env.PORT || 4001;

// Middleware
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(contacts);
app.use(vehicles);
app.use(comments);
app.use(products);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });

/*********** Base Code ********/

// GET requests
 app.get("/contacts", function(req, res){
   console.log("Inside my GET /contacts route");
   res.json(contacts)
 });

 app.get("/vehicles", (req, res) => {
   console.log("Inside my GET /vehicles route");
   res.json(vehicles)
 });

 app.get("/comments", (req, res) => {
   console.log("Inside my GET /comments route");
   res.json(comments)
 });

 app.get("/products", (req, res) => {
   console.log("Inside my GET /products route");
   res.json(products)
 });

 //GET requests by id
 app.get("/contacts/:id", function(req, res){
   console.log("Inside my GET /contacts route");
   let id = req.params.id;
   let foundContact = contacts.find(contact => contact._id == id);
   if(!foundContact){
     res.status(400).json({ msg: `No contact by the id of: ${id}`})
   }
   res.json(foundContact)
 });

 app.get("/vehicles/:id", function(req, res){
   console.log("Inside my GET /vehicles route");
   let id = req.params.id;
   let foundVehicle = vehicles.find(vehicle => vehicle._id == id);
   if(!foundVehicle){
     res.status(400).json({ msg: `No vehicle by the id of: ${id}`})
   }
   res.json(foundVehicle)
 });

 app.get("/comments/:id", function(req, res){
   console.log("Inside my GET /comments route");
   let id = req.params.id;
   let foundComment = comments.find(comment => comment._id == id);
   if(!foundComment){
     res.status(400).json({ msg: `No comment by the id of: ${id}`})
   }
   res.json(foundComment)
 });

 app.get("/products/:id", function(req, res){
   console.log("Inside my GET /products route");
   let id = req.params.id;
   let foundProduct = products.find(product => product._id == id);
   if(!foundProduct){
     res.status(400).json({ msg: `No product by the id of: ${id}`})
   }
   res.json(foundProduct)
 });

 //POST requests
 app.post("/contacts", (req, res) => {
   console.log("inside POST /contacts route");
   let counter = contacts.length + 1;

   let newContact = {
     _id : counter,
     name : req.body.name,
     occupation : req.body.occupation,
     avatar: req.body.avatar
   }

   contacts.push(newContact);
   counter++;
   res.json({ msg: `Contact Added`, newContact})
 });

 app.post("/vehicles", (req, res) => {
   console.log("inside POST /vehicles route");
   let counter = vehicles.length + 1;

   let newVehicle = {
     _id: counter,
     imgUrl: req.body.imgUrl,
     year: req.body.year,
     make: req.body.make,
     model: req.body.model,
     price: req.body.price,
     km: req.body.km,
     miles: req.body.miles,
     fuel: req.body.fuel,
     city: req.body.city,
     isNew: req.body.isNew
   }

   vehicles.push(newVehicle);
   counter++;
   res.json({ msg: `Vehicle Added`, newVehicle})
 });

 app.post("/comments", (req, res) => {
   console.log("inside POST /comments route");
   let counter = comments.length + 1;

   let newComment = {
     _id : counter,
     body : req.body.body,
     postId : 1,
   }

   contacts.push(newComment);
   counter++;
   res.json({ msg: `Contact Added`, newComment})
 });

 app.post("/products", (req, res) => {
   console.log("inside POST /products route");
   let counter = products.length + 1;
   let newProduct = {
     _id : counter,
     name : req.body.name,
     description : req.body.description,
     rating: req.body.rating,
     imgUrl: req.body.imgUrl,
     price: req.body.price,
     category: req.body.category,
     reviews: req.body.reviews
   }

   products.push(newProduct);
   counter++;
   res.json({ msg: `Product Added`, newProduct})
 });

//POST /contacts
//DATA: json representation of the contact
//adds a new contact to the contacts array

 app.post("/contacts", function(req, res){
   console.log("inside POST /contacts", req.body);

   let nextId = contacts.length + 1;
   req.body._id = nextId;

   contacts.push(req.body);
   res.json("success")
 })