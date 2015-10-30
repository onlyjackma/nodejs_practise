var User = require('./user')

var user = new User();

user.setId(4);

var id = user.getId();

console.log(id);

function tt(){
	return 12;
}
console.log(tt());
