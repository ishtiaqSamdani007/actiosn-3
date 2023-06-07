# Stage 1: Build the React TypeScript application
FROM node:14-alpine AS builder

WORKDIR /react-app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

# Stage 2: Create the Nginx container
FROM nginx:1.21-alpine

COPY --from=builder /react-app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
