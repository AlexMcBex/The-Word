// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Language from './components/Language';
import Bibles from './components/Bibles';
import Books from './components/Books';
import Chapters from './components/Chapters';
import Verse from './components/Verse';
import ChapterDetail from './components/ChapterDetail';
import './App.css'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bibles" element={<Bibles />} />
        <Route path="/bibles/:bibleId/books" element={<Books />} />
        <Route path="/bibles/:bibleId/books/:bookId" element={<Chapters />} />
        <Route path="/bibles/:bibleId/books/:bookId/chapters/:chapterId" element={<ChapterDetail />} />
        <Route path="/bibles/:bibleId/books/:bookId/chapters/:chapterId/verse/:verseId" element={<Verse />} />

        {/* <Route path="/language/:languageId" element={<Language />} /> */}
        {/* Uncomment and use these routes when you have the components ready */}
        {/* <Route path="/bible/:bibleId" element={<Bible />} /> */}
        {/* <Route path="/book/:bookId" element={<Book />} /> */}
        {/* <Route path="/chapter/:chapterId" element={<Chapter />} /> */}
        {/* <Route path="/verse/:verseId" element={<Verse />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
