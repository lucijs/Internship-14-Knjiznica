import "./Books.css";

const Books = ({ books, borrowBook, returnBook }) => {
  const imgStyle = {
    width: "160px",
    borderRadius: "9px",
    marginTop: "5px",
    marginLeft: "5px",
  };

  const imgAndTextDiv = {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    backgroundColor: "inherit",
    borderRadius: "10px",
  };

  const textDiv = {
    backgroundColor: "inherit",
    borderRadius: "10px",
    width: "210px",
  };

  const conatainer = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "410px",
    backgroundColor: "#a3a3c2",
    color: "#131339",
    borderRadius: "10px",
  };

  const allBooks = {
    width: "90vw",
    marginLeft: "5vw",
    marginRignt: "5vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 416px))",
    justifyContent: "space-around",
    gap: "35px",
  };

  return (
    <>
      <h1>All Books</h1>
      <div style={allBooks}>
        {books.map((book) => {
          return (
            <div style={conatainer} key={book.id}>
              <div style={imgAndTextDiv}>
                <img src={book.img} style={imgStyle} />
                <div style={textDiv}>
                  <h3 style={textDiv}>{book.title}</h3>
                  <h4 style={textDiv}>Autor: {book.author}</h4>
                  <p style={textDiv}>Izdavačka kuća: {book.publisher}</p>
                  <p style={textDiv}>Godina izdavanja: {book.year}</p>
                  <p style={textDiv}>Žanr: {book.genre}</p>
                  <p style={textDiv}>
                    Broj dostupnih primjeraka: {book.copiesAvailable}
                  </p>
                </div>
              </div>

              <button
                onClick={() => borrowBook(book.id)}
                disabled={book.copiesAvailable === 0}>
                Posudi knjigu
              </button>

              <button onClick={() => returnBook(book.id)}>Vrati knjigu</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;
