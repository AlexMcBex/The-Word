import React, { createContext, useState, useContext } from 'react';

// Create a Context
export const BibleContext = createContext();


export const useBibleContext = () => {
    return useContext(BibleContext);
};

const BibleProvider = ({ children }) => {
    const [bible, setBible] = useState(null);
    const [book, setBook] = useState(null);
    const [chapter, setChapter] = useState(null);

    // Define a helper function to reset the context
    const resetBibleData = () => {
        setBible(null);
        setBook(null);
        setChapter(null);
    };

    return (
        <BibleContext.Provider value={{ bible, book, chapter, setBible, setBook, setChapter, resetBibleData }}>
            {children}
        </BibleContext.Provider>
    );
};

export default BibleProvider;
