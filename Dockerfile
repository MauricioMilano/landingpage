# Use an official Nginx image as the base image
FROM nginx:latest

# Copy the static files from the 'vinny' directory into the Nginx default html directory
COPY / /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Command to run Nginx (default command of the base image)
CMD ["nginx", "-g", "daemon off;"]
