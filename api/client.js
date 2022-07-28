export default ($axios) => ({
    getAllImages(page, perPage) {
        return $axios.get(`/images/?per_page=${perPage}&page=${page}`)
    },

    getAllCategories() {
        return $axios.get(`/categories`)
    }
})