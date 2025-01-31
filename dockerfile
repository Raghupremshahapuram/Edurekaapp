# Stage 1: Build the Angular application
FROM node:18 as build-step

WORKDIR /app    
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


# Stage 2: Serve the application with Nginx

FROM nginx:alpine

COPY --from=build-step /app/dist/test1 /usr/share/nginx/html


# Stage 3 

# Expose port 80
EXPOSE 80

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]