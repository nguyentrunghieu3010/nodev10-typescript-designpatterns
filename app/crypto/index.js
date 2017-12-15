var cryptoo = require('crypto');
var secret = 'nguyentrunghieu';
var hash = cryptoo.createHmac('sha256', secret).update('I love you').digest('hex');
console.log(hash);
