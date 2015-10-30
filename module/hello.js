function Hello(){
	var name;
	this.setName = function(pname){
		name = pname;
	}

	this.sayHello = function(){
		console.log('Hello '+name);
	}
}

module.exports = Hello;
