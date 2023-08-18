// src/components/Books.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBooksForBible } from '../utils/api';

import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);
  const { bibleId } = useParams(); // This will capture the bibleId from the URL

  useEffect(() => {
    fetchBooksForBible(bibleId)
      .then(response => setBooks(response.data.data))
      .catch(error => console.error("Error fetching books:", error));
  }, [bibleId]);

  return (
    <div>
      <ul>
 {books.map(book => (
      <li>
        <Link  className='link' key={book.id} to={`/bibles/${bibleId}/books/${book.id}?bookName=${book.name}`}>
        {book.name}
      </Link>
      </li>
      
    ))}
      </ul>
   
  </div>
  );
}

export default Books;
