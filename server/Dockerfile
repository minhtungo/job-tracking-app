# Pull Docker Hub base image
FROM node:16.13.2
# Set working directory
WORKDIR /usr/app
# Install app dependencies
COPY package*.json ./
RUN npm install -qyg nodemon@2.0.16
RUN npm install -qy
# Copy app to container
COPY . .
# Run the "dev" script in package.json
CMD ["npm", "run", "dev"]