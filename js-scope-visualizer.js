var code = `"use strict";

for (let i = 0; i < 10; i++) {
	console.log(i);
}

var soStupidlyLongNameVar = 1;
var evenMoreStupidlyLongNameVarWhichWillOverlapBothSidesHopefully = 0;

function fn(arg) {
  	var h = soStupidlyLongNameVar + soStupidlyLongNameVar + evenMoreStupidlyLongNameVarWhichWillOverlapBothSidesHopefully + soStupidlyLongNameVar;
  	return;
}

function foo() {
	function bar() {
  	var data = [1, 2, 3];
		return function baz(arg1, arg2, arg3) {
			console.log('Nesting is fun!');
      
			if (data) {
				return data;
			}

			func();
		};
	};
  
  var a = 5;
  
	function f(a) {
		console.log(a);
  	}
  
  f(soStupidlyLongNameVar);
}

(function() {
	return [1, 2, 3].forEach(function(element, index) {
		console.log(element - 1);
	});
})();

var func = () => {
  	var x;
  	let y;
  	const z = undefined;
};

var count = 3;

if (count == 3) {
	count--;
  	let noCount = count;
} else {
	count++;
}

console.log(count);`;

