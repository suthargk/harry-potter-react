import React from 'react';

const Noun = ({noun}) => {
    return (
        <li className='noun-item'>
            <span style={{textTransform: 'capitalize'}}>{noun}</span>   
        </li>
    );
};

export default Noun;