import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: '**/*.md*',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    lastUpdatedDate: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => (post._raw.sourceFileName === 'index.mdx' ? '/' : `/${post._raw.flattenedPath}`),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page],
});
