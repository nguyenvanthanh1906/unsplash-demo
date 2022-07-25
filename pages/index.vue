<template>
  <div class="container-content">
        <div class="col" v-for="(col, index) in images"
                        :key="index">
            <div class="item" v-for="(img, i) in col" :key="i">
                <img :src="img.url" 
                    alt="">
            </div>
           
        </div>
       
    </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'Client',
   data() {
    return {
        images : [
            
        ]
    }
  },
   mounted() {
    this.getAllImages()
    
    window.addEventListener('resize', this.onResize(this.images))
  },
  methods: {
    async getAllImages() {
      await this.$repositories.client
        .getAllImages()
        .then((response) => {
          let imgs = response.data.data
          this.onResize(imgs)
          
        })
        .catch((error) => {
          Error.handleError(error)
        })
    },

    onResize(imgs) {
if (window.innerWidth > 768) {
            if(imgs.length % 3 > 0) {
              this.images = this.chunkArray(imgs, imgs.length/3 + 1)
            } else {
              this.images = this.chunkArray(imgs, imgs.length/3)
            }
            
      } else {
       if(imgs.length % 2 > 0) {
              this.images = this.chunkArray(imgs, imgs.length/2 + 1)
            } else {
              this.images = this.chunkArray(imgs, imgs.length/2)
            }
            
      }
    },

    chunkArray(myArray, chunk_size){
        var results = [];

        while (myArray.length) {
            results.push(myArray.splice(0, chunk_size));
        }

        return results;
    }
  },
}
</script>
