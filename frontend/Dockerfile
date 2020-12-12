FROM node:current-alpine
WORKDIR /out-the-door-frontend
COPY package.json .
COPY package-lock.json .
COPY .env .
COPY src ./src
COPY public ./public
RUN npm install
RUN npm run build

FROM nginx
COPY --from=0 /out-the-door-frontend/build /usr/share/nginx/html/
COPY .env /usr/share/nginx/html/
COPY conf/conf.d/default.conf /etc/nginx/conf.d/
COPY env-config.js /usr/share/nginx/html/
COPY env.sh /tmp
EXPOSE 8080
CMD ["/bin/bash", "-c", "cd /usr/share/nginx/html && /tmp/env.sh && nginx -g \"daemon off;\""]
