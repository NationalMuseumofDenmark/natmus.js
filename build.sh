#!/bin/bash
JSDOC="jsdoc";
CLOSURE_COMPILER="closure";

# Build the cip.js lib
git submodule update --init
cd lib/cip.js
./build.sh
cd -

rm -rf dist
mkdir dist

cat lib/cip.js/header.txt > dist/cip+natmus.min.js;
$CLOSURE_COMPILER lib/cip.js/dist/cip.min.js src/natmus.js >> dist/cip+natmus.min.js

cp lib/cip.js/dist/cip.js.zip dist/cip+natmus.js.zip
zip -r dist/cip+natmus.js.zip dist/cip+natmus.min.js examples
