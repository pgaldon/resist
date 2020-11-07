#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

# To fully customize the contents of this image, use the following Dockerfile instead:
# https://github.com/microsoft/vscode-dev-containers/tree/v0.117.1/containers/alpine-3.10-git/.devcontainer/Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/base:0-alpine-3.10

# ** [Optional] Uncomment this section to install additional packages. **
#
# RUN apk update \
#     && apk add --no-cache <your-package-list-here>

RUN mkdir -p /usr/local/bin/nodejs
RUN curl -sLf https://nodejs.org/dist/v14.15.0/node-v14.15.0-linux-x64.tar.xz --output /tmp/node-v14.15.0-linux-x64.tar.xz
RUN tar -xJvf node-v14.15.0-linux-x64.tar.xz -C /usr/local/bin/nodejs
RUN echo "export PATH=$PATH:/usr/local/bin/nodejs/bin" >> /root/.bashrc

