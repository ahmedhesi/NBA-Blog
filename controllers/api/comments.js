const Post = require('../../models/post');

module.exports = {
  create,
  deleteComment,
};

async function create(req, res) {
    console.log(req.body)
    req.body.user=req.user
    console.log(req.params.id)

  try {
    const post= await Post.findOne({_id:req.params.id}).populate("user").populate("comments.user").exec()
    post.comments.push(req.body)
    await post.save()
    res.json(post)
    console.log("this is the post", post)
  } catch (err) {
  }
}

    
    
  async function deleteComment(req, res) {
    console.log("hello")
    // Note the cool "dot" syntax to query on the property of a subdoc
    const post = await Post.findOne({'comments._id': req.params.id, 'comments.userId': req.user._id}).populate("user").populate("comments.user").exec();
    if (!post) return
    // Remove the subdoc (https://mongoosejs.com/docs/subdocs.html)
    console.log(post)
    post.comments.remove(req.params.id);
    console.log(post)
    // Save the updated book
    await post.save();
    // Redirect back to the book's show view
    res.json(post)
  }


    
    
    
