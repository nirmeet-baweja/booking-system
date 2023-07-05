require("dotenv").config();

const config = {
  clientUrl: process.env.CLIENT_URL,
  serverUrl: process.env.SERVER_URL,
};

module.exports = config;
