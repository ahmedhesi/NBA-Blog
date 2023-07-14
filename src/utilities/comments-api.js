import sendRequest from "./send-request";
const BASE_URL = '/api/comments';

export async function addComment(comment, id) { 
    
  return sendRequest(`${BASE_URL}/${id}`, 'POST', comment);
}