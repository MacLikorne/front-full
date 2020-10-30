FROM node as build
WORKDIR /app
COPY . ./
RUN npm i --only=prod
RUN npm run build

FROM nginx
WORKDIR /app
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

