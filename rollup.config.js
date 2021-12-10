import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.mjs",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [nodeResolve()],
};
