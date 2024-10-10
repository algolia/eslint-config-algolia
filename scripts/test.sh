#!/usr/bin/env bash

set -e # exit when error

cd packages/test
yarn lint
yarn lint:legacy
