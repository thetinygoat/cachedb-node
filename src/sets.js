const axios = require('axios');

class Sets {
	constructor(baseURL) {
		this.baseURL = `${baseURL}/sets`;
	}

	async set() {
		try {
			const response = await axios.post(`${this.baseURL}/set`);
			return response.data;
		} catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = Sets;
