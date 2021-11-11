#!/bin/sh

wasm-pack build --target web
echo ""
echo "Ready in ./pkg"

echo
echo

echo 'cp ./pkg/qrgen* "/mnt/c/Users/Erwan/SynologyDrive/development/nextjs/qrgen/components/qrgen/" is in CLIPBOARD'
echo -n 'cp ./pkg/qrgen* "/mnt/c/Users/Erwan/SynologyDrive/development/nextjs/qrgen/components/qrgen/"' | clip.exe
