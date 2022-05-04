import React from 'react';

const Sentence = ({sentence, searchTerm}) => {
    return (
        <li>
            <span style={{ textTransform: "capitalize"}}>{sentence}
                
            </span>
        </li>
    );
};

export default Sentence;