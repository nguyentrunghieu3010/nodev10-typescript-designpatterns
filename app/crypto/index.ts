const cryptoo = require('crypto');
const secret = 'nguyentrunghieu';
const hash = cryptoo.createHmac('sha256', secret).update('I love you').digest('hex');

console.log(hash)