FROM node:19.5.0-alpine3.17
WORKDIR /app
COPY .  .
EXPOSE 8000
RUN yarn install && yarn cache clean
CMD ["yarn", "develop", "-H", "0.0.0.0", "-p", "8000"]