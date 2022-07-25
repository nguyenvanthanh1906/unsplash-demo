export default ($axios) => ({
    getAllImages() {
        return $axios.get('/images')
    }
})