# Serverless DynamoDB
## overview
- [doc](#doc)
- [install](#install)
- [notes](#notes)
## doc
- https://nodejs.org/en/download/
- https://serverless.com/framework/docs/providers/aws/guide/installation/
- https://serverless.com/framework/docs/providers/aws/cli-reference/
## install
```sh
make help
```
## notes
set your AWS credentials
```sh
export AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_ACCESS_KEY
export AWS_DEFAULT_REGION=eu-west-1
```
```sh
cat <<EOF > $HOME/.aws/credentials
[default]
aws_access_key_id = $AWS_ACCESS_KEY_ID
aws_secret_access_key = $AWS_SECRET_ACCESS_KEY
region = $AWS_DEFAULT_REGION
EOF
```
check serverless file
```sh
make print
```