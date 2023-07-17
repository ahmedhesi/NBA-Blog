import  { Link } from "react-router-dom"
import * as commentApi from "../../utilities/comments-api"
import { set } from "mongoose"
export default function Comment({comment, setPost}) {
    console.log("hello", comment)
    async function handleDelete(id){
        console.log("handleDelete")
        const deleteComment = await commentApi.deleteComment(id)
        // const updatedPosts = posts.map(p=>p._id === deleteComment._id ? deleteComment : p)
        setPost(deleteComment)

    }
    return(
           <div> 
                <p>{comment.content}</p>
                <p>{comment.createdAt}</p>
                <p>{comment.user.name}</p>
                
                <button onClick={() => handleDelete(comment._id)}>Delete</button>
                
            </div>
    )
}