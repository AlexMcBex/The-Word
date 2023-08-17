// src/components/Bibles.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchEnglishBibles } from '../utils/api';

const Bibles = () => {
  const [bibles, setBibles] = useState([]);

  useEffect(() => {
    fetchEnglishBibles()
      .then(response => {
        setBibles(response.data.data)
        console.log(response.data)
      })
      .catch(error => console.error("Error fetching bibles:", error));
  }, []);

  return (
    <div>
      <ul>
{bibles.map(bible => (
        <li>
          <Link key={bible.id} to={`/bibles/${bible.id}/books`}>
          {bible.name}
        </Link>
        </li> 
      ))}
      </ul>
      
    </div>
  );
}

export default Bibles;
