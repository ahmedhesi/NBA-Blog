import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function create(post) { 
    console.log(post)
  return sendRequest(BASE_URL, 'POST', post);
}

export async function getPosts() {
    return sendRequest(BASE_URL);
}

// import sendRequest from "./send-request";
// const BASE_URL = '/api/posts';

// export async function getPosts() {
//     return sendRequest(BASE_URL);
// }

// export async function addPost(formData) {
//     return sendRequest(BASE_URL, "POST", {text:formData});
// }

