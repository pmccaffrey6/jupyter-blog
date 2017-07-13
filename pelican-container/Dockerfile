FROM frolvlad/alpine-python3
LABEL maintainer="pmccaffrey6@gmail.com"

COPY  requirements.txt /requirements.txt

RUN pip3 install -r requirements.txt

WORKDIR /blog-content

CMD ["pelican","content","-r"]
