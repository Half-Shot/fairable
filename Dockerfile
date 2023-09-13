FROM node:20-slim

WORKDIR /app
COPY package.json yarn.lock ./lib /app
RUN yarn

EXPOSE 443
CMD ["node", "/app/lib/index.mjs"]