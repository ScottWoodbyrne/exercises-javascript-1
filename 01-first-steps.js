
/*Integer Numbers Range*/
/*Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1*/

function Range(x1, x2) {
	if(x2 < x1){
		return -1;
	}
  	else {
  		var result=[]
  		for (var i=x1; i<x2; i++) {
  			result.push(i);
  		}
	}
	return result;	
}
 

/*Multiplications table*/
/*Write a function that writes in the console the multiplication table (from 1 to 10)*/

function MultiplyByTen(){
	var result="";

	for(var i=1; i<=10;i++){
		for(var j=1; j<=10;j++){
			result += i*j + " ";
		}
		result += "\n";
	}
	console.log(result);
}

/*Multiplications table on demand*/
/*Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter*/

function MultiplyByTen(number){
	for(var i=number; i<=(number*10);i+=number){
		console.log(i);
	}
}

/*Calculation*/
/*Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them*/

function MultiplesOf23(){
	for(var i=0; i<500; i++){
		if(i%23==0){
			console.log(i);
		}
	}
}

/*max() function*/
/*Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.*/

function Max(x,y){
	return (x>y) ? x : y;
}

/*maxOfThree() function*/
/*Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.*/

function maxOfThree(x,y,z){
	return (Max(x,y)<z) ?  z : Max(x,y);
}

/*isVowel() function*/
/*Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/

function isVowel(char){
	return ("aeiou".indexOf(char)==0)?true:false;
}

/*Hexadecimal*/
/*Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code*/

/*
>>> var a = getRGB ('#00FF00');
>>> a;
“rgb(0,255,0)”;
*/

function getHexValue(hex){
	return parseInt(hex,16);
}

function getRGB(hex){
	return "rgb(" + getHexValue(hex[1]+hex[2]) +"," 
				  + getHexValue(hex[3]+hex[4]) +","
				  + getHexValue(hex[5]+hex[6]) +") ";
}

/*Hexadecimal enhanced*/
/*
Improves the previous function so besides the conversion also identifies some basic colors:

Black: #000000
White: #FFFFFF
Red: #FF0000
Green: #00FF00
Blue: #0000FF

So the result can be (for these cases):

>>> var a = getRGB ('#00FF00'); 
>>> a;
“rgb(0,255,0)   verde”;
*/




















