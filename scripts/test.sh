#!/usr/bin/env bash

set -e # exit when error

yarn lint
cd sample-project
yarn
yarn lint
