import  { Link } from "react-router-dom"
export default function PostItem({post}) {
    return(
        <Link to={`/posts/${post._id}`}>
            <div> 
                <p>{post.content}</p>
                <p>{post.createdAt}</p>
                <p>{post.user.name}</p>
            </div>
        </Link>
    )
}