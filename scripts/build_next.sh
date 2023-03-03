#!/usr/bin/env bash

DIST=./dist

echo "> Cleaning dist (before build)"
shx rm -rf $DIST
shx mkdir -p $DIST

echo "> Building next"
next build && next export || exit 1

echo "> Copying .next to dist folder"

shx rm -rf .next/cache
shx cp -R .next $DIST
