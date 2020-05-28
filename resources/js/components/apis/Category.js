import axios from 'axios';

const Category = {
    getAll: () => {
        return axios.get('/api/data/categories');
    }
}

export default Category;