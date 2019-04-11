<template>
  <section class="container">
    <!-- Button to edit document in dashboard -->
    <prismic-edit-button :documentId="documentId" />

    <div>
      <!-- Template for page title -->
      <h1 class="blog-title">
        {{ $prismic.richTextAsPlain(content.title) }}
      </h1>

      <img :src="image" alt="linus">
    </div>
  </section>
</template>

<script>
import Prismic from 'prismic-javascript';
import PrismicConfig from '~/prismic.config.js';

export default {
  head() {
    return {
      title: 'About',
    };
  },
  // eslint-disable-next-line
  async asyncData({ context, error, req }) {
    try {
      // Query to get API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      // Query to get blog home content
      const document = await api.getSingle('about');
      const content = document.data;

      // Load the edit button
      if (process.client) {
        window.prismic.setupEditButton();
      };

      // Returns data to be used in template
      return {
        content,
        documentId: document.id,
        image: content.image.url,
      };
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100px;
}
</style>
