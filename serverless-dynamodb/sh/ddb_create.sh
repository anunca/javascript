#!/usr/bin/env bash

aws dynamodb create-table --table-name ${DYNAMODB_TABLE} \
--attribute-definitions AttributeName=id,AttributeType=S \
--key-schema AttributeName=id,KeyType=HASH \
--provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
--endpoint-url ${DYNAMODB_URL}
