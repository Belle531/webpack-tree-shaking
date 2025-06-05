import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "production", // Must be 'production' for tree shaking
  optimization: {
    usedExports: true, // Enables tree shaking
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Targets CSS files
        use: ["style-loader", "css-loader"], // Applies loaders
      },
    ],
  },
};

