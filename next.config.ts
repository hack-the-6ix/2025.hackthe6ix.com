// next.config.ts
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
