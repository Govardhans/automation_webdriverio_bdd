FROM govardhansanap/node-chromedriver-88.0.4321

# INSTALL PACKAGES
WORKDIR /usr/westwingnow/
COPY . .
EXPOSE 8080
RUN npm install

# ON RUNNING THE IMAGE THIS COMMAND WILL BE TRIGGERED BY DEFAULT
ENTRYPOINT ["npm", "run", "test"]