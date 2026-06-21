#!/usr/bin/env bash

aws dynamodb delete-table --table-name ${DYNAMODB_TABLE} \
--endpoint-url ${DYNAMODB_URL}
