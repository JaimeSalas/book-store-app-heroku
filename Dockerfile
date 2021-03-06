FROM node:14-alpine AS base

RUN mkdir -p /usr/app
WORKDIR /usr/app

#build front app
FROM base as front-build
COPY ./front ./
RUN npm install
RUN npm run build

#build back app
FROM base AS back-build 
COPY ./back ./
RUN npm install
RUN npm run build

#release
FROM base AS release
COPY --from=front-build /usr/app/dist ./public
COPY --from=back-build /usr/app/dist ./
COPY ./back/package.json ./
COPY ./back/package-lock.json ./
RUN npm ci --only=production

# EXPOSE 3000
# ENV PORT=3000
ENV NODE_ENV=production
ENV STATIC_FILES_PATH=./public
ENV API_MOCK=false
ENV AUTH_SECRET=MY_AUTH_SECRET
ENV CORS_ORIGIN=false

ENTRYPOINT [ "node", "index" ]

