var mqtt = require('mqtt')
var client  = mqtt.connect([{ host: 'localhost', port: 3000 }])

client.on('connect', function () {
  client.subscribe('topic1', function (err) {
    // if (!err) {
    // }
  })

})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  // client.end()
})

