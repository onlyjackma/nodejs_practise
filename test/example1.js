var fs = require('fs');

fs.readFile('treasure-chamber-report.txt', function(err,report) {
  console.log("oh, look at all my money: "+report);
});

fs.writeFile('letter-to-princess.txt', '...', function() {
  console.log("can't wait to hear back from her!");
});
