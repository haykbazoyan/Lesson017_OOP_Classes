class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._title;
  }

  toString() {
    return `Book. Title: ${this._title}; Author: ${this._author}`;
  }

  isTheSameBook(book) {
    if (book.title === this._title && book.author === this.author) {
      return true;
    }
    return false;
  }
}

class LibraryBookBase extends Book {
  constructor(title, author, bookId) {
    super(title, author);
    this._bookId = bookId;
  }

  get bookId() {
    return this._bookId;
  }

  get author() {
    return this._author;
  }

  get title() {
    return this._title;
  }

  toString() {
    return `LibraryBookBase. Title: ${this._title}; Author: ${this._author}`;
  }
}

class LibraryBook {
  constructor(title, author, bookId, quantity) {
    super(title, author);
    this._bookId = bookId;
    this._quantity = quantity;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    if (typeof value !== "number") {
      throw new Error("Invalid quantity value!!!");
    }
    this._quantity = value;
  }

  increaseQuantityBy(amount) {
    return (this._quantity += amount);
  }

  increaseQuantityBy(amount) {
    return (this._quantity -= amount);
  }

  toString() {
    return `LibraryBook. Title: ${this._title}; Author: ${this._author}`;
  }
}

class ReaderBook {
  constructor(title, author, bookId, expirationDate, isReturned) {
    super(title, author);
    this.bookId = bookId;
    this.expirationDate = expirationDate;
    this.isReturned = isReturned;
  }

  toString() {
    return `ReaderBook.`;
  }
}

class Reader extends ReaderBook {
  constructor(firstName, lastName, readerId, books = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.readerId = readerId;
    this.books = books;
  }

  toString() {
    return `Reader.`;
  }

  borrowBook(book, library) {}
}

class Library {
  constructor(books, readers) {
    this.books = books;
    this.readers = readers;
  }

  addBook(newBook) {}
}
