const Post = require('../../models/post');

module.exports = {
  create,
};

async function create(req, res) {
    console.log(req.body)
    req.body.user=req.user._id
    console.log(req.body)

  try {
    const post= await Post.create(req.body)
    res.json(post)
  } catch (err) {
    console.log(err)
  }
}
