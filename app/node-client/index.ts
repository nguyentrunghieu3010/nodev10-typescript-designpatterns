var Client = require('node-rest-client').Client;
var clientServer = new Client();
const urlRest = '';

for (var i = 0; i < 100; i++) {
    clientServer.get(urlRest, (data, response) => {
        console.log(i + ' data:::', data);
    })
}
