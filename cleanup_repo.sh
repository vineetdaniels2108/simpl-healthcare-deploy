#!/bin/bash

echo "🧹 Cleaning up repository..."

# Remove large video files from git history
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch Videos/*.mp4' \
--prune-empty --tag-name-filter cat -- --all

# Remove zip files
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch *.zip' \
--prune-empty --tag-name-filter cat -- --all

# Clean up git
git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
git reflog expire --expire=now --all
git gc --prune=now --aggressive

echo "✅ Repository cleaned! Size should be much smaller now."
echo "⚠️  You'll need to force push: git push --force-with-lease" 