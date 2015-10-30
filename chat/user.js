function User(){
	var name;
	var id;
	var sock;

	this.setId = function(pid){
		id = pid;
	}
	this.getId = function(){
		return id;
	}
	this.setName = function(pname){
		name = pname;
	}
	this.getName = function(){
		return name;
	}

	this.setSocket = function(psock){
		sock = psock;
	}
	this.getSocket = function(){
		return sock;
	}
}

module.exports = User;
