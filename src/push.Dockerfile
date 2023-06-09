FROM nginx:1.21-alpine

COPY --from=builder /react-app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]