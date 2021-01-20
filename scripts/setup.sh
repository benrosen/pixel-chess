#!/bin/bash
set -e

git pull -u origin HEAD
npm run deploy
npm start