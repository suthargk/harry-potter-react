import React from 'react';
import "../../App.css"

const Sentence = ({sentence, searchTerm}) => {
    return (
        <li className='sentence-item'>
            <span style={{ textTransform: "capitalize"}}>{sentence}
                
            </span>
        </li>
    );
};

export default Sentence;