import pkg from './package';

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['@/assets/styles/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',

    ['prismic-nuxt', {
      endpoint: 'https://bchiang7.cdn.prismic.io/api/v2',
      // eslint-disable-next-line
      linkResolver: function(doc, ctx) {
        return '/';
      },
    }],
  ],

  // https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: ['./assets/styles/main.scss'],
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
  },
};
