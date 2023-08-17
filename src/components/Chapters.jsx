// src/components/Chapters.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchChaptersForBook } from '../utils/api';
import { Link } from 'react-router-dom';

const Chapters = () => {
  const [chapters, setChapters] = useState([]);
  const { bibleId, bookId } = useParams(); 

  useEffect(() => {
    fetchChaptersForBook(bibleId, bookId)
      .then(response => {
        if (Array.isArray(response.data.data)) {
          setChapters(response.data.data);
        } else {
          console.error("Unexpected data format received:", response.data);
        }
      })
      .catch(error => console.error("Error fetching chapters:", error));
  }, [bibleId, bookId]);

return (
  <div>
    <h3>Book</h3>
    {chapters.map(chapter => (
      <Link key={chapter.id} to={`/bibles/${bibleId}/books/${bookId}/chapters/${chapter.id}`}>
        {chapter.number}
      </Link>
    ))}
  </div>
);


}

export default Chapters;
