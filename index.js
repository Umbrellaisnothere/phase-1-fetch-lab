// To pass the tests, don't forget to return your fetch!
function fetchBooks() {
  
  // We make a fetch request 
  return fetch("https://anapioficeandfire.com/api/books")
  .then((res) => res.json())
  .then ((data) => {

    renderBooks(data);
  })
}
function renderBooks(booksData) {
const bookTitles = booksData.map((book) => book.name);
console.log("List of Book Titles:", bookTitles);
}
document.addEventListener('DOMContentLoaded', function() {
fetchBooks();
});