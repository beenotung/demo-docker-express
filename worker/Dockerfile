FROM node:12.18.3-slim

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
RUN yarn install

# Add metadata to the image to describe which port the container is listening on at runtime.
# skipping this option allows the port to be configured from docker-compose.yml
# EXPOSE 8080

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Run the specified command within the container.
CMD node index.js
