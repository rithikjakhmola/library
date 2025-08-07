const collectionOfBooks = [];
const bookCollection = document.querySelector("#bookCollection");
function books(name, author, pages, readStatus) {
  if (!new.target) {
    throw Error("enter the new keyword to create object");
  }
  this.name = name;
  this.pages = pages;
  this.author = author;
  this.readStatus = readStatus;
}
const form = document.querySelector("#library-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const bookName = document.querySelector("#bookName").value;
  const authorName = document.querySelector("#authorName").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector('input[name="read"]:checked')?.value;
  const book = new books(bookName, authorName, pages, read);
  collectionOfBooks.push(book);

  // showing the element in the library
  const element = document.createElement("div");
  element.classList.add("newElement");
  const nameOfBook = document.createElement("div");
  nameOfBook.textContent = `Book's Name : ${book.name}`;
  element.appendChild(nameOfBook);
  const nameOfAuthor = document.createElement("div");
  nameOfAuthor.textContent = `Author's Name : ${book.author}`;
  element.appendChild(nameOfAuthor);
  const numberOfPages = document.createElement("div");
  numberOfPages.textContent = `Pages : ${book.pages}`;
  element.appendChild(numberOfPages);
  const reading = document.createElement("div");
  let coloring = false;
  if (book.readStatus == "yes") {
    reading.textContent = "Done Reading";
    reading.setAttribute(
      "style",
      "background-color: green; width: 200px; border: 2px solid black; margin: 0px auto; "
    );

    coloring = true;
  } else {
    reading.textContent = "Not Done Reading";
    reading.setAttribute(
      "style",
      "background-color: red; width: 200px; border: 2px solid black; margin: 0px auto; "
    );
    coloring = false;
  }
  element.appendChild(reading);
  if (coloring === true) {
    element.classList.add("newBook");
  } else {
    element.classList.add("unreadBook");
  }
  bookCollection.appendChild(element);
  document.querySelector("#library-form").reset();
});
