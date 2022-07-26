export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "unsplash",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { httpEquiv: "Content-Security-Policy", content: "upgrade-insecure-requests"}
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        type: 'text/javascript',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js',
        type: 'text/javascript',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js',
        type: 'text/javascript',
      },
      { src: '/js/main.js', ssr: false },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "ant-design-vue/dist/antd.css",
    "~/assets/css/main.css",
    "~/assets/font-awesome-4.7.0/css/font-awesome.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/antd-ui", "~/plugins/repositories",
  { src: '~/plugins/vue-infinite-scroll', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Config axios
  axios: {
    baseURL: `${process.env.API_BASE}/api/v1`,
    credentials: false,
  },

  env: {
    API_BASE: process.env.API_BASE,
  },
};
