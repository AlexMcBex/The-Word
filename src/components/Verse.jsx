// src/components/Verse.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_BASE_URL = "your_api_base_url";

const Verse = () => {
  const { bibleId, bookId, chapterId, verseId } = useParams();
  const [verse, setVerse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/v1/bibles/${bibleId}/verses/${verseId}`)
      .then(response => response.json())
      .then(data => setVerse(data.data))
      .catch(error => console.error("Error fetching verse:", error));
  }, [bibleId, verseId]);

  const navigateToVerse = (verseId) => {
    navigate(`/bibles/${bibleId}/books/${bookId}/chapters/${chapterId}/verse/${verseId}`);
  }

  return (
    <div>
      {verse.content && (
        <div dangerouslySetInnerHTML={{ __html: verse.content }} />
      )}
      <button onClick={() => navigateToVerse(verse.previous.id)}>Previous Verse</button>
      <button onClick={() => navigateToVerse(verse.next.id)}>Next Verse</button>
    </div>
  );
}

export default Verse;
