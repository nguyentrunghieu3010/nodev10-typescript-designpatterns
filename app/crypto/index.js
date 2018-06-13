var cryptoo = require('crypto');
var secret = 'nguyentrunghieu';

const hashPassword = (passString, secret) => {
    return cryptoo.createHmac('sha256', secret).update(passString).digest('hex');
};

const passwordHash = hashPassword(secret, )