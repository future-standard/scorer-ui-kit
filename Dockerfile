## This dockerfile sets up a Node.js environment to build and run a Storybook instance for a UI library to review package json changes in isolation.

FROM node:18

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY packages/ /app/packages/
RUN npm ci
RUN npm run build --workspace=packages/ui-lib
EXPOSE 9009
CMD ["npm", "run","storybook", "--workspace=packages/storybook", "--", "--no-open"]
# EXPOSE 3000
# CMD ["npm", "run","start", "--workspace=packages/example", "--", "--no-open"]