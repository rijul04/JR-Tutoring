import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginReactQuery } from "@kubb/plugin-react-query";

export default defineConfig({
  input: {
    path: "../openapi/schema.yaml", // Adjust the path to your OpenAPI spec
  },
  output: {
    path: "./src/api/generated", // Base output directory
    clean: true,
  },
  plugins: [
    pluginOas({
      generators: [], // Disables the generation of schema files
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
      enumType: "asConst", // Enums will be generated using 'as const'
      dateType: "string", // Dates will be represented as strings
      unknownType: "unknown", // Uses 'unknown' for unknown types
      optionalType: "questionTokenAndUndefined", // Handles optional properties with '?' and 'undefined'
    }),
    pluginReactQuery({
      output: {
        path: "./hooks",
        banner: "`Kubb: Generated hooks`",
      },
      group: {
        type: "tag", // Groups hooks based on the first tag of each operation
        name: ({ group }) => `${group}Hooks`, // Naming convention for grouped files
      },
      query: {
        methods: ["get"], // Generates hooks for GET requests
        importPath: "@tanstack/react-query", // Import path for React Query
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
      paramsCasing: "camelcase", // Converts parameter names to camelCase
    }),
  ],
});
