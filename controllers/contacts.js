const contacts = require('../data/contacts');

const list = (req, res) => {
  console.log("Inside my GET /contacts route");
  res.json(contacts)
};

const show = (req, res) => {
  console.log("Inside my GET /contacts route");
  let id = req.params.id;
  let foundContact = contacts.find(contact => contact._id == id);
  if(!foundContact){
    res.status(400).json({ msg: `No contact by the id of: ${id}`})
  }
  res.json(foundContact)
};

const create = (req, res) => {
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
};

module.exports = { list, show, create }