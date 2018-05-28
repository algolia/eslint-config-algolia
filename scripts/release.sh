#!/usr/bin/env bash

set -e # exit when error

printf "\nReleasing\n"

if ! npm owner ls | grep -q "$(npm whoami)"
then
  printf "Release: Not an owner of the npm repo, ask a contributor for access"
  exit 1
fi

currentBranch=`git rev-parse --abbrev-ref HEAD`
if [ $currentBranch != 'master' ]; then
  printf "Release: You must be on master"
  exit 1
fi

if [[ -n $(git status --porcelain) ]]; then
  printf "Release: Working tree is not clean (git status)"
  exit 1
fi

printf "\n\nRelease: update working tree"
git pull origin master
git fetch origin --tags

printf "Release: yarn"
yarn

currentVersion=`cat package.json | json version`

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

npm version "$newVersion" --no-git-tag-version

# update changelog
printf "\n\nRelease: update changelog"
conventional-changelog --preset angular --infile CHANGELOG.md --same-file

# git add and tag
commitMessage="release v$newVersion

See https://github.com/algolia/eslint-config-algolia/blob/master/CHANGELOG.md"
git add package.json CHANGELOG.md README.md
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
