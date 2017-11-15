const fs = require('fs');
const filename = '/Users/HieuNT48/projects/github/node_training/app/05-read/sample.csv';
let buf = null;

try {

    buf = fs.readFileSync(filename, 'utf8');
    const buffStr = buf.toString();
    const lineArr = buffStr.split('\n');

    console.log(lineArr);

} catch (e) {
    console.log(e);
}