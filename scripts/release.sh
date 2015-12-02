#! /bin/sh

if test -n "$(git status --porcelain)"; then
  echo "Your git directory is unclean"
  exit
fi

current=`cat VERSION`
read -p "New version number (current is ${current}): " version
npm version $version
rm -f VERSION && echo $version > VERSION
git commit VERSION --amend -m "v$version"
git push
git push --tags
npm publish
