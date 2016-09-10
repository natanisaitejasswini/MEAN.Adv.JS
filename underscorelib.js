var _ = {
	map: function(arr,callback){
		var newarr = [];
		for(var i in arr){
			newarr.push(callback(arr[i]));
		}
		return newarr;
	},
	reduce: function(arr,callback,memo){
		for(var x in arr){
			memo = callback(memo,arr[x]);
		}

		return memo;
	},
	find: function(arr,callback){
		for(var x in arr){
			if(callback(arr[x])){
				return arr[x];
			}
		}
	},
	filter: function(arr,callback){
		var newarr = [];
		for(var i in arr){
			if(callback(arr[i])){
				newarr.push(arr[i]); // if we push callback(arr[i]) it gives true,true instead of 2,4
			}
		}
		return newarr;
	},
	reject: function(arr, callback){
		var newarr = [];
		for(var i in arr){
			if(!callback(arr[i])){
				newarr.push(arr[i]); // if we push callback(arr[i]) it gives false,false instead of 2,4
			}
		}
		return newarr;
	}
}


sample_arr = [1,2,3,4];
var newmap = _.map(sample_arr, function(num){return num * 3;});
console.log("map",newmap);

var newreduce = _.reduce(sample_arr, function(memo, num){return memo + num;},0);
console.log("reduce",newreduce);

var newfind = _.find(sample_arr, function(num){return num == 4;});
console.log("find",newfind);

var newfilter = _.filter(sample_arr, function(num){return num%2 == 0;});
console.log("filter",newfilter);

var newreject = _.reject(sample_arr, function(num){return num%2 == 0;});
console.log("reject",newreject);



