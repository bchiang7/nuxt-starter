/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function(doc) {
  if (doc.isBroken) {
    return '/404';
  }

  if (doc.type === 'home') {
    return '/';
  }

  if (doc.type === 'about') {
    return '/about';
  }

  if (doc.type === 'post') {
    return `/blog/${doc.uid}`;
  }

  return '/';
}
