#
FROM node:lts-slim

ARG BUILD_NR
ENV BUILD_NR=${BUILD_NR}

ARG BUILD_DATE
ENV BUILD_DATE=${BUILD_DATE}

ARG BUILD_BRANCH
ENV BUILD_BRANCH=${BUILD_BRANCH}

ARG BUILD_COMMIT
ENV BUILD_COMMIT=${BUILD_COMMIT}

ENV NODE_OPTIONS="--max_old_space_size=8192"

# set working directory
WORKDIR /home/node/app

COPY . .

# expose port and define CMD

# USER node

EXPOSE 3000 80

CMD [ "yarn", "start" ]
