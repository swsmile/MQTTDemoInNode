var mosca = require("mosca");
var server = new mosca.Server({
  http: {
    port: 3000,
    bundle: true,
    static: './'
  }
});

// fired when a new client connects
server.on('clientConnected', function(client) {
    console.log('client (clientId:', client.id, ') connected');
});

// fired when a message is received
server.on('published', function(packet, client) {
  	console.log("-------------------------------");
  	console.log('Published', packet.payload);
  	console.log("-------------------------------");
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}