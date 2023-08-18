import React from 'react';
import { Link } from 'react-router-dom';

// Assuming you have a context that provides current bible, book, and chapter
import {  useBibleContext } from './BibleContext';


function Navbar() {
  const { bible, book, chapter } = useBibleContext();
console.log("Bible:", bible, "Book:", book, "Chapter:", chapter);



  return (
    <nav className='navbar'>
      <div className="navLeft"> <Link className='nav-link link' to="/">The Word</Link></div>
      
      <div className="navCenter">
        {bible && <Link to={`/bibles/${bible.id}/books`}>{bible.name}</Link>}

        {book && (
          <>
            <span> - </span>
            <Link to={`/bibles/${bible.id}/books/${book.id}/chapters`}>{book.name}</Link>
          </>
        )}

        {chapter && (
          <>
            <span> - </span>
            <span>{chapter.number}</span>  {/* If you want this clickable, replace with Link */}
          </>
        )}
      </div>
      
      <div className="navRight"> {/* Right part of the navbar */} </div>
    </nav>
  );
}

export default Navbar;
