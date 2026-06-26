#!/usr/bin/env sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
REPO_ROOT=$(CDPATH= cd -- "$SCRIPT_DIR/.." && pwd)
SKILLS_DIR="$HOME/.agents/skills"
DEST="$SKILLS_DIR/imageno1-skill"

mkdir -p "$SKILLS_DIR"

if [ -d "$DEST" ] && [ "$(CDPATH= cd -- "$DEST" && pwd)" = "$REPO_ROOT" ]; then
  echo "Already running from the installed skill path: $DEST"
  echo "Nothing to copy."
  exit 0
fi

rm -rf "$DEST"
mkdir -p "$DEST"

tar \
  --exclude='.git' \
  --exclude='node_modules' \
  -cf - -C "$REPO_ROOT" . | tar -xf - -C "$DEST"

echo "imageno1-skill installed successfully:"
echo "$DEST"
