FROM alpine

EXPOSE 80

RUN apk add nginx;

COPY app.conf /etc/nginx/http.d/default.conf

WORKDIR /app
COPY ./dist/ /app

CMD ["nginx", "-g", "daemon off;"]
