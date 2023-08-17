// src/utils/api.js
import axios from 'axios';

const API_BASE_URL = "https://api.scripture.api.bible/v1/";
const API_KEY = process.env.REACT_APP_API_KEY;

axios.defaults.headers.common['api-key'] = API_KEY;

export const fetchLanguages = () => {
  return axios.get(`${API_BASE_URL}languages`);
}

export const fetchEnglishBibles = () => {
  return axios.get(`${API_BASE_URL}bibles?language=eng`);
}

export const fetchBooksForBible = (bibleId) => {
  return axios.get(`${API_BASE_URL}bibles/${bibleId}/books`);
}

export const fetchBibles = () => {
  return axios.get(`${API_BASE_URL}bibles`);
}

export const fetchBooks = () => {
  return axios.get(`${API_BASE_URL}books`);
}
export const fetchChaptersForBook = (bibleId, bookId) => {
  return axios.get(`${API_BASE_URL}bibles/${bibleId}/books/${bookId}/chapters`);
}
export const fetchChapters = () => {
  return axios.get(`${API_BASE_URL}chapters`);
}
export const fetchVersesForChapter = (bibleId, chapterId) => {
  return axios.get(`${API_BASE_URL}bibles/${bibleId}/chapters/${chapterId}/verses`);
}

export const fetchChapterContent = (bibleId, chapterId) => {
  return axios.get(`${API_BASE_URL}bibles/${bibleId}/chapters/${chapterId}`);
}


export const fetchVerses = () => {
  return axios.get(`${API_BASE_URL}verses`);
}

// Add similar functions for other endpoints.
