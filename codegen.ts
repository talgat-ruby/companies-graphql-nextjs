import { CodegenConfig } from "@graphql-codegen/cli";

const config = {
  schema: "./schema.graphql",
  documents: ["graphql/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
} satisfies CodegenConfig;

export default config;
