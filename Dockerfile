FROM node as build
WORKDIR /app
COPY . ./
RUN npm i --only=prod
RUN npm run build

FROM nginx:1.19.0
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d
COPY --from=build /app/nginx/installer.sh /tmp/installer.sh
RUN /tmp/installer.sh
RUN rm -R /tmp/installer.sh
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]

