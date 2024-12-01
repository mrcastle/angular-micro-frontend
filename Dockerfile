FROM node:20-alpine as builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli

# Copy source
COPY . .

# Arguments for build configuration
ARG PROJECT
ARG CONFIGURATION=production

# Build the project
RUN ng build --project ${PROJECT}

# Serve stage
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Arguments for copying the correct dist folder
ARG PROJECT

# Copy built assets
COPY --from=builder /app/dist/${PROJECT}/browser /usr/share/nginx/html

EXPOSE 80
