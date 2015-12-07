#! /bin/sh

if test -n "$(git status --porcelain)"; then
  echo "Your git directory is unclean"
  exit
fi

current=`cat package.json | json version`
read -p "New version number (current is ${current}): " version
npm version $version
git push
git push --tags
npm publish
