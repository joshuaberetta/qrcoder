FROM node:20-alpine

WORKDIR /app

COPY package.json ./

# Install dependencies Use npm install since lockfile might be missing/outdated
RUN npm install --production

COPY . .

ENV PORT=8004
EXPOSE 8004

CMD ["npm", "start"]
