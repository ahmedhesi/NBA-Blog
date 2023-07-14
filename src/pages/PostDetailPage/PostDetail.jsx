import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"
import * as commentsApi from "../../utilities/comments-api"
import * as postApi from "../../utilities/posts-api"
import Comment from "../../components/Comment/Comment"
export default function PostDetail({posts, setPosts}) {
    const [formData, setFormData] = useState({content:""})
    const [post, setPost] = useState(null) 
    let {id} = useParams()
    useEffect(()=>{
        async function getDetails() {
            const post= await postApi.getPost(id) 
            setPost(post) 
        }
        getDetails()
    }, [])
    function handleChange(evt){
        const data={...formData, [evt.target.name]:evt.target.value}
        setFormData(data)
    }
    async function handleSubmit(evt){
        evt.preventDefault();
        const newcomment= await commentsApi.addComment(formData, id)
        setPost(newcomment)
    }
    console.log(post)
    return(
        <>
           
            <div>
                <div> 
                    <p>{post && post.content}</p>
                    <p>{post && post.createdAt}</p>
                    <p>{post && post.user.name}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input name="content" value={formData.content || ""} onChange={handleChange}  />
                    <button type="submit">Submit</button>
                </form>
                {
                    post && post.comments.map((comment, idx) => <Comment comment={comment}/>) 

                }
            </div>
        </>
    )
}