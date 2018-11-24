var mosca = require("mosca");
var server = new mosca.Server({
  http: {
    port: 3000,
    bundle: true,
    static: './'
  }
});

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log("ss");
  console.log('Published', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}