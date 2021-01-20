#!/bin/bash
set -e

git pull
npm run deploy
npm start