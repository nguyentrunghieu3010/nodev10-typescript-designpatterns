const async_hooks = require('async_hooks');
const eid = async_hooks.executionAsyncId();
const tid = async_hooks.triggerAsyncId();

const asyncHooks = async_hooks.createHook({init});

asyncHooks.enable();

http.createServer((req, res) => {
    res.end('Hello worlds');
}).listen(8079);

asyncHooks.disable();

function init(asyncId, type, triggerAsyncId, resource) {
}
