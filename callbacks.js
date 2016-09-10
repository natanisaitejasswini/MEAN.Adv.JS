// ability to pass a function as an argument into another function
// var a = 2;
// var b = function(){console.log("something");};
// function doSomething(x){
// 	console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);

function doSomething(possibleCallback) {    // Here possibleCallback will be the argument that we pass to the function dosmething
  if (typeof(possibleCallback) === 'function'){
    console.log('possibleCallback is a callback!');
    possibleCallback(); //we can invoke the callback!
  }
  else {
    console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
  }
}
doSomething(function myCallback(){ console.log('yes, I am a callback!') });
doSomething('string');

// Make pasta without passing sauce argument
function makePasta(pasta, makeSauce) {
  console.log("Boiling water");
  console.log("Putting " + pasta + " pasta in the water");
  console.log("Pasta is done!");
  return pasta + " Pasta! Voila!";
}
makePasta("Penne");
console.log(makePasta("Farfalle"));
console.log("##############");

// With passing sauce argument as a function
function makePasta1(pasta, makeSauce) {
	console.log("Boiling water");
	console.log("putting " + pasta + " pasta in water");
	var sauce = makeSauce();
	console.log("Mixing Sauce");
	console.log("pasta is done");
	return pasta + " pasta with " + sauce + " sauce Voila!";
}
function Alfredo(){
	console.log("Making Alfredo");
	return "alfredo";
}
function Pesto(){
	console.log("Making Pesto");
	return "Pesto";
}
console.log(makePasta1("penne", Alfredo));
console.log("*********")
console.log(makePasta1("Farfalle", Pesto));

// 


