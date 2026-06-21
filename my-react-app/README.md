# my-react-app

build
```sh
npm build
```
```sh
npm build.prod
```
watch
```sh
npm run watch
```
start
```sh
npm start
```
publish
```sh
NPM_TOKEN=YOUR_TOKEN
```
```sh
cat <<EOF > ~/.npmrc
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
EOF
```
```sh
npm publish
```