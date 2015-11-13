function Player(name, handle, city, state, zip, email){
	this.name = name;
	this.handle = handle;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.email = email;
}

Player.prototype = {
	setSeed : function(seed){
		this.seed = seed;
	},
	getSeed : function(){
		return this.seed;
	},
	addWin : function(){
		this.wins = this.wins++ || 0;
		alert(this.name+" has "+this.wins+" wins");
		return this.wins;
	}
	addLoss : function(){
		this.losses = this.losses++ || 0;
		alert(this.name+" has "+this.losses+" losses");
		return this.losses;
	}
};

var player = new Player("John Baker", "Baker", "Oakland", "California", "94610", "mtgbeast@gmail.com");
player.addWin();
player.addLoss();