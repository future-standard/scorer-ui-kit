FROM node:16

WORKDIR '/app'

COPY ./package.json .
COPY ./package-lock.json .
RUN ["npm", "ci"]
COPY ./ .

EXPOSE 9009
EXPOSE 3000

RUN ["npm", "dedupe", "react-refresh"]
RUN ["npm", "start", "-w", "packages/ui-lib", "forever"]
RUN ["npm", "start", "-w", "packages/example", "forever"]
RUN ["npm", "start", "-w", "packages/storybook", "forever"]
