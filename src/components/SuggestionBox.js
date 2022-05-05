import React from 'react';
import '../App.css'
import Smile from '../icons/Smile'

const SuggestionBox = () => {
    return (
        <div className='suggestion-container'>
            <div className='suggestion-main'><span>Please search the word to find sentences</span><Smile /></div>
        </div>
    );
};

export default SuggestionBox;