// collectionOfBooks => Array of Book. The core idea is whenever user deletes the book we just remove that element
const collectionOfBooks = [];

// the node in which I will place my book and delete button container
const bookCollection = document.querySelector("#bookCollection");

// the books object (constructor function)
function Book(name, author, pages, readStatus) {
  if (!new.target) {
    throw Error("Enter the new keyword to create object");
  }
  this.name = name;
  this.pages = pages;
  this.author = author;
  this.readStatus = readStatus;
}

// function to create and place the element
function elementCreation(book) {
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
      "background-color: green; width: 200px; border: 2px solid black; margin: 0px auto; border-radius: 5px;"
    );
    coloring = true;
  } else {
    reading.textContent = "Not Done Reading";
    reading.setAttribute(
      "style",
      "background-color: red; width: 200px; border: 2px solid black; margin: 0px auto; border-radius: 5px;"
    );
    coloring = false;
  }

  element.appendChild(reading);

  if (coloring === true) {
    element.classList.add("newBook");
  } else {
    element.classList.add("unreadBook");
  }

  document.querySelector("#library-form").reset();

  // largestContainer that will keep both delete element and the book
  const largestContainer = document.createElement("div");
  const deletebutton = document.createElement("button");

  largestContainer.classList.add("largestContainer");
  deletebutton.classList.add("deletebutton");
  deletebutton.textContent = "delete";

  largestContainer.appendChild(element);
  largestContainer.appendChild(deletebutton);
  bookCollection.appendChild(largestContainer);

  // delete functionality (optimized)
  deletebutton.addEventListener("click", (e) => {
    let index = collectionOfBooks.indexOf(book);
    if (index !== -1) {
      collectionOfBooks.splice(index, 1);
    }
    // Remove the specific container instead of rebuilding everything
    largestContainer.remove();
  });
}

// taking the input of form
const form = document.querySelector("#library-form");

// when submit button is clicked
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const bookName = document.querySelector("#bookName").value;
  const authorName = document.querySelector("#authorName").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector('input[name="read"]:checked')?.value;

  const book = new Book(bookName, authorName, pages, read);
  collectionOfBooks.push(book);

  // creating the element of the book
  elementCreation(book);
});
