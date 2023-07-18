import { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import PostsPage from '../PostsPage/PostsPage';
import PostDetail from '../PostDetailPage/PostDetail';
import * as postsAPI from "../../utilities/posts-api"
import MyPostsPage from '../PostsPage/MyPostsPage';

export default function App() {
  const [user, setUser] = useState(getUser());
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
console.log(user)
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/posts" element={<PostsPage user={user} posts={posts} handleAddPost={handleAddPost}  />} />
              <Route path="/posts/myblogs" element={<MyPostsPage user={user} posts={posts} handleAddPost={handleAddPost}  />} />
              <Route path="/posts/:id" element={<PostDetail posts={posts} setPosts={setPosts} user={user}/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
