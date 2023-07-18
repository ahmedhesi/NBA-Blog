import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as commentsApi from "../../utilities/comments-api";
import * as postApi from "../../utilities/posts-api";
import Comment from "../../components/Comment/Comment";

export default function PostDetail({ posts, setPosts, user }) {

  const [formData, setFormData] = useState({ content: "" });
  const [post, setPost] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({
    content: ""
  });
  
  let { id } = useParams();
  
  useEffect(() => {
    async function getDetails() {
      const post = await postApi.getPost(id);
      setPost(post);
      setUpdatedPost({...updatedPost, text:post.content})
    }
    getDetails();
  }, [id]);
  
  function handleChange(evt) {
    const data = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(data);
  }
  
  async function handleSubmit(evt) {
    evt.preventDefault();
    const newcomment = await commentsApi.addComment(formData, id);
    setPost(newcomment);
    const updatedPosts = posts.map(p=> p._id === newcomment._id? newcomment:p)
    setPosts(updatedPosts)
    setFormData({ content: "" });
  }
  
  async function handleUpdatePost() {
    const editPost = await postApi.updatePost(id, updatedPost);
    const postsArr = posts.map(p=> p._id === editPost._id ? editPost : p)
    setPosts(postsArr)
    setEditMode(false);
    setPost(editPost);
  }

  return (
    <>
      {editMode ? (
        <div>
          <p>Text:</p>
          <textarea
            size="sm"
            placeholder={`${post && post.content}`}
            value={updatedPost.content}
            onChange={(evt) =>
              setUpdatedPost({ ...updatedPost, content: evt.target.value })
            }
          > {post && post.content}</textarea>
          <button onClick={handleUpdatePost}>Update</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <div>
            <p>{post && post.content}</p>
            <p>{post && post.createdAt}</p>
            <p>{post && post.user.name}</p>
            {(user._id == (post && post.user._id)) && <button onClick={() => setEditMode(true)}>Edit</button>}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              name="content"
              value={formData.content || ""}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          {post &&
            post.comments.map((comment, idx) => (
              <Comment
                key={idx}
                comment={comment}
                setFormData={setFormData}
                setPost={setPost}
                user={user}
              />
            ))}
        </div>
      )}
    </>
  );
}

     
