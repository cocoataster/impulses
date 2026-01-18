#!/bin/bash

# Try to load user profile to find Node (common fix for NVM/ASDF users)
# We ignore errors here in case of strict shell settings in rc files
{
    [ -s "$HOME/.zshrc" ] && source "$HOME/.zshrc"
    [ -s "$HOME/.bash_profile" ] && source "$HOME/.bash_profile"
    [ -s "$HOME/.bashrc" ] && source "$HOME/.bashrc"
    # specific checks for NVM default locations
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
} >/dev/null 2>&1

# Stop on error
set -e

echo "🚀 Starting Project Setup..."

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is STILL not found."
    echo "This means either:"
    echo "1. You don't have Node.js installed."
    echo "   -> Please install it from https://nodejs.org/"
    echo "2. It's installed but not in your PATH."
    echo "   -> Try running this command manually in your terminal: npx -y create-vite@latest . --template react"
    exit 1
fi

echo "✅ Node.js found: $(node -v)"

# Initialize Vite project
if [ -f "package.json" ]; then
    echo "ℹ️  package.json already exists. Skipping create-vite..."
else
    echo "📦 Creating Vite application..."
    npx -y create-vite@latest . --template react
fi

# Install dependencies
echo "⬇️  Installing dependencies..."
npm install

# Install TailwindCSS
echo "🎨 Installing TailwindCSS..."
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

echo "✨ Setup Complete!"
