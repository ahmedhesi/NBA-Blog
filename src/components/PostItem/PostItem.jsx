export default function PostItem({post}) {
    return(
        <div> 
            <p>{post.content}</p>
            <p>{post.createdAt}</p>
            <p>{post.user.name}</p>
        </div>
    )
}