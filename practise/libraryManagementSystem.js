// Object-Oriented Programming:
// Design a simple class hierarchy for a library management system, including classes for books, authors, and
// library patrons.

class Author {
    constructor(name, bio) {
        this.name = name;
        this.bio = bio;
    }
}

class Book {
    constructor(title, author, genre, year) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
    }
}

class Patron {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.borrowed = [];
    }

    borrow(book) {
        this.borrowed.push(book);
    }

    return(book) {
        const index = this.borrowed.indexOf(book);
        if (index !== -1) {
            this.borrowed.splice(index, 1);
        }
    }
}

class Library {
    constructor() {
        this.books = [];
        this.patrons = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    addPatron(patron) {
        this.patrons.push(patron);
    }

    removePatron(patron) {
        const index = this.patrons.indexOf(patron);
        if (index !== -1) {
            this.patrons.splice(index, 1);
        }
    }
}

// Example usage:
const library = new Library();

const author1 = new Author("J.K. Rowling", "British author, best known for the Harry Potter series");
const book1 = new Book("Harry Potter and the Philosopher's Stone", author1, "Fantasy", 1997);

const author2 = new Author("George Orwell", "English novelist, essayist, journalist, and critic");
const book2 = new Book("Nineteen Eighty-Four", author2, "Dystopian", 1949);

const patron1 = new Patron("Gaurav", "gaurav@gmail.com");
const patron2 = new Patron("saurav", "saurav@gmail.com");

library.addBook(book1);
library.addBook(book2);
library.addPatron(patron1);
library.addPatron(patron2);

patron1.borrow(book1);
patron2.borrow(book2);

console.log("Library books:", library.books);
console.log("Library patrons:", library.patrons);
console.log("Books borrowed by Alice:", patron1.borrowed);
console.log("Books borrowed by Bob:", patron2.borrowed);

patron1.return(book1);
console.log("Books borrowed by Alice after returning:", patron1.borrowed);
