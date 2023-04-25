FROM node:16.3.0
COPY . .
RUN npm i
ENTRYPOINT [ "npm", "start" ]