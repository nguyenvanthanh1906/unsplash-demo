<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="modal-content-header">
        <div class="modal-content-header-right">
          <div class="modal-content-header-right-right">
            <img src="https://images.unsplash.com/profile-1554115735018-2a9dad8cd52d?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff 1x, https://images.unsplash.com/profile-1554115735018-2a9dad8cd52d?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff 2x" alt="">
          </div>
          <div class="modal-content-header-right-left">
            <div class="modal-content-header-right-left-top">{{this.$store.getters.getImage.created_at}}</div>
            <div class="modal-content-header-right-left-bot">Available for hire</div>
          </div>
        </div>
        <div class="modal-content-header-left">
          <div class="modal-content-header-left-first pd-l-5">
            <button class="w-39">
              <i class="fa fa-heart" aria-hidden="true"></i>
            </button>
          </div>
          <div class="modal-content-header-left-second pd-l-5">
            <button class="w-39">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
          <div class="modal-content-header-left-thirt pd-l-5">
            <button>
              Dowload
            </button>
          </div>
        </div>
      </div>
      <div class="modal-content-content">
        <div class="modal-content-content-img">
          <img :src="this.$store.getters.getImage.url" alt="">
        </div>
        <div class="container-content">
          <div class="col" v-for="(col, index) in $store.getters.getImages" :key="index">
            <div class="item" v-for="(img, i) in col" :key="i" :name="i">
              <img v-lazy="img.url ? img.url : baseUrl + '/' + img.image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="close" @click="closeModal()">&times;</span>
  </div>
</template>

<script>

export default {
  name: "Detail",
  data() {
    return {
      images: [],
      baseUrl: process.env.API_BASE,
    }
  },
  mounted() {
    this.images = this.$store.getters.getImages
  },
  methods: {
    closeModal() {
      this.$store.commit('setImage', {})
      document.getElementById("myModal").style.display = 'none'
    }
  },
};
</script>
