#!/bin/bash

# Exit on error
set -e

# Install dependencies
npm install

# Build for Cloudflare Pages
npm run pages:build

# Check for wrangler in node_modules
if [ ! -f ./node_modules/.bin/wrangler ]; then
  echo "Wrangler not found in node_modules, installing..."
  npm install wrangler
fi

# Deploy to Cloudflare Pages
echo "Deploying to Cloudflare Pages..."
npx wrangler pages deploy .vercel/output/static --project-name 2025-hackthe6ix-com --commit-dirty=true

echo "Deployment complete!" 