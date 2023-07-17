import sendRequest from "./send-request";
const BASE_URL = '/api/comments';

export async function addComment(comment, id) { 
    
  return sendRequest(`${BASE_URL}/${id}`, 'POST', comment);
}
// export async function deleteComment(id){
//     return sendRequest(`${BASE_URL}/${id}`, 'DELETE' ) 
// }
export async function deleteComment(commentId, postId) {
    console.log("hello")
    const url = `${BASE_URL}/${commentId}`;
    return sendRequest(url, 'DELETE');
  }