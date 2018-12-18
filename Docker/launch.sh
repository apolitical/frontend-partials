#!/bin/bash
[ -z "$GOOGLE_TAG_MANAGER_ID" ] && (>&2 echo "Need to set GOOGLE_TAG_MANAGER_ID") && exit 1;

find /usr/share/nginx/html -type f | xargs -I@ sed -i -e "s/%SEDREPLACE_GTMID%/$GOOGLE_TAG_MANAGER_ID/g" @

nginx -g "daemon off;"
