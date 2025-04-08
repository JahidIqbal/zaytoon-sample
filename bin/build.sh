#!/bin/sh
set -e

docker build -t polygontechxyz/admin-front:latest -f ./docker/Dockerfile.dev .
# docker tag admin-front:latest polygontechxyz/admin-front:latest
docker push polygontechxyz/admin-front:latest