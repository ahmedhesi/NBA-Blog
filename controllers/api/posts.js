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

  async function updatePost(req, res) {
    try {
      const updatedPost = await Post.findOneAndUpdate(
        {_id: req.params.id, userRecommending: req.user._id},
        // update object with updated properties
        req.body,
        // options object {new: true} returns updated doc
        {new: true}
      );
      return res.redirect(`/posts/${updatedPost._id}`);
    } catch (e) {
      console.log(e.message);
      return res.redirect('/posts');
    }
  }

  


