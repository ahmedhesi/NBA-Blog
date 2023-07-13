import PostForm from "../../components/PostForm/PostForm";
import {useState, useEffect} from "react"
import PostItem from "../../components/PostItem/PostItem";
import * as postsAPI from "../../utilities/posts-api"

export default function PostPage({user}){
    const [posts, setPosts] = useState ([])

    useEffect(() => {
        async function getAllPosts() {
        const posts = await postsAPI.getPosts()
        setPosts(posts)
        }
        getAllPosts()
    },[])
    console.log(posts)
    function handleAddPost(post) {
        setPosts([...posts, post])
    }

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


// import { useEffect, useState } from "react";
// import * as notesAPI from "../../utilities/notes-api"
// import NotesListPage from "../NotesListPage/NotesListPage"


// export default function PostsPage() {
//   const [posts, setPosts] = useState([])

//   const [formData, setFormData] = useState('')

//   useEffect(() => {
//     async function getAllNotes() {
//       const posts = await postsAPI.getPosts()
//       setPosts(posts)
//     }
//     getAllPosts()
//   },[])

  
//   async function handleSubmit() {
//     const post = await PostsAPI.addPost(formData)
//   }
  
//   return (
//     <>
//         <h1>Posts Page</h1>
//         <form onSubmit={handleSubmit} >
//           <input name="text" value={formData} onChange={(evt) => setFormData(evt.target.value)}/>
//           <button type="submit">SUBMIT</button>
//         </form>
//         {posts.length === 0 ? "No Notes Yet" : <PostsListPage posts={posts} />}
//     </>
//   );
// }