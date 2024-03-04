import { v4 as uuidv4 } from "uuid";

const books = [
  {
    id: uuidv4(),
    title: "Ponos i predrasude",
    author: "Jane Austen",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645701193i/60487060.jpg",
    publisher: "Mozaik knjiga",
    year: "1813",
    genre: "Roman",
    copiesAvailable: 12,
  },
];

export { books };
