FROM nginx:alpine
RUN apt-get update \
    && apt-get install -y git
RUN git clone https://github.com/tolgaerdonmez/hackathon-website

COPY ./hackathon-website /usr/share/nginx/html