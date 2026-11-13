import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite ver el modo desarrollo desde el celular en la misma red Wi-Fi
  allowedDevOrigins: ["192.168.1.5", "100.94.248.34"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
