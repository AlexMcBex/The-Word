// src/components/ChapterDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchVersesForChapter, fetchChapterContent } from '../utils/api';



const ChapterDetail = () => {
  const [verses, setVerses] = useState([]);
  const { bibleId, chapterId, bookId } = useParams(); 
  const [chapterContent, setChapterContent] = useState("");
  const [nextChapter, setNextChapter] = useState(null);
  const [previousChapter, setPreviousChapter] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookName = queryParams.get('bookName');
  const chapter = queryParams.get('chapter')

  const navigateToChapter = (chapterId, chapter) => {
    navigate(`/bibles/${bibleId}/books/${bookId}/chapters/${chapterId}?bookName=${bookName}&chapter=${chapter}`);
  }
  
//   const navigateToVerse = (verseId) => {
//     navigate(`/bibles/${bibleId}/books/${bookId}/chapters/${chapterId}/verse/${verseId}`);
//   }



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
    
  }, [bibleId, chapterId, verses]);
  
  

  return (
    <div>
      {/* <div>
  <h2>Verses</h2>
  {verses.map(verse => (
    <div key={verse.id} className='verse-number'>
      <Link className='link'  to={`/bibles/${verse.bibleId}/books/${verse.bookId}/chapters/${verse.chapterId}/verse/${verse.id}`}>
      {verse.reference.split(":")[1]}
      </Link>
    </div>
  ))}
</div> */}
      <div>
      <div  id="content" >
  {previousChapter && (
    <button onClick={() => navigateToChapter(previousChapter.id, previousChapter.number)}>
      Previous: {previousChapter.number}
    </button>
  )}
  {nextChapter && (
    <button onClick={() => navigateToChapter(nextChapter.id, nextChapter.number)}>
      Next: {nextChapter.number}
    </button>
  )}
</div>

  <h2>{bookName} </h2><h4>chapter {chapter}</h4>
  <div dangerouslySetInnerHTML={{ __html: chapterContent }} />
</div>
<div  id="content" >
  {previousChapter && (
    <button onClick={() => navigateToChapter(previousChapter.id, previousChapter.number)}>
      Previous: {previousChapter.number}
    </button>
  )}
  {nextChapter && (
    <button onClick={() => navigateToChapter(nextChapter.id, nextChapter.number)}>
      Next: {nextChapter.number}
    </button>
  )}
</div>

    </div>
    
  );
}

export default ChapterDetail;
