const axios = require('axios');
const Sets = require('./sets');
const Lists = require('./lists');

class Cachedb {
	constructor(port, user, password) {
		this.port = port;
		this.user = user;
		this.password = password;
		this.baseURL = `http://localhost:${this.port}`;
		this.headers = {
			'X-Cachedb-User': this.user,
			'X-Cachedb-Password': this.password,
		};
		this.sets = new Sets(this.baseURL, this.headers);
		this.lists = new Lists(this.baseURL, this.headers);
	}
}
module.exports = Cachedb;
