<template>
  <div class="container-content">
    <div class="col" v-for="(col, index) in $store.getters.getImages" :key="index">
      <div class="item" v-for="(img, i) in col" :key="i" :name="i" @click="openModal(img)">
        <img v-lazy="img.url ? img.url : baseUrl + '/' + img.image" />
      </div>
    </div>
    <Detail></Detail>
  </div>
</template>

<script>
import Vue from "vue";
import VueLazyload from "vue-lazyload";
import Detail from '~/components/client/image/Detail';

Vue.use(VueLazyload);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
});
export default {
  name: "Index",
  components: {
        Detail
    },
  layout: "Client",
  data() {
    return {
      busy: false,
      images: [],
      arrayImages: [],
      baseUrl: process.env.API_BASE,
      page: 1,
      perPage: 6,
      categories: {},
    };
  },
  mounted() {
    const listElm = document.querySelector("body");
    listElm.addEventListener("scroll", (e) => {
      if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.getImageInfiniti();
      }
    });
    this.getAllImages();
    window.addEventListener("resize", () => {
      this.onResize(this.arrayImages.slice());
    });
    window.onclick = function(event) {
      if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
      }
    }
  },
  methods: {
    openModal(img) {
      this.$store.commit('setImage', img)
      document.getElementById("myModal").style.display = 'block'
      document.getElementById("myModal").setAttribute('data-id', img.id)
    },

    getImageInfiniti() {
      this.page++;
      this.getAllImages();
    },

    async getAllImages() {
      await this.$repositories.client
        .getAllImages(this.page, this.perPage)
        .then(async (response) => {
          this.arrayImages = this.arrayImages
            .slice()
            .concat(response.data.data.slice());
          this.onResize(this.arrayImages.slice());
        })

        .catch((error) => {
          console.log(error);
        });
    },

    onResize(imgs) {
      let length = imgs.length;
      if (window.innerWidth > 768) {
        if (length % 3 > 0) {
          this.$store.commit('setImages', this.chunkArray(imgs.slice(), length / 3 + 1));
        } else {
          this.$store.commit('setImages', this.chunkArray(imgs.slice(), length / 3));
        }
      } else if (window.innerWidth < 768 && window.innerWidth > 480) {
        if (length % 2 > 0) {
          this.$store.commit('setImages', this.chunkArray(imgs.slice(), length / 2 + 1));
        } else {
          this.$store.commit('setImages', this.chunkArray(imgs.slice(), length / 2));
        }
      } else {
        this.$store.commit('setImages', this.chunkArray(imgs.slice(), length));
      }
    },

    chunkArray(myArray, chunk_size) {
      var results = [];
      var array = myArray.slice();
      while (array.length) {
        results.push(array.splice(0, chunk_size));
      }
      return results;
    },
  },
};
</script>
