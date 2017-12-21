const cluster = require('cluster');
const http = require('http');
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//     console.log(`Master ${ process.pid} is running`);

//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork();
//     }

//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`worker ${ worker.process.pid} died`);
//     });
// } else {
//     http.createServer((req, res) => {
//         res.writeHead(200);
//         res.end('Hello world');
//     }).listen(8000);

//     console.log(`Worker ${process.pid} started`);
// }

if (cluster.isMaster) {
    let numReqs = 0;
    setInterval(() => {
        console.log(`Num Reqs = ${numReqs}`);
    }, 1000);

    function messageHandler(msg) {
        if (msg.cmd && msg.cmd === 'notifyRequest') {
            numReqs += 1;
        }
    }

    const numCPUs = require('os').cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    for (const id in cluster.workers) {
        cluster.workers[id].on('message', messageHandler);
    }
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}