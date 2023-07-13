import PostForm from "../../components/PostForm/PostForm";
import {useState, useEffect} from "react"
import PostItem from "../../components/PostItem/PostItem";


export default function PostPage({user, posts, handleAddPost}){

    return(
        <div>
            PostPage
            <PostForm user={user} handleAddPost={handleAddPost}/>
            {posts.map((p, idx) =>(
                <PostItem key={idx} post={p} />
            ))}
        </div>

    )
}


