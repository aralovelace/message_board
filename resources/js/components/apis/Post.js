
const Post = {
    getAll: () => {
        return axios.get('/api/data/posts');
    }
};
export default Post;