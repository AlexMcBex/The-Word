// src/components/Language.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchLanguages } from '../utils/api';

const Language = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetchLanguages()
      .then(response => setLanguages(response.data.data))
      .catch(error => console.error("Error fetching languages:", error));
  }, []);

  return (
    <div>
      {languages.map(language => (
        <Link key={language.id} to={`/bible/${language.id}`}>
          {language.name}
        </Link>
      ))}
    </div>
  );
}

export default Language;
