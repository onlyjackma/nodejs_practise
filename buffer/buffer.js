var buf1 = new Buffer('ABC');
var buf2 = new Buffer('ABCD');

var result = buf1.compare(buf2);

if(result < 0){
	console.log(buf1+' is before '+buf2);
}else if(result ==0 ){
	console.log(buf1+' is equal '+buf2);
}else{
	console.log(buf1+' is after '+buf2);
}

var buf3 = new Buffer('ABC');
var buf4 = new Buffer(3);
buf3.copy(buf4);
console.log('buffer4 content: '+buf4);

var buf5 = new Buffer('runoob');
var buf6 = buf5.slice(0,2);

console.log('buf6 content is :'+buf6.toString())
console.log('buf5 length is :'+buf5.length)
