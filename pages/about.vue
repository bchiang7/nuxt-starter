<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        about nuxt-starter
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

      <div v-html="$prismic.asHtml(document.data.title)" />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo,
  },

  async asyncData({ app, error }) {
    const document = await app.$prismic.api.getSingle('about');

    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>

<style lang="scss">
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $navy;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
