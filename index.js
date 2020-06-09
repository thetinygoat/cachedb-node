const cachedb = require('./src/cachedb');
module.exports = cachedb;

const main = function () {
	const cdbport = 9898;
	const cdbuser = 'cachedb';
	const cdbpass = 'cachedb';

	const cdb = new cachedb(cdbport, cdbuser, cdbpass);
	const sets = cdb.sets;
	const lists = cdb.lists;

	(async () => {
		try {
			let resp = await sets.set('ping', 'pong');
			console.log(resp);
			resp = await sets.get('ping');
			console.log(resp);
			resp = await sets.get('pingo');
			console.log(resp);
			resp = await lists.append('list', 'A');
			resp = await lists.prepend('list', 'B');
			resp = await lists.append('list', 'C');
			resp = await lists.values('list');
			console.log(resp);
			resp = await lists.values('listA');
			console.log(resp);
		} catch (error) {
			console.log(error);
		}
	})();
};

if (require.main === module) {
	main();
}
