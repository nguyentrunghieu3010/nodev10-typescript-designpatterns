const apiai = require('apiai');
const app = apiai('a733a2dae0314056b55b1c7fcfa26229');

const request = app.textRequest('Hi', { sessionId: 'mybot-ea1ad' });

request.on('response', (response) => {
    console.log('Response : ', response);
});

request.on('error', (error) => {
    console.log('Error: ', error);
});

request.end();