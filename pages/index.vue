<template>
  <section class="container">
    <!-- Button to edit document in dashboard -->
    <prismic-edit-button :documentId="documentId" />

    <div>
      <logo />
      <h1 class="title">
        nuxt-starter
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

    <br>

    <div>
      <h1>
        {{ $prismic.richTextAsPlain(content.headline) }}
      </h1>

      <p>
        {{ $prismic.richTextAsPlain(content.description) }}
      </p>

      <img :src="content.image.url" alt="linus">
    </div>
  </section>
</template>

<script>
import Prismic from 'prismic-javascript';
import PrismicConfig from '~/prismic.config.js';

import Logo from '~/components/Logo.vue';

export default {
  name: 'Index',

  components: {
    Logo,
  },

  head() {
    return {
      title: 'Nuxt & Prismic',
    };
  },

  // eslint-disable-next-line
  async asyncData({ context, error, req }) {
    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      // Query to get blog home content
      const document = await api.getSingle('home');
      const content = document.data;

      // Returns data to be used in template
      return {
        documentId: document.id,
        content,
      };
    } catch (e) {
      console.error(e);
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },

  mounted() {
    // Load the edit button
    if (process.client && window !== 'undefined') {
      console.warn('set up edit button');
      window.prismic.setupEditButton();
    };
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

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
