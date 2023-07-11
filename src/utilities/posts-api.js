import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function create(post) { 
    console.log(post)
  return sendRequest(BASE_URL, 'POST', post);
}

export async function getNotes() {
    return sendRequest(BASE_URL);
}

