import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: { useLightningcss: true },
  sassOptions: { implementation: 'sass-embedded' },
};

export default nextConfig;
