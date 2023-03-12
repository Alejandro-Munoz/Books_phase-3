import { useState, useContext } from "react";

import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [bookTitle, setBookTitle] = useState(book.title);

  const { updateBook } = useContext(BooksContext);

  const handleChange = (event) => {
    setBookTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    updateBook(book.id, bookTitle);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={bookTitle} onChange={handleChange} />
      <button className="button is-primary">
        Save
      </button>
    </form>
  );
}

export default BookEdit;
