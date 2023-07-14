const Post = require('../../models/post');

module.exports = {
  create,
};

async function create(req, res) {
    console.log(req.body)
    req.body.user=req.user._id
    console.log(req.params.id)

  try {
    const post= await Post.findOne({_id:req.params.id})
    post.comments.push(req.body)
    await post.save()
    res.json(post)
    console.log("this is the post", post)
  } catch (err) {
  }
}

