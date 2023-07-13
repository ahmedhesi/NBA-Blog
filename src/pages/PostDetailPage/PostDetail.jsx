import { useParams } from "react-router-dom";
export default function PostDetail({posts}) {
    let {id} = useParams()
    const post = posts.find(p=>p._id === id)
    console.log(post)
    return(
        <div> 
            <p>{post.content}</p>
            <p>{post.createdAt}</p>
            <p>{post.user.name}</p>
        </div>
    )
}