#!/bin/sh

set -e

pnpm i --frozen-lockfile
# pnpm update:version

pnpm build

cd dist/dejavu-ui
npm publish --access public
cd -

echo "✅ Publish completed"
