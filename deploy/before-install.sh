#!/bin/bash
set -e

pm2 update
pm2 delete all || true

rm -rf /srv/node-app
mkdir /srv/node-app

sleep 3

