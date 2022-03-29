const http = new easyHTTP2();

console.log(http.get('https://jsonplaceholder.typicode.com/users'));

http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(error => console.log(error));

http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(error => console.log(error));
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(error => console.log(error));
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(error => console.log(error));

