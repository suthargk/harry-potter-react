import React from "react";
import "../../App.css"
import { v4 as uuid4 } from "uuid";
import Conversation from "./Conversation";
import Heading from "../Heading";

const ConversationList = ({ conversations, isActive }) => {
  return (
    <div className="conversation-container">
      <div className="conversation-main">
        <Heading heading={isActive} totalNumber={conversations.length}/>
        <ul className="conversation-list">
          {conversations.map((conversation) => (
            <Conversation key={uuid4()} conversation={conversation} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConversationList;
