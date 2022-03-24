const http = new easyHTTP;

document.querySelector('#btn-get').addEventListener('click',function(){
  // Get Posts
  http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    document.querySelector('.content').innerText=posts;
  }
});
});

document.querySelector('#btn-get-single').addEventListener('click',function(){
  // Get Single Post
  http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
  if(err) {
    console.log(err);
  } else {
    document.querySelector('.content').innerText=post;
  }
});
});

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

document.querySelector('#btn-post').addEventListener('click',function(){
  // Create Post
  http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if(err) {
    console.log(err);
  } else {
    document.querySelector('.content').innerText=post;
  }
});
});

document.querySelector('#btn-put').addEventListener('click',function(){
  // Update Post
  http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
  if(err) {
    console.log(err);
  } else {
    document.querySelector('.content').innerText=post;
  }
});
});


document.querySelector('#btn-delete').addEventListener('click',function(){
  // Delete Post
  http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    document.querySelector('.content').innerText=response;
  }
});
});