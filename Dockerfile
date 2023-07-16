# Stage 1: Build the app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --production

# Copy the rest of the app files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Create a lightweight production image
FROM node:18-alpine

WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app .

# Expose the app's port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]