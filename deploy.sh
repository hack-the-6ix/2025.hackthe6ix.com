#!/bin/bash

# Exit on error
set -e

# Install dependencies without frozen lockfile
npm install

# Build for Cloudflare Pages
npm run pages:build

# Deploy to Cloudflare Pages
npx wrangler pages deploy .vercel/output/static --project-name 2025-hackthe6ix-com 