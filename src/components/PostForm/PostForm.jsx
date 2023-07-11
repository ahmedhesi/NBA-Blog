import {useState} from "react";
import '../PostForm/PostForm.css';
import * as postsApi from "../../utilities/posts-api"

export default function PostForm({user}){
    const [post,setPost] = useState({content:""})
    
    function handleChange(evt){
        const data={...post, [evt.target.name]: evt.target.value}
        setPost(data)
    }
    async function handleSubmit(evt){
        evt.preventDefault();
        const newPost= await postsApi.create(post)
        setPost({content:""})
    }
        return(
        <form className="postForm" onSubmit={handleSubmit}>
            <textarea className="post" type="text" name="content" value={post.content} onChange={handleChange} placeholder={`What NBA topic is on your mind today, ${user.name}?`}/>
            <button type="submit">Submit</button>

        </form>
    )
}