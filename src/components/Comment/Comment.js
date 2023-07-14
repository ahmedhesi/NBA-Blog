import  { Link } from "react-router-dom"
export default function Comment({comment}) {
    console.log("hello", comment)
    return(
           <div> 
                <p>{comment.content}</p>
                <p>{comment.createdAt}</p>
                <p>{comment.user.name}</p>
                <form>
                <button>Delete</button>
                </form>
            </div>
    )
}