import axios from 'axios';

let state = localStorage["appState"];
let AppState = JSON.parse(state);

const Comment = {
  store: (msg) => {
      return axios.post('/api/data/comments',msg , {headers: {Authorization: 'Bearer ' + AppState.user.access_token}});
  }
};

export default Comment;