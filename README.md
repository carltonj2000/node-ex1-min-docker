# Node Express Minimal Docker Example

## Code History

The code in this repository is based on the
[Docker And Node](https://youtu.be/FFAWp9qoX4M)
video. It is a series.

```bash
mkdir node-exe1-min-docker
cd node-exe1-min-docker
npm init -y
npm add express
#code minimal express server and run script
npm run dev

# create Dockerfile
docker build -t carltonj2000/node-exe1-min-docker .
docker run -p 3003:3003 -t carltonj2000/node-exe1-min-docker

# set Dockerfile production for env and npm install
#  - skip dev dependencies so smaller final image size
#  - reduces crash error messages to not show structure of code
#  - improves run speed as measured by response-time
npm add -D jest
docker build -t carltonj2000/node-exe1-min-docker .
docker ls
npm add moment response-time

# build with alpine
 docker build -t carltonj2000/node-exe1-min-docker-alpine .
docker images # 955 M or 350 M compressed for standard node image
docker images # 183 M or 50 M compress  standard node image

# npm ci - not npm install. It uses/requires package-lock.json
npm ci

# multi stage build - slim 240 M vs 995 M for standard
docker build -t carltonj2000/node-exe1-min-docker .
docker run -p 3003:3003 -t carltonj2000/node-exe1-min-docker
```
