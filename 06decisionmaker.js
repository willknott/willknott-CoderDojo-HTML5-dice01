arrt = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Signs point to yes", "Yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

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
		document.write('<div id="divnum'+ i +'">' + roll(arrt) + '!</div>');
	}
		else if (i == 2){
		document.write('<div id="divnum'+ i +'">Coder Dojo</div>');
	}
		else {
		document.write('<div id="divnum'+ i +'"> </div>');
	}

};
