import axios from "axios";

let state = localStorage["appState"];
let AppState = JSON.parse(state);

const Post = {
    getAll: () => {
        return axios.get('/api/data/posts');
    },
    getById: (id) => {
        return axios.get('/api/data/posts/' + id);
    },
    add: (data) => {
        return axios.post('/api/data/posts',data , {headers: {Authorization: 'Bearer ' + AppState.user.access_token}});
    }
};
export default Post;