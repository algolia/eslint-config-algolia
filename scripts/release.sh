#!/usr/bin/env bash

set -e # exit when error

printf "\nReleasing\n"

if npm owner ls 'eslint-config-algolia' | grep -q "ENEEDAUTH"
then
  echo "Release: Not an owner of the npm repo, ask a contributor for access"
  exit 1
fi

echo '✅ Is owner'

currentBranch=`git rev-parse --abbrev-ref HEAD`
if [ $currentBranch != 'master' ]; then
  echo "Release: You must be on master"
  exit 1
fi

echo '✅ Is on main branch'

if [[ -n $(git status --porcelain) ]]; then
  echo "Release: Working tree is not clean (git status)"
  exit 1
fi

printf "\n\nRelease: update working tree\n"
git pull origin master
git fetch origin --tags

printf "Release: yarn\n"
yarn


cd packages/eslint-config-algolia
currentVersion=`cat package.json | json version`
cd ../..

# header
printf "\n\nRelease: current version is %s" $currentVersion
printf "\nRelease: a changelog will be generated only if a fix/feat/performance/breaking token is found in git log"
printf "\nRelease: you must choose a new ve.rs.ion (semver)"
printf "\nRelease: press q to exit the next screen\n\n"

# preview changelog
read -p "=> Release: press [ENTER] to view changes since latest version.."

conventional-changelog --preset angular --output-unreleased | less

# choose and bump new version
# printf "\n\nRelease: Please enter the new chosen version > "
printf "\n=> Release: please type the new chosen version > "
read -e newVersion

# regenerate readme TOC
printf "\n\nRelease: generate TOCS"
doctoc README.md --maxlevel 3

cd packages/eslint-config-algolia
npm version "$newVersion" --no-git-tag-version
cd ../..
npm version "$newVersion" --no-git-tag-version

# update yarn.lock
yarn

# update changelog
printf "\n\nRelease: update changelog"
conventional-changelog --preset angular --infile CHANGELOG.md --same-file

# git add and tag
cd packages/eslint-config-algolia
cp ../../README.md .
commitMessage="release v$newVersion

# See https://github.com/algolia/eslint-config-algolia/blob/master/CHANGELOG.md"
git add package.json ../../package.json ../../CHANGELOG.md ../../README.md ../test/package.json ../../yarn.lock
printf %s "$commitMessage" | git commit --file -
git tag "v$newVersion"

printf "\n\nRelease: almost done.\n"
read -p "=> Release: when ready, press [ENTER] to push to github and publish the package"

printf "\n\nRelease: push to github, publish on npm\n"
git push origin master
git push origin --tags

npm publish

printf "\n\nRelease:
Package was published to npm.\n\n"
