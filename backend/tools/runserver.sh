#!/bin/bash

npx prisma migrate dev --name latest;

npm run start:dev;