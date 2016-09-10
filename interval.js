function myOriginalFunction(){
	console.log('hello');
}
myOriginalFunction();

function invokedFunction(callback){
	var X = setInterval(function(){
		callback();
	}, 4000);
}
invokedFunction(myOriginalFunction);
invokedFunction(function(){console.log('world')});
console.log('*****');

// CallBacks Concept--1
var ninja = "Teju";
setTimeout( function(){console.log(ninja+ ' is here');}, 2000); //after 2sec this is displayed and timeouts
console.log(ninja); //First this is displayed

// CallBacks Concept--2
console.log('Now: ');
console.log("Declaring and assigning variable 'ninja' + ");
var ninja = 'Teju';
setTimeout(function myCallbackFunction(){
	console.log("Later: ")
	console.log(ninja, "LATER"); }, 2000
);
console.log("Printing Ninja Value.");
console.log(ninja, "NOW");
console.log('*****');

// General Concept of CallBacks
function test(a,b){
	a();
	b();
}

function a(){
	console.log('a');
}
function b(){
	console.log('b');
}
test(a,b)
console.log('*****');

// Functions 
var activity = function (){console.log('hello')};
activity();

var activity2 = function hi(){console.log('hello')} 
activity2();
console.log('*****');



