export const state = () => ({
  image: {},
  images: []
})

export const getters = {
  getImage(state) {
    return state.image
  },

  getImages(state) {
    return state.images
  }
}

export const mutations = {
  setImage(state, image) {
    state.image = image
  },

  setImages(state, images) {
    state.images = images
  }
}