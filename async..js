function getStuffFromDatabase(callback){
	var data;
	var timer = setInterval(function(){
		if(typeof(callback) == 'function'){
			data = [{name: 'Teju'},{name: 'Poky'}];
		callback(data);
		}
	}, 10000);
	return data;
}
function requestFromDataBase(){
	var data = getStuffFromDatabase(function mycallback(data){
		console.log(data, "ASynchronous");
    	for (var i = 0; i < data.length; i ++){
      		console.log(data[i].name);
    	}
	});
	console.log(data, "Synchronous");
}
function catchFly(){
	 console.log('I just caught a fly!');
}
requestFromDataBase();
console.log('Hello');
catchFly();
console.log('**********')

// 
function getStuffFromDatabase(resolve,reject){
    var data = "whee"
    setTimeout(function(){
      // if (typeof(callback) == 'function'){
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        resolve(data);
      // }
    }, 1000);
    //reject(); comment this line in and out!
    // return data;
}


function requestDataFromDatabase(){
  console.log('running');
  //creates promise
  var data = new Promise(function(resolve,reject){
    getStuffFromDatabase(resolve,reject); // kind of like a shiny callback
  });
  // if promise is successful (keeps me from putting all the logic in the callback)
  data.then(function(data){
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log(data[i].name);
    }
  });
  data.catch(function(){
    console.log('failure');
  })
  console.log('end');
}

requestDataFromDatabase();
