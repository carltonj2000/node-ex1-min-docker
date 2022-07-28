# Node Express Minimal Docker Example

## Code History

The code in this repository is based on the
[]
video.

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
```
