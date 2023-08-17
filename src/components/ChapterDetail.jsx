// src/components/ChapterDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchVersesForChapter, fetchChapterContent } from '../utils/api';
import { Link } from 'react-router-dom';


const ChapterDetail = () => {
  const [verses, setVerses] = useState([]);
  const { bibleId, chapterId, bookId } = useParams(); 
  const [chapterContent, setChapterContent] = useState("");
  const [nextChapter, setNextChapter] = useState(null);
  const [previousChapter, setPreviousChapter] = useState(null);
  const navigate = useNavigate();

  const navigateToChapter = (chapterId) => {
    navigate(`/bibles/${bibleId}/books/${bookId}/chapters/${chapterId}#content`);
  }
  
  const navigateToVerse = (verseId) => {
    navigate(`/bibles/${bibleId}/books/${bookId}/chapters/${chapterId}/verse/${verseId}`);
  }



  useEffect(() => {
    fetchVersesForChapter(bibleId, chapterId)
      .then(response => setVerses(response.data.data))
      .then(console.log(verses))
      .catch(error => console.error("Error fetching verses:", error));
  
      fetchChapterContent(bibleId, chapterId)
      .then(response => {
        setChapterContent(response.data.data.content);
        setNextChapter(response.data.data.next);
        setPreviousChapter(response.data.data.previous);
      })
      .catch(error => console.error("Error fetching chapter content:", error));
    
  }, [bibleId, chapterId]);
  
  

  return (
    <div>
      <div>
  <h2>Verses</h2>
  {verses.map(verse => (
    <div key={verse.id} className='verse-number'>
      <Link to={`/bibles/${verse.bibleId}/books/${verse.bookId}/chapters/${verse.chapterId}/verse/${verse.id}`}>
      {verse.reference.split(":")[1]}
      </Link>
    </div>
  ))}
</div>
      <div>
      <div  id="content" >
  {previousChapter && (
    <button onClick={() => navigateToChapter(previousChapter.id)}>
      Previous: {previousChapter.number}
    </button>
  )}
  {nextChapter && (
    <button onClick={() => navigateToChapter(nextChapter.id)}>
      Next: {nextChapter.number}
    </button>
  )}
</div>

  <h2>Chapter Content</h2>
  <div dangerouslySetInnerHTML={{ __html: chapterContent }} />
</div>

    </div>
  );
}

export default ChapterDetail;
