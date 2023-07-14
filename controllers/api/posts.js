const Post = require('../../models/post');

module.exports = {
  create,
  index,
  getMyBlog,
  show,
};

async function create(req, res) {
    req.body.user=req.user._id
    

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
    console.log ("hello")
    const posts = await Post.find({ user: req.user }).populate("user").exec()
    res.json(posts)
}

async function show(req, res) {
    try {
        const post= await Post.findOne({_id: req.params.id}).populate("user").exec()
        res.json(post)
    } catch (e) {
      console.log(e.message);
    }

  }
  


