arrt1=["artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered", "clouted", "craven", "currish", "dankish", "dissembling", "droning", "errant", "fawning", "fobbing", "froward", "frothy", "gleeking", "goatish", "gorbellied", "impertinent", "infectious", "jarring", "loggerheaded", "lumpish",  "mammering", "mangled", "mewling", "paunchy", "pribbling", "puking", "puny", "weedy", "qualling", "rank", "reeky", "roguish", "ruttish", "saucy", "spleeny", "spongy", "surly", "tottering", "unmuzzled", "vain", "venomed", "villainous", "warped", "wayward", "yeasty"]; 
        
		
		
arrt2 = ["base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained", "clapper-clawed",  "clay-brained", "common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned", "fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born", "full-gorged", "guts-griping", "half-faced", "hasty-witted", "horn-beast", "hedge-born", "hell-hated", "idle-headed", "ill-breeding", "ill-nurtured", "maggot-pie", "knotty-pated", "milk-livered", "unchin-snouted", "motley-minded", "onion-eyed", "plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn", "rude-growing", "rump-fed", "shard-borne", "sheep-biting", "spur-galled", "swag-bellied", "tardy-gaited", "tickle-brained", "toad-spotted", "weather-bitten"];

arrt3 = ["apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blossom", "clack-dish", "clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench", "flirt-gill", "foot-licker", "fustilarian", "giglet", "gudgeon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "joithead", "lewdster", "lout", "maggot-pie", "malt-worm", "mammet", "whey-face", "measle", "minnow", "miscreant", "moldwarp", "mumble-news", "nut-hook", "pigeon-egg", "pignut", "puttock", "pumpion", "ratsbane", "scut", "skainsmate", "strumpet", "varlot", "vassal", "wagtail"];

var arr = 6;

//roll a dice with arr sides
var roll = function (listofwords) {
		//why are we no longer adding the one?
		dice = Math.floor(Math.random()*listofwords.length); 
		//return the word at position ...
		return(listofwords[dice]);
	};

//Instead of calling almost the same line 6 times, loop it and recreate it
for (i=0; i<arr; i++){
	if (i == arr-1){
		document.write('<div id="divnum'+ i +'"> ' + roll(arrt3) + '!</div>');
	}
	else if (i == arr-2){
		document.write('<div id="divnum'+ i +'"> ' + roll(arrt2) + ' </div>');
	}
	else if (i == arr-3){
		document.write('<div id="divnum'+ i +'"> ' + roll(arrt1) + ' </div>');
	}
	else if (i == (arr-4)){
		document.write('<div id="divnum'+ i +'"> Thou art a </div>');
	}
	else if (i == 1){
		document.write('<div id="divnum'+ i +'">Coder Dojo</div>');
	}
	else {
		document.write('<div id="divnum'+ i +'"> </div>');
	}

};
