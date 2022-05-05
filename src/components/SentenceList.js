import React from "react";
import "../App.css";
import Sentence from "./Sentence";
import Heading from "./Heading";
import { v4 as uuid4 } from "uuid";

const SentenceList = ({ sentences, isActive, searchTerm }) => {
  return (
    <div className="sentence-container">
      <div className="sentence-main">
        <Heading heading={isActive} totalNumber={sentences.length}/>
        <ul className="sentence-list">
          {sentences.map((sentence) => (
            <Sentence
              key={uuid4()}
              sentence={sentence}
              searchTerm={searchTerm}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SentenceList;
