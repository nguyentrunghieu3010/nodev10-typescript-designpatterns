const apiai = require('apiai');
const app = apiai('a733a2dae0314056b55b1c7fcfa26229');

const request = app.textRequest('I am Hieu from FPT Software', { sessionId: 'mybot-ea1ad' });

request.on('response', (response) => {
    console.log('Response : ', response);
    console.log('Response of Bot Action: ', response.result.action);
    console.log('Response of Resolved Query:', response.result.resolvedQuery);
    console.log('Response of Bot Intent Name: ', response.result.metadata.intentName);
    console.log('Response of Bot Parameter: ', response.result.parameters);

});

request.on('error', (error) => {
    console.log('Error: ', error);
});

request.end();