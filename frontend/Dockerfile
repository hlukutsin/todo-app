FROM oven/bun:1.0.26-alpine

WORKDIR /frontend

COPY package.json bun.lockb ./

RUN bun install

COPY . .

RUN bun run build


