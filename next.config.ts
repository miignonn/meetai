// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@dicebear/core", "@dicebear/converter"],
};

export default nextConfig;
