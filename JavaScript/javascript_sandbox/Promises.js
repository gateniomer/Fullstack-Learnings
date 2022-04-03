//Promises are just a different way to handle callback functions

//Callback version

// function callbackTest(num,callback,errorCallback){
//   if(num==2){
//     callback(`Success: ${num}`)
//   }else if(num<0){
//     errorCallback({
//       error: "Negative Number",
//       msg: "Negative number, please choose higher number then 0"
//     })
//   }
//   else{
//     errorCallback({
//       error: "Wrong Number",
//       msg: "Wrong number, please try again"
//     })
//   }
// }

// callbackTest(2
//   ,msg => console.log(msg)
// ,msg => console.log(`[${msg.error}] ${msg.msg}`))


//Promises Version
function promisesTest(num){
  return new Promise((resolve,reject) =>{
    if(num==2){
      resolve(`Success: ${num}`)
    }else if(num<0){
      reject({
        error: "Negative Number",
        msg: "Negative number, please choose higher number then 0"
      })
    }
    else{
      reject({
        error: "Wrong Number",
        msg: "Wrong number, please try again"
      })
    }
  })
  
}

promisesTest(-1).then(msg => console.log(msg)).catch(msg => console.log(`[${msg.error}] ${msg.msg}`)
);