/*var example = new Promise((resolve)=>resolve('foo'));

example.then((msg)=>console.log(msg));

var example1 = (a,b) => {
    return new Promise((resolve,reject)=>{
        if(a>b){
        resolve('resolved');
        } else {
            reject('not resolved');
        }
    });
}

example1(1,2)
        .then((msg)=>console.log(msg))
        .catch((msg)=>console.log(msg));
*/
/*function getData (method,url) {
    return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = () => {
            debugger;
            if(xhr.status >= 200 && xhr.status <300 ){
                resolve(xhr.response);
            } else {
                reject({
                    status:xhr.status,
                    statusText:xhr.statusText
                });
            }
        }
        xhr.onerror = () =>{
            reject({
                status:xhr.status,
                statusText:xhr.statusText
            });
        }
        xhr.send();
    })
}

getData('GET','https://jsonplaceholder.typicode.com/todos').then((data)=>{console.log(data)})
            .catch((err)=>console.log(err));*/

/*var example = new Promise(function(resolve){ resolve('foo')});

example.then(function(msg){alert(msg)});*/

/*var example1 = function(a,b){
	return new Promise(function(resolve,reject){
		if(a<b){
			resolve(a+' is smaller than '+b);
		} else {
			reject(a+' is not smaller than '+b);
		}
	})
}

example1(3,2).then(function(msg){
	console.log(msg);
}).catch(function(msg){
	console.log(msg);
});*/
