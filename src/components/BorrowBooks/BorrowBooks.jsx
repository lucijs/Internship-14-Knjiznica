const BorrowBooks = (id, setBooksData, booksData) => {
  const newBooksData = booksData.map((book) => {
    if (book.id === id) {
      return { ...book, copiesAvailable: book.copiesAvailable - 1 };
    } else {
      return book;
    }
  });
  setBooksData(newBooksData);
};

export default BorrowBooks;

