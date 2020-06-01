import axios from 'axios';

let state = localStorage["appState"];
let AppState = JSON.parse(state);

const Comment = {
  store: (msg) => {
      return axios.post('/api/data/comments',msg , {headers: {Authorization: 'Bearer ' + AppState.user.access_token}});
  },

  getCommentsByPost: (post_id) => {
      return axios.get('/api/data/get-comments/' + post_id,{headers: {Authorization: 'Bearer ' + AppState.user.access_token}});
  },
};

export default Comment;