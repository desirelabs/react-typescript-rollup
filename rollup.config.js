// rollup.config.js
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "index.tsx",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    typescript(),
    resolve(),
    babel({
      exclude: /node_modules/, // only transpile our source code
    }),
  ],
  external: ["react", "react-dom"],
};
