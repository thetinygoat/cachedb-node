const axios = require('axios');

class Cachedb {
  constructor(port, user, password) {
    this.port = port;
    this.user = user;
    this.password = password;
    this.baseURL = `http://localhost:${this.port}`;
  }
}
module.exports = Cachedb;
