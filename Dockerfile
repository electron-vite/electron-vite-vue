# use the version that corresponds to your electron version
FROM node:14.16

LABEL NAME="electron-wrapper"
LABEL RUN="docker run --rm -it electron-wrapper bash"

# install electron dependencies or more if your library has other dependencies
RUN apt-get update && apt-get install \
    git libx11-xcb1 libxcb-dri3-0 libxtst6 libnss3 libatk-bridge2.0-0 libgtk-3-0 libxss1 libasound2 \
    -yq --no-install-suggests --no-install-recommends \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# copy the source into /app
WORKDIR /app
COPY . .
RUN chown -R node /app

# install node modules and perform an electron rebuild
USER node
RUN npm install
RUN npm run build

USER node
CMD bash