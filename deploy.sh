#!/bin/bash

# Simpl Healthcare Website Deployment Script

echo "🚀 Simpl Healthcare Website Deployment"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Copy assets from original Webflow export
echo "📁 Setting up assets..."
if [ -d "simpl-health.webflow/images" ]; then
    echo "📷 Copying images from Webflow export..."
    cp -r simpl-health.webflow/images/* public/ 2>/dev/null || echo "⚠️ Some images may not have been copied"
    echo "✅ Images copied"
else
    echo "⚠️ Original Webflow images directory not found"
    echo "   Please manually copy images from simpl-health.webflow/images/ to public/"
fi

# Build the application
echo "🔨 Building the application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Ask user what they want to do
echo ""
echo "What would you like to do next?"
echo "1) Start development server (npm run dev)"
echo "2) Start production server (npm run start)"
echo "3) Export static site (npm run export)"
echo "4) Exit"

read -p "Choose an option (1-4): " choice

case $choice in
    1)
        echo "🚀 Starting development server..."
        echo "Visit http://localhost:3000 to view the website"
        npm run dev
        ;;
    2)
        echo "🚀 Starting production server..."
        echo "Visit http://localhost:3000 to view the website"
        npm run start
        ;;
    3)
        echo "📦 Exporting static site..."
        npm run export
        echo "✅ Static site exported to ./out directory"
        ;;
    4)
        echo "👋 Goodbye!"
        ;;
    *)
        echo "❌ Invalid choice. Exiting."
        ;;
esac

echo ""
echo "🎉 Deployment script completed!"
echo ""
echo "📖 For more information, see README.md"
echo "🐛 Report issues at: https://github.com/your-repo/issues" 