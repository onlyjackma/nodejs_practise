function User(){
	var name;
	var id;
	this.setId = function(pid){
		id = pid;
	}
	this.getId = function(){
		return id;
	}
}

module.exports = User;
