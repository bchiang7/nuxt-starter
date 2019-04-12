<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-starter 404
      </h1>
      <h2 class="subtitle">
        My splendid Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <nuxt-link to="/about">
          About
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  name: '404',

  components: {
    Logo,
  },

  head() {
    return {
      title: '404',
    };
  },
};
</script>

<style lang="scss">
</style>
