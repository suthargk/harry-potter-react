import React from 'react';
import {v4 as uuid4} from 'uuid'
import Conversation from './Conversation';

const ConversationList = ({conversations}) => {
    return (
        <div>
            <ul>
                {conversations.map(conversation => <Conversation key={uuid4()} conversation={conversation} />)}
            </ul>
        </div>
    );
};

export default ConversationList;