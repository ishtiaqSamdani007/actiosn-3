#use official image of nodejs
FROM node:14-alpine

#set workdirectory
WORKDIR /react-app

#copy packaage.json to files to container
COPY package*.json ./

#install dependencies
RUN npm i 

#copy the rest files
COPY . .

#expose the port
EXPOSE 3000

#run the application
CMD ["npm","start"]