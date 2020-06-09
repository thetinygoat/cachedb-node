const axios = require('axios');

class Sets {
	constructor(baseURL, headers) {
		this.baseURL = `${baseURL}/sets`;
		this.config = {
			baseURL: this.baseURL,
			headers,
		};
	}

	async get(key) {
		try {
			if (!key) throw 'No key provided';
			const response = await axios({
				url: `/get/${key}`,
				method: 'GET',
				...this.config,
			});

			return response.data === '<nil>' ? null : response.data;
		} catch (e) {
			throw new Error(e);
		}
	}

	async set(key, value = '', ttl = -1) {
		try {
			if (!key) throw 'No key provided';
			ttl = +ttl == NaN ? -1 : ttl; //if ttl is not a number change it to max ttl
			const response = await axios({
				url: `/set/${key}`,
				method: 'POST',
				params: {
					value,
					ttl,
				},
				...this.config,
			});
			return response.data;
		} catch (e) {
			throw new Error(e);
		}
	}

	async del(key) {
		try {
			if (!key) throw 'No key provided';
			const response = await axios({
				url: `/del/${key}`,
				method: 'POST',
				...this.config,
			});
			return response.data;
		} catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = Sets;
