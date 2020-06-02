import axios from 'axios';

let state = localStorage["appState"];
let AppState = JSON.parse(state);

const Category = {
    getAll: () => {
        return axios.get('/api/data/categories',{headers: {Authorization: 'Bearer ' + AppState.user.access_token}});
    }
}

export default Category;