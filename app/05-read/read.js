var fs = require('fs');
var filename = '/Users/HieuNT48/projects/github/node_training/app/05-read/sample.csv';
var buf = null;
try {
    buf = fs.readFileSync(filename, 'utf8');
    var buffStr = buf.toString();
    var lineArr = buffStr.split('\n');
    console.log(lineArr);
}
catch (e) {
    console.log(e);
}
