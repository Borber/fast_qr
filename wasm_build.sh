#!/bin/sh

wasm-pack build --target web
echo ""
echo "Ready in ./pkg"

echo
echo

echo 'cp ./pkg/qrgen* "DESIRED_LOCATION" is in CLIPBOARD'
echo -n 'cp ./pkg/qrgen* "DESIRED_LOCATION"' | clip.exe
