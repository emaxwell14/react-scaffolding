# Use an official node runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /
ADD . /

# Install any needed packages
RUN cd /app && yarn

# Make port 80 available to the world outside this container
EXPOSE 80

# Run start when the container launches
CMD ["npm", "start"]
