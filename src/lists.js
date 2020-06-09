const axios = require('axios');

class Lists {
	constructor(baseURL, headers) {
		this.baseURL = `${baseURL}/lists`;
		this.config = {
			baseURL: this.baseURL,
			headers,
		};
	}

	async append(list, value = '') {
		try {
			if (!list) throw 'List name not provided';
			const response = await axios({
				url: `/append/${list}`,
				method: 'POST',
				params: {
					value,
				},
				...this.config,
			});
			return response.data;
		} catch (e) {
			throw new Error(e);
		}
	}

	async prepend(list, value = '') {
		try {
			if (!list) throw 'List name not provided';
			const response = await axios({
				url: `/prepend/${list}`,
				method: 'POST',
				params: {
					value,
				},
				...this.config,
			});
			return response.data;
		} catch (e) {
			throw new Error(e);
		}
	}

	async removeLast(list) {
		try {
			if (!list) throw 'List name not provided';
			const response = await axios({
				url: `/removelast/${list}`,
				method: 'POST',
				...this.config,
			});
			return response.data;
		} catch (e) {
			throw new Error(e);
		}
	}

	async removeFirst(list) {
		try {
			if (!list) throw 'List name not provided';
			const response = await axios({
				url: `/removefirst/${list}`,
				method: 'POST',
				...this.config,
			});
			return response.data;
		} catch (e) {
			throw new Error(e);
		}
	}

	async values(list) {
		try {
			if (!list) throw 'List name not provided';
			const response = await axios({
				url: `/values/${list}`,
				method: 'GET',
				...this.config,
			});

			const data = response.data === '<nil>' ? null : response.data;
			if (!data) return null;
			const arr = data.split('%%');
			arr.shift();
			arr.pop();
			return arr;
		} catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = Lists;
