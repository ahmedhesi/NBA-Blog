const Post = require('../../models/post');

module.exports = {
  create,
  index,
  getMyBlog,
};

async function create(req, res) {
    console.log(req.body)
    req.body.user=req.user._id
    console.log(req.body)

  try {
    const post= await Post.create(req.body)
    res.json(post)
  } catch (err) {
  }
}

async function index(req, res) {
    const posts = await Post.find({ }).populate("user").exec()
    res.json(posts)
}
async function getMyBlog(req, res) {
    const posts = await Post.find({ user:req.user._id }).populate("user").exec()
    res.json(posts)
}


