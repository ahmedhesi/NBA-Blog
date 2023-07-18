const Post = require('../../models/post');

module.exports = {
  create,
  index,
  getMyBlog,
  show,
  updatePost,
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
    const posts = await Post.find({ }).populate("user").populate("comments.user").exec()
    res.json(posts)
}
async function getMyBlog(req, res) {
    console.log ("hello")
    const posts = await Post.find({ user: req.user }).populate("user").populate("comments.user").exec()
    res.json(posts)
}

async function show(req, res) {
    try {
        const post= await Post.findOne({_id: req.params.id}).populate("user").populate("comments.user").exec()
        res.json(post)
    } catch (e) {
      console.log(e.message);
    }

  }

  async function updatePost(req, res) {
    try {
      const updatedPost = await Post.findOneAndUpdate(
        {_id: req.params.id, userRecommending: req.user._id},
        // update object with updated properties
        req.body,
        // options object {new: true} returns updated doc
        {new: true}
      ).populate("user").populate("comments.user").exec()
      console.log(updatedPost)
    res.json(updatedPost)
    } catch (e) {
      console.log(e.message);
    }
  }

  


