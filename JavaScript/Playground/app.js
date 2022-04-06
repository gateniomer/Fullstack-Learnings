//Example 1

// function makeRequest(location){
//   return new Promise(function(resolve,reject){
//     console.log(`Making Request to ${location}`);
//     if(location === 'Google'){
//       resolve('Resolved');
//     }else{
//       reject('Rejected');
//     }
//   });
// }

// function processRequest(response) {
//   return new Promise(function(resolve,reject){
//     console.log('Proccesing Request');
//     resolve(response);
//   });
// }

// // makeRequest('Google')
// // .then(function(msg){
// //   console.log('Success!: ' + msg);
// //   return processRequest(msg);
// // })
// // .then(function(msg){
// //   console.log('Procceced!: ' + msg);
// // })
// // .catch(function(msg){
// //   console.log('Failed: ' + msg);
// // });

// async function doWork(){
//   try{
//     const response = await makeRequest('Google');
//     console.log('Success!: ' + response);
//     const proccess = await processRequest(response);
//     console.log('Procceced!: ' + proccess);
//   } catch(err){
//     console.log(err);
//   }
  
// }

// doWork();

//Example 2

//https://javascript.info/async-await

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();

// The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.

// Let’s emphasize: await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

// It’s just a more elegant syntax of getting the promise result than promise.then. And, it’s easier to read and write.