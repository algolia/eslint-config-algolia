#!/usr/bin/env bash

set -e # exit when error

cd sample-project
npm install
eslint .
