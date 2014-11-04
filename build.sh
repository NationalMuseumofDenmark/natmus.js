#!/bin/bash
JSDOC="jsdoc";
CLOSURE_COMPILER="closure";
CIP_JS_PATH="node_modules/cip-js";
#CIP_JS_PATH="../cip.js";

# Build the cip.js lib
cd $CIP_JS_PATH
./build.sh
cd -

rm -rf dist
mkdir dist

cat $CIP_JS_PATH/header.txt > dist/cip+natmus.min.js;
$CLOSURE_COMPILER $CIP_JS_PATH/dist/cip.min.js src/natmus.js >> dist/cip+natmus.min.js

cp $CIP_JS_PATH/dist/cip.js.zip dist/cip+natmus.js.zip
zip -r dist/cip+natmus.js.zip dist/cip+natmus.min.js examples
