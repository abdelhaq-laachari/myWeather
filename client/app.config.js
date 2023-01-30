require("dotenv").config();

module.exports = {
  extra: {
    apiUrl: process.env.API_URL,
    apiKey: process.env.API_KEY,
  },
};
