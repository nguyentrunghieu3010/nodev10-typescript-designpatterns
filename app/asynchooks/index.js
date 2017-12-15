var async_hooks = require('async_hooks');
var eid = async_hooks.executionAsyncId();
var tid = async_hooks.triggerAsyncId();
var asyncHooks = async_hooks.createHook({ init: init });
asyncHooks.enable();
http.createServer(function (req, res) {
    res.end('Hello worlds');
}).listen(8079);
asyncHooks.disable();
function init(asyncId, type, triggerAsyncId, resource) {
}
