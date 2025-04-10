#!/bin/bash

# Exit on error
set -e

# Install npm dependencies without using frozen lockfile
npm install

# Install wrangler globally if it doesn't exist
if ! command -v wrangler &> /dev/null; then
    echo "Installing wrangler globally..."
    npm install -g wrangler
fi

echo "Dependencies installed successfully" 