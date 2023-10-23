/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    BACKEND_PROD: "https://backend-shoes-store.onrender.com/shoes",
  },
};
module.exports = nextConfig;
