# Node.js client for Cachedb

### Installing the client library

```bash
npm install @cachedb-node/cachedb
```

### Using the client library

```javascript
// Imports the CacheDB client library
const cachedb = require('@cachedb-node/cachedb');

/*
const cdbport = 9898;
const cdbuser = 'cachedb';
const cdbpass = 'cachedb';
*/

// Creates a client
const cdb = new cachedb(cdbport, cdbuser, cdbpass);
const sets = cdb.sets;
const lists = cdb.lists;
```

## Sets API

### Set

Insert a key value pair

### set(key,value,ttl?) ttl : time to live, in seconds

```javascript
sets.set('foo','bar').then(data=>{
    console.log(data); // OK
}).catch(err){
    console.log(err);
}

// Or

sets.set('foo','bar',60) //stores the value for 60 seconds
  .then(console.log) // OK
  .catch(console.log)

// Or

const setFoo = async () => {
  try {
	let resp = await sets.set('foo', 'bar');
	console.log(resp);   // OK
  }catch (error) {
	console.log(error);.
  }
}
setFoo()
```

### Get

Get a value corresponding to a particlar key.

### get(key)

```javascript
sets.get('foo').then(data=>{
    console.log(data); // bar
}).catch(err){
    console.log(err);
}

// Or

sets.get('foo')
  .then(console.log) // bar
  .catch(console.log)

// Or

const getFoo = async () => {
  try {
	let resp = await sets.get('foo');
	console.log(resp);   // bar
  }catch (error) {
	console.log(error);.
  }
}
getFoo()
```

### Del

Delete a particular key-value pair

### del(key)

```javascript
sets.del('foo').then(data=>{
    console.log(data); // OK
}).catch(err){
    console.log(err);
}

// Or

sets.del('foo')
  .then(console.log) // OK
  .catch(console.log)

// Or

const getFoo = async () => {
  try {
	let resp = await sets.del('foo');
	console.log(resp);   // OK
  }catch (error) {
	console.log(error);.
  }
}
detFoo()
```

## Lists API

### Append

Inserts the data to the end of the list.

### append(listName, value)

```javascript
const appendData = async () => {
  try {
	let resp = await lists.append('foo','bar');
	console.log(resp);   // OK ... data 'bar' is added to the list 'foo'
  }catch (error) {
	console.log(error);.
  }
}
appendData()
```

### Prepend

Inserts the data to the front of the list.

### prepend(listName, value)

```javascript
const prependData = async () => {
  try {
	let resp = await lists.prepend('foo','bar');
	console.log(resp);   // OK ... data 'bar' is added to the front of list 'foo'
  }catch (error) {
	console.log(error);.
  }
}
prependData()
```

### Values

Returns the entire list as an Array.

### values(listName)

```javascript
const getList = async () => {
  try {
	let resp = await lists.values('foo');
	console.log(resp);   // ['bar','bar']
  }catch (error) {
	console.log(error);.
  }
}
getList()
```

### Remove Last

Removes and returns the data from the end of the list.

### removeLast(listName)

```javascript
const pollLast = async () => {
  try {
	let resp = await lists.removeLast('foo');
	console.log(resp);   // 'bar'
  }catch (error) {
	console.log(error);.
  }
}
pollLast()
```

### Remove First

Removes and returns the data from the end of the list.

### removeFirst(listName)

```javascript
const pollFirst = async () => {
  try {
	let resp = await lists.removeFirst('foo');
	console.log(resp);   // 'bar'
  }catch (error) {
	console.log(error);.
  }
}
pollFirst()
```
