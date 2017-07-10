FROM mhart/alpine-node:8
LABEL maintainer="pmccaffrey6@gmail.com"

COPY gulpfile.js /gulpfile.js

RUN npm install -g gulp gulp-server-livereload && \
    npm install --save-dev gulp gulp-server-livereload

EXPOSE 8000 35729

CMD ["gulp","webserver"]
