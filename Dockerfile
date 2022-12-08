# Use a Node 16 base image
FROM node:18-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package.json .
COPY yarn.lock .
# Install dependencies (makes sure the exact versions in the lockfile gets installed)
RUN yarn install --frozen-lockfile
# Build the app
COPY . .
RUN yarn build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "yarn", "dev" ]

