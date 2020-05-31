import axios from 'axios';

const Category = {
    getAll: () => {
        return axios.get('/api/data/categories',{headers: {Authorization: 'Bearer ' + AppState.user.access_token}});
    }
}

export default Category;