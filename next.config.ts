import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Evita que o Next use um lockfile de fora do projeto como raiz
    root: import.meta.dirname,
  },
};

export default nextConfig;
