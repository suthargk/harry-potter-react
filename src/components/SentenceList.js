import React from 'react';
import Sentence from './Sentence';
import {v4 as uuid4} from 'uuid'

const SentenceList = ({sentences, searchTerm}) => {
    return (
        <div>
            <ul>
                {sentences.map(sentence => <Sentence key={uuid4()} sentence={sentence} searchTerm={searchTerm}/> )}
            </ul>
        </div>
    );
};

export default SentenceList;