import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginReactQuery } from "@kubb/plugin-react-query";

const baseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

export default defineConfig({
  input: {
    path: "../openapi/schema.yaml",
  },
  output: {
    path: "./src/api/generated",
    clean: true,
  },
  plugins: [
    pluginOas({
      generators: [],
      serverIndex: 0,
      validate: true,
    }),
    pluginTs({
      output: {
        path: "./types/types.ts",
        banner: "`Kubb: Generated types`",
      },
      group: {
        type: "tag",
        name: ({ group }) => `'${group}Controller`,
      },
      enumType: "asConst",
      dateType: "string",
      unknownType: "unknown",
      optionalType: "questionTokenAndUndefined",
    }),
    pluginReactQuery({
      output: {
        path: "./hooks",
        banner: "`Kubb: Generated hooks`",
      },
      group: {
        type: "tag",
        name: ({ group }) => `${group}Hooks`,
      },
      client: {
        baseURL: baseUrl, // from local env file
      },
      query: {
        methods: ["get"],
        importPath: "@tanstack/react-query",
      },
      mutation: {
        methods: ["post", "put", "patch", "delete"],
      },
      // setting infite to false for now as dont need hooks that can handle infinifte pagination for now
      // below is what it could/would look like for one that would handle it
      //   infinite: {
      //     queryParam: "page",
      //     initialPageParam: 0,
      //     cursorParam: "cursor",
      //   },
      infinite: false,
      suspense: false,
      pathParamsType: "object",
      paramsCasing: "camelcase",
    }),
  ],
});
