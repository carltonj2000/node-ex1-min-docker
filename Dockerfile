FROM node:18 as builder
ENV NODE_ENV=production
WORKDIR /app
COPY ["package*.json", "./"]
RUN npm ci --production
USER node
COPY src/. .

#FROM node:18-slim
FROM gcr.io/distroless/nodejs:18
#USER node #only in slim
COPY --from=builder /app /app
WORKDIR /app
#CMD ["node", "server.js"] # non distroless
CMD ["server.js"]
