import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as commentsApi from "../../utilities/comments-api";
import * as postApi from "../../utilities/posts-api";
import Comment from "../../components/Comment/Comment";

export default function PostDetail({ posts, setPosts }) {
  const [formData, setFormData] = useState({ content: "" });
  const [post, setPost] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({
    text: ""
  });
  
  let { id } = useParams();
  
  useEffect(() => {
    async function getDetails() {
      const post = await postApi.getPost(id);
      setPost(post);
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
    setFormData({ content: "" });
  }
  
  async function handleUpdatePost() {
    await postApi.updatePost(id, updatedPost);
    setPost(updatedPost);
    setEditMode(false);
  }

  
  console.log(post);
  
  return (
    <>
      {editMode ? (
        <div>
          <p>Text:</p>
          <textarea
            size="sm"
            value={updatedPost.text}
            onChange={(evt) =>
              setUpdatedPost({ ...updatedPost, text: evt.target.value })
            }
          />
          <button onClick={handleUpdatePost}>Update</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <div>
            <p>{post && post.content}</p>
            <p>{post && post.createdAt}</p>
            <p>{post && post.user.name}</p>
            <button onClick={() => setEditMode(true)}>Edit</button>
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
              />
            ))}
        </div>
      )}
    </>
  );
}

     
