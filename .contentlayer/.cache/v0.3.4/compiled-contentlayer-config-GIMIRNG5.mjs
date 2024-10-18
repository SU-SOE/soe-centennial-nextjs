// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "**/*.md*",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    lastUpdatedDate: { type: "date", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName === "index.mdx" ? "/" : `/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Page]
});
export {
  Page,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-GIMIRNG5.mjs.map
