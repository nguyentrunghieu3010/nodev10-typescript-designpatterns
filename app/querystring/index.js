var query_string = require('querystring');
query_string.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
console.log(query_string);
query_string.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
console.log(query_string);
