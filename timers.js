//setTimeout(function (){console.log('Triggered');},4000);
var counter = 0;
var intervalId = setInterval(function (){
	counter += 1;
	console.log(counter);
	if (counter > 5){
		clearInterval(intervalId);
	}
	},4000);