const products = require('../data/products')

const list = (req, res) => {
  console.log("Inside my GET /products route");
  res.json(products)
}

const show = (req, res) => {
  console.log("Inside my GET /products route");
  let id = req.params.id;
  let foundProduct = products.find(product => product._id == id);
  if(!foundProduct){
    res.status(400).json({ msg: `No product by the id of: ${id}`})
  }
  res.json(foundProduct)
}

const create = (req, res) => {
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
  };

  products.push(newProduct);
  counter++;
  res.json({ msg: `Product Added`, newProduct})
}

module.exports = { list, show, create }