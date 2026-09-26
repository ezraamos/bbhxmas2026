import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Make sure the server can list public/photos when deployed (e.g. Vercel).
  outputFileTracingIncludes: { "/": ["./public/photos/**/*"] },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "lh3.googleusercontent.com" }],
  },
};

export default nextConfig;
