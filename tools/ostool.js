var os = require('os');

console.log("enddianness :"+os.endianness());
console.log("type :"+os.type());
console.log("platform :"+os.platform());
console.log("totalmem :"+os.totalmem()+" bytes");
console.log("totalmem :"+os.freemem() +" bytes");
