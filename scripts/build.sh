#!/bin/bash
set -e

echo "Building local resources..."
react-scripts build
npm run compile-schema

echo "Building remote resources..."
amplify push
