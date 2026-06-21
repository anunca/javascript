#!/usr/bin/env bash

aws dynamodb describe-table --table-name ${DYNAMODB_TABLE} \
--endpoint-url ${DYNAMODB_URL}
