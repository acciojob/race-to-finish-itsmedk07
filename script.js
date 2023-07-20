window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const prom=new promise((resolve,reject)=>{
	console.log(resolve("hiiii"))
})
promise.any(prom)
