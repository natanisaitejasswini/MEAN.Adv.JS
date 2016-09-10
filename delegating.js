 // If Coding Dojo needed a bootcamp leader to lead a new Java Android class, the company wouldn’t just grab anyone. 
 // It rather would delegate a bootcamp leader who knows Java Android.
 function leadBootcamp(language,leader){
 	var outcome = leader(language);
 	console.log(outcome);
 }
 // Define leaders
function Mike(language){
	var languages= {
		'javascript': "Successful leader",
		'PHP': "Successful leader",
		'Python': "Successful leader",
		'Ruby': "Successful leader",
	}
	if(languages[language]){
		return languages[language];
	}
	else{
		return "may be not Mike";
	}
}
function Charlie(language){
	var languages= {
		'javascript': "Successful leader",
		'PHP': "Successful leader",
		'Python': "Successful leade",
		'Ruby': "Successful leader",
	}
	if(languages[language]){
		console.log(languages);
		return languages[language];
	}
	else{
		return "may be not";
	}
}
leadBootcamp('Ruby', Mike);
console.log('@@@@@@@@@@@@@')
// we cannot pass undefined instructor name as second argument in mainfunction

// Second Example of callbacks
function printResult(dosomething){
	var result = dosomething();
	console.log(result);
}
printResult(function returnFive(){return (5)})
printResult(function (){return (5)}) // still works without fn name

// Second approach
function printResult(dosomething){
	var result = dosomething();
	console.log(result);
}
function PrintFive(){
	return (5);
}
printResult(PrintFive)
console.log('@@@@@@@@@@@@@')

//  Underscore method
function each(arr, callback){
	for(var i =0 ; i < arr.length; i++){
		callback(arr[i]); // Invoking callback many times 
	}
}
// call the each function
each([1,2,3], function(num) { console.log(num + "I am from the callback"); })



