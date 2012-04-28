// arr has 6 items
var arr = 6;

//roll a dice with arr sides
var roll = function (arr) {
		dice = Math.floor(Math.random()*arr)+1;
		return(dice);
	};
	

// And print it
document.write('<div id="divnum0">Hello World ' + roll(arr) + '!</div>');
document.write('<div id="divnum1">Hello World ' + roll(arr) + '!</div>');
document.write('<div id="divnum2">Hello World ' + roll(arr) + '!</div>');
document.write('<div id="divnum3">Hello World ' + roll(arr) + '!</div>');
document.write('<div id="divnum4">Hello World ' + roll(arr) + '!</div>');
document.write('<div id="divnum5">Hello World ' + roll(arr) + '!</div>');