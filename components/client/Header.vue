<template>
  <header>
    <div class="header">
      <div class="header-icon">
        <img src="~/assets/images/logo.png" alt="" />
      </div>
      <div style="width: 18px"></div>
      <div class="header-search">
        <form action="">
          <div class="button-search height-100 background-no">
            <button class="height-100 background-no">
              <i class="fa fa-search pl-14 text-color" aria-hidden="true"></i>
            </button>
          </div>
          <div class="search-input height-100 background-no">
            <input
              placeholder="Search free high-resolution photos"
              class="pl-14 pr-14 height-100 text-color no-border-focus"
              style="background: none; border: none"
              type="text"
            />
          </div>
          <div class="search-by-img height-100 background-no">
            <button class="height-100 background-no">
              <i class="fa fa-camera pr-14 text-color" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
      <div class="header-category">
        <div class="">
          <a href="" class="text-color">Explore</a>
        </div>
        <div class="">
          <a href="" class="text-color">Advertise</a>
        </div>
        <div class="">
          <a href="" class="text-color">Blog</a>
        </div>
      </div>
      <div class="line-vertical"></div>
      <div class="header-auth">
        <div class="auth">
          <a href="" class="text-color">Log in</a>
        </div>
        <div class="auth">/</div>
        <div class="auth">
          <a href="" class="text-color">Sign up</a>
        </div>
      </div>
      <div class="header-submit">
        <button>Submit a photo</button>
      </div>
      <div style="width: 12px"></div>
      <div class="header-burger">
        <button>
          <i
            class="fa fa-bars"
            style="font-size: x-large"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
    <div class="category">
      <div class="editorial">
        <a href="" class="text-color"> Editorial </a>
      </div>
      <div class="editorial">
        <div class="line-vertical"></div>
      </div>
      <div class="sc_menu" style="vertical-align: middle">
        <ul class="sc_menu">
          <li
            runat="server"
            :id="i"
            v-for="(category, i) in categories"
            :key="i"
          >
            <a href="">{{ category.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      categories: {},
    };
  },
  computed: {},
  mounted() {
    this.getAllCategories();
  },
  methods: {
    async getAllCategories() {
      await this.$repositories.client
        .getAllCategories()
        .then(async (response) => {
          this.categories = response.data.data;
        })

        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
