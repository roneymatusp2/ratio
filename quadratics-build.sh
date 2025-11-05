#!/bin/bash

echo "🚀 Starting Netlify build process for Quadratics Practice..."

echo "📦 Installing dependencies (including devDependencies)..."
npm install --include=dev --no-package-lock --loglevel=verbose

echo "📋 Listing installed packages..."
npm list --depth=0

echo "🔨 Building application..."
npm run build

echo "✅ Build complete! Quadratics Practice is ready to deploy!"
