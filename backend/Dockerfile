################################## BUILD TIME ######################################

# Use an official Node.js runtime as the base image

FROM node:latest

# Expose the port your Nest.js application is running on

EXPOSE 5000
EXPOSE 5555

RUN apt-get update 
RUN apt-get upgrade -y

# Set the working directory in the container

WORKDIR /usr/src/app

COPY . .

# Install all the required dependencies

RUN npm install -y

# Make migrations to DB



################################## RUNTIME #################################################

# Start the application

ENTRYPOINT ["./tools/runserver.sh"] 