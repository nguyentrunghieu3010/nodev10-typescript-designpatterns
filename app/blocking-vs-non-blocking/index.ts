const fs = require('fs');
const fileName = '../blocking-vs-non-blocking/sample.csv';

function readFileSynchronous() {
    console.log('readFileSynchronous', filename);
    const data = fs.readFileSynchronous(filename);

    console.log('Reading files: ', data);
}

function readFile() {
    fs.readFile(filename, (err, data) => {
        if (err)
            throw err;
    });
}

function dangerBlocking() {
    fs.readFile(filename, (err, data) => {
        if (err)
            throw err;
        console.log(data);
    });

    fs.unlinkSync(filename);
}

function NonBlocking() {
    fs.readFile(filename, (err, data) => {
        if (err)
            throw err;
        console.log(data);
        fs.unlink(filename, (unlinkErr) => {
            if (unlinkErr)
                throw unlinkErr;
        });
    });
}

exports.readFileSynchronous = readFileSynchronous();
exports.readFile = readFile();