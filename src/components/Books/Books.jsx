import "./Books.css";

const Books = ({ books, borrowBook, returnBook }) => {
  const imgStyle = {
    width: "160px",
  };

  const imgAndTextDiv = {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    backgroundColor: "inherit",
  };

  const textDiv = {
    backgroundColor: "inherit",
  };

  const conatainer = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "410px",
    backgroundColor: "#a3a3c2",
    color: "#131339",
  };

  const allBooks = {
    width: "80vw",
    marginLeft: "10vw",
    marginRignt: "10vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 216px))",
    justifyContent: "space-around",
    gap: "24px",
  };

  return (
    <div style={allBooks}>
      {books.map((book) => {
        return (
          <div style={conatainer}>
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

            <button onClick={borrowBook}> Posudi knjigu </button>

            <button onClick={returnBook}> Vrati knjigu </button>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
