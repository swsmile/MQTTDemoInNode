var mqtt = require('mqtt')
var client  = mqtt.connect([{ host: 'localhost', port: 3000 }])

client.on('connect', function () {
	client.publish('topic1', "Hello topic1!!!")
	// setInterval(function(){ 
	// 	client.publish('topic1', "Hello topic1!!!")
 //  	 }, 10000);
});

client.on('message', function (topic, message) {
	// message is Buffer
	console.log(message.toString());
});

