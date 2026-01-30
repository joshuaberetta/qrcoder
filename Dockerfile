FROM node:20-alpine

WORKDIR /app

COPY package.json ./

# Install dependencies Use npm install since lockfile might be missing/outdated
RUN npm install --production

COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
