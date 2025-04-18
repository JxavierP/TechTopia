import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://us-east-1.cdn.hygraph.com/content/cl6713mi9c4oe01t5fl2qfun4/master",
  documents: "src/**/*.graphql",
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      // plugins: ["typescript", "typescript-operations", 'typed-document-node'],
      config: {
        useTypeImports: true,
      },
    },
    "graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
