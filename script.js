const collectionOfBooks = []; 
const bookCollection = document.querySelector('#bookCollection');
function books (name , author ,pages,   readStatus){
    if (!new.target){
        throw Error('enter the new keyword to create object');
    }
    this.name = name ;
    this.pages = pages ; 
    this.author = author ; 
    this.readStatus = readStatus ; 
}
const form = document.querySelector('#library-form');
form.addEventListener('submit',(event)=>{
    event.preventDefault() ; 
    const bookName = document.querySelector('#bookName').value;
    const authorName = document.querySelector('#authorName').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('input[name="read"]:checked')?.value ; 
    const book = new books(bookName, authorName,pages, read);
    collectionOfBooks.push(book); 

    // iterating all the element stored in array
    const element = document.createElement('div');
    element.classList.add('newElement');
    const nameOfBook = document.createElement('div');
    nameOfBook.textContent = book.name;
    element.appendChild(nameOfBook);
    const nameOfAuthor = document.createElement('div');
    nameOfAuthor.textContent = book.author;
    element.appendChild(nameOfAuthor);
    const numberOfPages = document.createElement('div');
    numberOfPages.textContent = book.pages;
    element.appendChild(numberOfPages)
    const reading = document.createElement('div');
    if (book.readStatus == 'yes'){
        reading.textContent = 'Done Reading';
    }
    else{
        reading.textContent = 'Not Done Reading';
    }
    element.appendChild(reading); 
    bookCollection.appendChild(element);
    document.querySelector('#library-form').reset();
});

