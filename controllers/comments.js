const comments = require('../data/comments');

const list =  (req, res) => {
  console.log("Inside my GET /comments route");
  res.json(comments)
}

const show = (req, res) => {
  console.log("Inside my GET /comments route");
  let id = req.params.id;
  let foundComment = comments.find(comment => comment._id == id);
  if(!foundComment){
    res.status(400).json({ msg: `No comment by the id of: ${id}`})
  }
  res.json(foundComment)
}

const create = (req, res) => {
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
}

module.exports = { list, show, create }