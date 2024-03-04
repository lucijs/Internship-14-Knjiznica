import "./Form.css";

const Form = ({ addBook, newBook, setNewBook }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  return (
    <form onSubmit={addBook}>
      <div className="input">
        <input
          type="text"
          name="title"
          placeholder="Naslov"
          onChange={handleChange}
          value={newBook.title}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Autor/ica"
          onChange={handleChange}
          value={newBook.author}
          required
        />
        <input
          type="text"
          name="img"
          placeholder="URL slike"
          onChange={handleChange}
          value={newBook.img}
        />
        <input
          type="text"
          name="publisher"
          placeholder="Izdavačka kuća"
          onChange={handleChange}
          value={newBook.publisher}
          required
        />
        <select
          name="genre"
          placeholder="Žanr"
          onChange={handleChange}
          value={newBook.genre}
          required>
          <option value="Novel">Novel</option>
          <option value="Roman">Roman</option>
          <option value="Poezija">Poezija</option>
          <option value="Drama">Drama</option>
          <option value="Fantazija">Fantazija</option>
          <option value="Znanstvena fantastika">Znanstvena fantastika</option>
          <option value="Biografija">Biografija</option>
        </select>
        <input
          type="number"
          name="year"
          placeholder="Godina izdavanja"
          onChange={handleChange}
          value={newBook.year}
          required
        />
        <input
          type="number"
          name="copiesAvailable"
          placeholder="Broj dostupnih kopija"
          onChange={handleChange}
          value={newBook.copiesAvailable}
          required
        />
      </div>
      <button type="submit">Dodaj knjigu</button>
    </form>
  );
};

export default Form;
