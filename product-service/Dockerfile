FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./

RUN npm install

COPY src ./src
COPY tsconfig.json ./

ENV DATABASE_URL="postgresql://nordmart:nordmart_password@localhost:5432/nordmart_db?schema=public"

RUN npx prisma generate

EXPOSE 3001

CMD ["npm", "run", "dev"]