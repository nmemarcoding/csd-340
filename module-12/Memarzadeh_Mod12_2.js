// Array of book titles
const books = [
    "To Kill a Mockingbird by Harper Lee",
    "1984 by George Orwell",
    "Pride and Prejudice by Jane Austen",
    "The Great Gatsby by F. Scott Fitzgerald",
    "Harry Potter and the Sorcerer's Stone by J.K. Rowling",
    "The Lord of the Rings by J.R.R. Tolkien",
    "The Catcher in the Rye by J.D. Salinger",
    "The Alchemist by Paulo Coelho",
    "The Road by Cormac McCarthy",
    "Becoming by Michelle Obama"
];

// Get DOM elements
const booksContainer = document.getElementById('books-container');
const topToBottomBtn = document.getElementById('top-to-bottom');
const bottomToTopBtn = document.getElementById('bottom-to-top');

// Function to display books in ascending order (top to bottom)
function displayTopToBottom() {
    // Clear the container
    booksContainer.innerHTML = '';
    
    // Create an ordered list
    const ol = document.createElement('ol');
    
    // Add each book to the list
    for (let i = 0; i < books.length; i++) {
        const li = document.createElement('li');
        li.textContent = books[i];
        ol.appendChild(li);
    }
    
    // Add the list to the container
    booksContainer.appendChild(ol);
}

// Function to display books in descending order (bottom to top)
function displayBottomToTop() {
    // Clear the container
    booksContainer.innerHTML = '';
    
    // Create an ordered list
    const ol = document.createElement('ol');
    
    // Add each book to the list in reverse order
    for (let i = books.length - 1; i >= 0; i--) {
        const li = document.createElement('li');
        li.textContent = books[i];
        ol.appendChild(li);
    }
    
    // Add the list to the container
    booksContainer.appendChild(ol);
}

// Add event listeners to buttons
topToBottomBtn.addEventListener('click', displayTopToBottom);
bottomToTopBtn.addEventListener('click', displayBottomToTop);

// Display books in ascending order by default when page loads
displayTopToBottom();