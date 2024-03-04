import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { books } from "./assets/data.js";
import Books from "./components/Books/Books.jsx";
import "./App.css";
import Form from "./components/Form/Form.jsx";

function App() {
  const [booksData, setBooksData] = useState(books);
  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    author: "",
    image: "",
    publisher: "",
    year: "",
    genre: "",
    copiesAvailable: 0,
  });

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    const storedInitialized = localStorage.getItem("initialized");

    if (storedInitialized === "true") {
      setInitialized(true);
      if (storedBooks) {
        setBooksData(JSON.parse(storedBooks));
      } else {
        setBooksData(booksData);
        localStorage.setItem("books", JSON.stringify(booksData));
      }
    } else {
      localStorage.setItem("initialized", "true");
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem("books", JSON.stringify(booksData));
    }
  }, [booksData, initialized]);

  const borrowBook = (id) => {
    const newBooksData = booksData.map((book) => {
      if (book.id === id) {
        return { ...book, copiesAvailable: book.copiesAvailable - 1 };
      } else {
        return book;
      }
    });
    setBooksData(newBooksData);
  };

  const returnBook = (id) => {
    const newBooksData = booksData.map((book) => {
      if (book.id === id) {
        return { ...book, copiesAvailable: book.copiesAvailable + 1 };
      } else {
        return book;
      }
    });
    setBooksData(newBooksData);
  };

  const addBook = (e) => {
    e.preventDefault();
    if (
      !newBook.title ||
      !newBook.author ||
      !newBook.publisher ||
      !newBook.year ||
      !newBook.genre ||
      newBook.copiesAvailable < 0
    ) {
      alert("Molimo popunite sva obavezna polja.");
      return;
    }
    if (newBook.img === undefined)
      newBook.img = "https://d15be2nos83ntc.cloudfront.net/images/no-cover.png";
    setBooksData((prev) => [...prev, { ...newBook, id: uuidv4() }]);
    setNewBook({
      id: "",
      title: "",
      author: "",
      image: "",
      publisher: "",
      year: "",
      genre: "",
      copiesAvailable: 0,
    });
  };

  return (
    <>
      <h1>Unsei novu knjigu</h1>
      <Form addBook={addBook} newBook={newBook} setNewBook={setNewBook} />
      <h1>Sve knjige</h1>
      <Books
        books={booksData.sort(
          (book1, book2) =>
            book1.author.localeCompare(book2.author) ||
            book1.title.localeCompare(book2.title) ||
            book1.year - book2.year
        )}
        borrowBook={borrowBook}
        returnBook={returnBook}
      />
    </>
  );
}

export default App;
