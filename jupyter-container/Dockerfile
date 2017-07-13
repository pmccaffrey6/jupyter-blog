FROM ubuntu:16.04
LABEL maintainer="pmccaffrey6@gmail.com"

COPY requirements.txt /requirements.txt

RUN apt-get update && apt-get install -y python3 python3-pip \
    && pip3 install -r requirements.txt \
    && mkdir /jupyter-config

ADD .jupyter /jupyter-config
