const bookslist = document.getElementsByClassName('books-list');
const searchBar = document.getElementsByClassName('search-input');
let Books = [];

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredBooks = Books.filter((book) => {
    return book.name.toLowerCase().includes(searchString);
  });
  displayBooks(filteredBooks);
});
