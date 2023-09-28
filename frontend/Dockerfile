# we will use the latest version of node available from the Docker Hub.
FROM node:latest
################################# BUILD TIME #########################################

# Create app directory, where your app will live its lifetime.
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Installing the packages while the image is building
RUN npm install
RUN npm update react-scripts
RUN npm update
RUN npm install --save react react-dom react-scripts
RUN npm install -g npm@latest
RUN npm install react-scripts@latest --save

# Bundle app source, i.e. copying all your required files for the app
# Note: files & folders inside .dockerignore will not be copied.
COPY . .

# The app binds to port 3000, so exposing port 3000 to be used by the docker network
EXPOSE 3000

################################# RUNTIME ##############################################3

# Runtime command to be executed when the container is launched

# Test the frontEnd
CMD ["node", "app.js"]

# Compile the react app

# CMD ["npm", "start"]
