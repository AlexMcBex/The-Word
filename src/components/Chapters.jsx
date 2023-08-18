// src/components/Chapters.js
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchChaptersForBook } from '../utils/api';
import { Link } from 'react-router-dom';

const Chapters = () => {
  const [chapters, setChapters] = useState([]);
  const { bibleId, bookId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookName = queryParams.get('bookName');

  useEffect(() => {
    fetchChaptersForBook(bibleId, bookId)
      .then(response => {
        if (Array.isArray(response.data.data)) {
          setChapters(response.data.data);
        } else {
          console.error("Unexpected data format received:", response.data);
        }
      })
      .then(console.log(chapters))
      .catch(error => console.error("Error fetching chapters:", error));
  }, [bibleId, bookId, chapters]);

  return (
    <div>
      <h3>{bookName}</h3>
      {/* <p>{chapters[0].number}</p> */}
      {chapters.map(chapter => (
  chapter.number !== 'intro' && (
    <Link className='link' key={chapter.id} to={`/bibles/${bibleId}/books/${bookId}/chapters/${chapter.id}?bookName=${bookName}&chapter=${chapter.number}`}>
      {chapter.number} <br />
    </Link>
  )
))}
    </div>
  );


}

export default Chapters;
