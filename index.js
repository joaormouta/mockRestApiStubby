var Stubby = require('stubby').Stubby;

var stubby1 = new Stubby();
var stubby2 = new Stubby();

stubby1.start({
	stubs: 80,
	admin: 81,
	location: 'localhost',
	data: [
		{
			request: {
				url: '/anywhere',
				method: 'GET'
			},

			response: {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				},
				latency: 1000,
				body: 'Your request was successfully processed!',
				file: 'package.json'
			}
		},

		{
			request: { url: '/but/here' }
		}
	]
});

stubby2.start({
	stubs: 82,
	admin: 83,
	location: '127.0.0.2'
});
