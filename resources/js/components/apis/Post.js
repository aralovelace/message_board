
const Post = {
    getAll: () => {
        return axios.get('/api/data/posts');
    },
    getById: (id) => {
        return axios.get('/api/data/posts/' + id);
    }
};
export default Post;