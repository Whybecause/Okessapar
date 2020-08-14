# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./

RUN CI=true

RUN npm install --silent
# add app
COPY . ./

EXPOSE 8081
# start app
CMD ["npm", "start"]