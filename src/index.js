import './index.css';

const bookTitle = document.querySelector('.book-name');
const authorName = document.querySelector('.author-name');
const bookDiv = document.querySelector('.book-list');
const myForm = document.querySelector('.myForm');

const getStorage = () => {
  let books;
  if (localStorage.getItem('bookList') === null) {
    books = [];
    return books;
  }
  books = JSON.parse(localStorage.getItem('bookList'));
  return books;
};

const myBooks = getStorage();

const addBook = (title, author) => {
  myBooks.push({ title, author });
  localStorage.setItem('bookList', JSON.stringify(myBooks));
};

// addBook('time', 'distance');

myForm.onsubmit = () => {
  addBook(bookTitle.value, authorName.value);
  bookTitle.value = '';
  authorName.value = '';
};

const deleteBook = (id) => {
  let books = myBooks;
  const itemToDelete = books[id];
  books = books.filter((item) => item !== itemToDelete);
};

const displayBooks = (e, ...myBooks) => {
  const listContainer = document.createElement('li');
  listContainer.classList.add('list-element');
  const listTitle = document.createElement('span');
  listTitle.classList.add('class-title');
  listTitle.textContent = `${e.title} by:`;
  const listAuthor = document.createElement('span');
  listAuthor.classList.add('class-author');
  listAuthor.textContent = `${e.author}`;
  const deleteBtn = document.createElement('delete');
  deleteBtn.classList.add('class-delete');
  deleteBtn.textContent = 'Delete';

  listContainer.append(listTitle, listAuthor, deleteBtn);
  bookDiv.appendChild(listContainer);

  deleteBtn.addEventListener('click', (button) => {
    bookDiv.removeChild(listContainer);
    const { id } = button;
    deleteBook(id);
    localStorage.setItem('bookList', JSON.stringify(myBooks));
  });
};

window.onload = myBooks.forEach(displayBooks);
