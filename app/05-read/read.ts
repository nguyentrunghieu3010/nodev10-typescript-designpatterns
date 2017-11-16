import {error} from "util";

const fs = require('fs');
const filename = '/Users/HieuNT48/projects/github/node_training/app/05-read/sample.csv';

function readFileAsStream() {
    try {
        let streamData = fs.createReadStream(filename);
        let rowData = '';
        streamData.on('data', (data) => {
            rowData += data;
            console.log(rowData.split('\n'));
        });
    } catch (e) {
        console.log(e);
    }
}

function readFileSync(filename) {
    try {
        let data = fs.readFileSync(filename, 'utf8');

        console.log(data.toString().split('\n').length-1);

    } catch (e) {
        console.log()
    }
}

exports.readFileAsStream = readFileAsStream();

exports.readFileSync = filename => readFileSync(filename);