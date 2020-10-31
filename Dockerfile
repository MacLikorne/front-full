FROM node as build
WORKDIR /app
COPY . ./
RUN npm i --only=prod
RUN npm run build

FROM nginx:1.19.0
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
