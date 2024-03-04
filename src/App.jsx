import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { books } from "./assets/data.js";
import Books from "./components/Books/Books.jsx";
import "./App.css";

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
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books, initialized]);

  const borrowBook = (id) => {
    const newBooksData = booksData.map((book) => {
      if (book.id === id) {
        return { ...book, copiesAvailable: book.copiesAvailable - 1 };
      } else {
        return book;
      }
    });
    setBooksData(newBooksData);
    localStorage.setItem("books", JSON.stringify(newBooksData));
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
    localStorage.setItem("books", JSON.stringify(newBooksData));
  };

  return (
    <>
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
