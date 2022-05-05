import React from 'react';
import "../App.css"

const Conversation = ({conversation}) => {
    return (
        <li className='conversation-item'>
            <span style={{textTransform: "capitalize"}}>{conversation}</span>    
        </li>
    );
};

export default Conversation;