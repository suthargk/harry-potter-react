import React, {memo} from 'react';
import {v4 as uuid4} from 'uuid'
import Noun from './Noun';

const NounList = memo(({nouns}) => {

    return (
        <div>
            <ul>
                {nouns.map(noun => <Noun key={uuid4()} noun={noun}/>)}
            </ul>
        </div>
    );
});

export default NounList;