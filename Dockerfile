FROM node:18
ENV NODE_ENV=production
WORKDIR /app
COPY ["package*.json", "./"]
RUN npm install --production
COPY src src
CMD ["npm", "run", "dev"]