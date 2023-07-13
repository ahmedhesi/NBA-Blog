import PostForm from "../../components/PostForm/PostForm";
import {useState, useEffect} from "react"
import PostItem from "../../components/PostItem/PostItem";
import * as postsAPI from "../../utilities/posts-api"

export default function MyPostPage({user, posts, handleAddPost}){
    const [myPosts, setMyPosts] = useState([])
    useEffect(() => {
        async function getAllPosts() {
        const posts = await postsAPI.getMyPosts()
        setMyPosts(posts)
        }
        getAllPosts()
    },[])
    return(
        <div>
            PostPage
            <PostForm user={user} handleAddPost={handleAddPost}/>
            {myPosts.map((p, idx) =>(
                <PostItem key={idx} post={p} />
            ))}
        </div>

    )
}