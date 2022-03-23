function Book(title,author,isbn){
  this.title=title;
  this.author=author;
  this.isbn=isbn;
}

function UI() {}

UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  
  const row = document.createElement('tr');

  row.innerHTML=`
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a class = 'delete' >X</a></td>
  `;
  
  list.appendChild(row);
};

UI.prototype.showAlert = function(msg,className){
  const div = document.createElement('div');
  div.className=`alert ${className}`;
  div.appendChild(document.createTextNode(msg));
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div,form);

  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000);
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value='';
  document.getElementById('author').value='';
  document.getElementById('isbn').value='';
};

UI.prototype.deleteBook = function(target){
  if(target.classList.contains('delete')){
    target.parentElement.parentElement.remove();
    return true;
  }
  return false;
};

// EventListeners
document.getElementById('book-form').addEventListener('submit',function(e){
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  //Instantiate Book
  const book = new Book(title,author,isbn);

  //Instantiate UI and add book to it
  const ui = new UI();

  // Validate
  if(title==='' || author==='' || isbn===''){
    ui.showAlert('Please feel in all fields','error');
  }else{
    ui.addBookToList(book);

    ui.showAlert('Book Added','success');
    ui.clearFields();
  }
  

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click',function(e){
  const ui = new UI();
  if(ui.deleteBook(e.target)){
    ui.showAlert('Book Deleted','success');
  };
});