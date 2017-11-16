"use strict";
exports.__esModule = true;
var fs = require('fs');
var filename = '/Users/HieuNT48/projects/github/node_training/app/05-read/sample.csv';
function readFileAsStream() {
    try {
        var streamData = fs.createReadStream(filename);
        var rowData_1 = '';
        streamData.on('data', function (data) {
            rowData_1 += data;
            console.log(rowData_1.split('\n'));
        });
    }
    catch (e) {
        console.log(e);
    }
}
function readFileSync(filename) {
    try {
        var data = fs.readFileSync(filename, 'utf8');
        console.log(data.toString().split('\n').length - 1);
    }
    catch (e) {
        console.log();
    }
}
exports.readFileAsStream = readFileAsStream();
exports.readFileSync = function (filename) { return readFileSync(filename); };
