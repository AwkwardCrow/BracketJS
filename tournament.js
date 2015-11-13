function Tournament(location, tourneyDate, name){
	this.location = location;
	this.tourneyDate = tourneyDate;
	this.name = name;
}

Tournament.prototype = {
	startTournament : function(){
		alert("starting "+this.name+" on "+this.tourneyDate+" at "+this.location);
	}.
	finishTournament : function(){
		alert("starting "+this.name+" on "+this.tourneyDate+" at "+this.location);
	}
}

var tournament = new Tournament("My Place", "today", "Super Awesome tourney go");
tournament.startTournament();
tournament.finishTournament();