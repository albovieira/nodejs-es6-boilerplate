#!/bin/bash
set -e

# to lowercase
deployment_group_name="${DEPLOYMENT_GROUP_NAME,,}"

# Set deployment variables by environment
if [[ $deployment_group_name =~ "prd" ]] || [[ $deployment_group_name =~ "production" ]] || [[ $deployment_group_name =~ "live" ]]
then
    export NODE_ENV=production
fi

if [[ $deployment_group_name =~ "hmg" ]] || [[ $deployment_group_name =~ "homologation" ]] || [[ $deployment_group_name =~ "stage" ]]
then
    export NODE_ENV=homologation
fi

cd /srv/node-app
pm2 start index.js -i 0 -e /dev/null -o /dev/null
/etc/init.d/nginx restart
sleep 3
