const validator = require('html-validator');
const fs = require('fs');
let options = {
    format: 'text'
};

// const filename = '/Users/HieuNT48/projects/github/node_training/app/html-validate/invalid.html';
const filename = '/Users/HieuNT48/projects/github/node_training/app/html-validate/valid.html';

fs.readFile(filename, 'utf8', (err, html) => {
    if (err)
        throw err;

    options.data = html;

    validator(options).then((data) => {
        console.log('Html is Validate Success', data);
    }).catch((err) => {
        console.log('Html is InValidate Failed', err);
    });

});