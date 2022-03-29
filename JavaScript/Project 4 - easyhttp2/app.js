const http = new easyHTTP2();

// //GET
http.get('https://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data))
.catch(error => console.log(error));

const data = {
  name: 'omer'
}
// //POST
http.post('https://jsonplaceholder.typicode.com/users',data)
.then(data => console.log(data))
.catch(error => console.log(error));;

// //PUT
http.put('https://jsonplaceholder.typicode.com/users/1',data)
.then(data => console.log(data))
.catch(error => console.log(error))

// //DELETE
http.delete('https://jsonplaceholder.typicode.com/users/145363456')
.then(data => console.log(data))
.catch(error => console.log(error))