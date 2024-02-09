# Use an official Node.js base image
# FROM aju121/node:
FROM node:alpine


# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install dependencies
# RUN npm in
# RUN npm i
RUN npm install
# RUN npm i react-scripts
# Copy the rest of the application code to the working directory
COPY . .
# COPY . ./

ENV REACT_APP_URL=

# Expose the port that your app will run on
EXPOSE 3000

# WORKDIR /app/public

# Command to run your application
CMD ["npm", "start"]
