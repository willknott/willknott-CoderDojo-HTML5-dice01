var arrt = ["one", "two", "three", "four", "five", "six"];
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
	document.write('<div id="divnum'+ i +'">Hello World ' + roll(arrt) + '!</div>');
};
