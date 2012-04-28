var arr = 6;

//roll a dice with arr sides
var roll = function (arr) {
		dice = Math.floor(Math.random()*arr)+1;
		return(dice);
	};
	
	
//Instead of calling almost the same line 6 times, loop it and recreate it
for (i=0; i<arr; i++){
	document.write('<div id="divnum'+ i +'">Hello World ' + roll(arr) + '!</div>');
};
