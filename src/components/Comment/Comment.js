import  { Link } from "react-router-dom"
// import  {useState} from "react"
import * as commentApi from "../../utilities/comments-api"
import { set } from "mongoose"
export default function Comment({comment, setPost, user}) {
    // const [comment, setComment] = useState(false)
    async function handleDelete(id){
        const deleteComment = await commentApi.deleteComment(id)
        // const updatedPosts = posts.map(p=>p._id === deleteComment._id ? deleteComment : p)
        setPost(deleteComment)
        // setComment(!comment)
    }
    console.log(user._id)
    console.log(comment.user._id)
    console.log((user._id == (comment && comment.user._id)))
    return(
           <div> 
                <p>{comment.content}</p>
                <p>{comment.createdAt}</p>
                <p>{comment.user.name}</p>
                
                {(user._id == (comment && comment.user._id)) && <button onClick={() => handleDelete(comment._id)}>Delete</button>}
                
            </div>
    )
}