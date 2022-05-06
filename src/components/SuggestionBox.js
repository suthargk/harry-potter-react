import React from 'react';
import "../App.css"
import NotFound from '../icons/NotFound'

const SuggestionBox = () => {
    return (
        <div className='suggestion-container'>
            <div className='suggestion-main'>
                <NotFound />
                <span>Please search the word to find sentences</span>
                </div>
        </div>
    );
};

export default SuggestionBox;