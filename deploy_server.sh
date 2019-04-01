#! /bin/bash
sudo yarn build:server

# Heroku process
# may need to sysctl snapd socket
sudo heroku container:push web
sudo heroku container:release web


# Digital Ocean process
# sudo docker build -t fademyke/vaster:latest .
# sudo docker push fademyke/vaster:latest
# ssh root@165.227.215.47 "docker pull fademyke/vaster:latest && docker tag fademyke/vaster:latest dokku/vaster:latest && dokku tags:deploy vaster latest"