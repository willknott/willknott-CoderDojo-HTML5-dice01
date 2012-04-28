//Roll a 6 sided dice 6 times

// arr has 6 items
var arr = 6;
// set up the dice
var dice;

// Math.random() returns a number between 1 and 0
// multiply it by 6 to return a value
// Math.floor it to make it a whole number
dice = Math.floor(Math.random()*arr)+1;
// Add one as you can't get 1*6, but you can get 0*6

// And print it
document.write('<div id="divnum0"><img src="' + dice + '.png" /></div>');
dice = Math.floor(Math.random()*arr)+1;
document.write('<div id="divnum1"><img src="' + dice + '.png" /></div>');

