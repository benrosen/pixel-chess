#!/bin/bash
set -e

echo "Building local resources..."
react-scripts build
sh ./compile_schema.sh

echo "Building remote resources..."
amplify push
