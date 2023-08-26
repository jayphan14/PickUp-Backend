FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json of the directory over
COPY package*.json ./

RUN npm install

# Copy the rest of the directory over
COPY . .

EXPOSE 3000

CMD ["npm", "start"]