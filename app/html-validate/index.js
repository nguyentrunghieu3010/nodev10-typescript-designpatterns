var validator = require('html-validator');
var fs = require('fs');
var options = {
    format: 'text'
};
// const filename = '/Users/HieuNT48/projects/github/node_training/app/html-validate/invalid.html';
var filename = '/Users/HieuNT48/projects/github/node_training/app/html-validate/valid.html';
fs.readFile(filename, 'utf8', function (err, html) {
    if (err)
        throw err;
    options.data = html;
    validator(options).then(function (data) {
        console.log('Html is Validate Success', data);
    })["catch"](function (err) {
        console.log('Html is InValidate Failed', err);
    });
});
