var path = require('path');
console.log('nomailiztion :' + path.normalize('/tmp/tt//ta'));
console.log('join path :'+ path.join('/test','ttt','fsadfa/ff'));
console.log('path resolve :'+ path.resolve('pathtool.js'));
console.log('path extname :'+ path.extname('pathtool.js'));
