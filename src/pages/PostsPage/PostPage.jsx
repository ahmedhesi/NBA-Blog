import PostForm from "../../components/PostForm/PostForm";
import {useState} from "react"
export default function PostPage({user}){
    const [posts, setPosts] = useState ([])
    return(
        <div>
            PostPage
            <PostForm user={user}/>
        </div>

    )
}

