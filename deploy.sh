#!/bin/bash

# Ben Imberman Portfolio - Deployment Script
# This script builds and deploys the portfolio to AWS S3 + CloudFront

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Configuration
S3_BUCKET="benimberman-portfolio-1761255859"
CLOUDFRONT_DISTRIBUTION="E2OF631MGGQKE8"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if AWS CLI is installed and configured
if ! command -v aws &> /dev/null; then
    print_error "AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    print_error "AWS credentials not configured. Please run 'aws configure' first."
    exit 1
fi

print_status "AWS CLI is configured"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
else
    print_status "Dependencies already installed"
fi

# Build the project
print_status "Building project..."
npm run build

if [ ! -d "dist" ]; then
    print_error "Build failed - dist directory not found"
    exit 1
fi

print_status "Build completed successfully"

# Deploy to S3
print_status "Deploying to S3 bucket: $S3_BUCKET"
aws s3 sync dist/ s3://$S3_BUCKET --delete

if [ $? -eq 0 ]; then
    print_status "Successfully uploaded to S3"
else
    print_error "Failed to upload to S3"
    exit 1
fi

# Invalidate CloudFront cache
print_status "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION --paths "/*"

if [ $? -eq 0 ]; then
    print_status "CloudFront cache invalidation initiated"
else
    print_warning "Failed to invalidate CloudFront cache (deployment will still work, but may take longer to update)"
fi

print_status "🎉 Deployment completed successfully!"
print_status "Your website will be available at: https://benimberman.com"
print_warning "Note: CloudFront cache invalidation may take 5-15 minutes to complete"
