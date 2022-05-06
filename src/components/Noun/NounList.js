import React, { memo } from "react";
import { v4 as uuid4 } from "uuid";
import Noun from "./Noun";
import Heading from "../Heading";
import "../../App.css"

const NounList = memo(({ nouns, isActive }) => {
  const newNouns = [...nouns].sort()
  return (
    <div className="noun-container">
      <div className="noun-main">
        <Heading heading={isActive} totalNumber={nouns.length}/>
        <ul className="noun-list">
          {newNouns.map((noun) => (
            <Noun key={uuid4()} noun={noun} />
          ))}
        </ul>
      </div>
    </div>
  );
});

export default NounList;
