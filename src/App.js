import React, { useState, useEffect, useCallback } from "react";
import { v4 as uuid4 } from "uuid";
import "./App.css";
import { storyChapter } from "./data/storyChapter";
import { nounData } from "./data/nounData";
import InputWithLabel from "./components/InputWithLabel";
import CountStatus from "./components/CountStatus";
import SentenceList from "./components/Sentence/SentenceList";
import NounList from "./components/Noun/NounList";
import ConversationList from "./components/Conversation/ConversationList";
import NavigationList from "./components/Navigation/NavigationList";
import SuggestionBox from "./components/SuggestionBox";

const navigationData = [
  {
    id: uuid4(),
    navigationName: "sentences",
  },
  {
    id: uuid4(),
    navigationName: "nouns",
  },
  { id: uuid4(), navigationName: "conversations" },
];

const App = () => {
  const [navigations, setNavigations] = useState(navigationData);
  const [searchTerm, setSearchTerm] = useState("");
  const [wordCounter, setWordCounter] = useState(0);
  const [conversationsAndNouns, setConversationsAndNouns] = useState({
    conversations: [],
    nouns: [],
  });
  const [sentences, setSentences] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState(navigationData[0].navigationName);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setToggle(false);
    setSentences([]);
  };

  const totalWords = useCallback(() => {
    let counter = 0;
    const convertStoryChapterIntoArray = storyChapter.toLowerCase().split(" ");
    convertStoryChapterIntoArray.forEach((word) => {
      if (word.includes(searchTerm.toLowerCase())) {
        counter += 1;
      }
    });
    setWordCounter(counter);
  }, [searchTerm]);

  const findNouns = useCallback(() => {
    const convertStoryChapterIntoArray = storyChapter.toLowerCase().split(" ");
    const totalNouns = nounData.filter((noun) => {
      return convertStoryChapterIntoArray.find(
        (word) => word.toLowerCase() === noun
      );
    });
    setConversationsAndNouns((prev) => {
      return { ...prev, nouns: totalNouns };
    });
  }, []);

  const findConversation = useCallback(() => {
    const conversations = storyChapter
      .toLowerCase()
      .split('"')
      .filter((conversation, index) => index & 1);

    setConversationsAndNouns((prev) => {
      return { ...prev, conversations };
    });
  }, []);

  useEffect(() => {
    findNouns();
    findConversation();
  }, []);

  const listedSentences = useCallback(() => {
    const convertStoryChapterIntoArray = storyChapter.toLowerCase().split(". ");
    const newSentences = convertStoryChapterIntoArray.filter((sentence) =>
      sentence.includes(searchTerm.toLowerCase())
    );
    setSentences(newSentences);
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    totalWords();
    listedSentences();
    setToggle(true);

    const conversationWordTimes = conversationsAndNouns.conversations.map(
      (conversation) => {
        if (conversation.includes(searchTerm)) {
          const times = conversation
            .split(" ")
            .filter((word) => word.includes(searchTerm));
          return { conversation, length: times.length };
        }
      }
    );
    console.log(conversationWordTimes.filter((item) => item));
  };

  const handleActiveLink = (navigationName) => {
    setIsActive(navigationName);
  };

  return (
    <div className="App">
      <nav>
        <NavigationList
          navigations={navigations}
          onHandleActiveLink={handleActiveLink}
          isActive={isActive}
        />
      </nav>
      <div className="divider"></div>
      <aside>
        {isActive === "nouns" && (
          <NounList nouns={conversationsAndNouns.nouns} isActive={isActive} />
        )}
        {isActive === "conversations" && (
          <ConversationList
            conversations={conversationsAndNouns.conversations}
            isActive={isActive}
          />
        )}
        {isActive === "sentences" && (
          <>
            <div className="search-form">
              <InputWithLabel
                id="search"
                value={searchTerm}
                onHandleChange={handleChange}
                onHandleSubmit={handleSubmit}
              >
                Search:{" "}
              </InputWithLabel>
              {searchTerm && toggle && (
                <CountStatus
                  searchTerm={searchTerm}
                  wordCounter={wordCounter}
                />
              )}
            </div>
            {wordCounter && toggle ? (
              <SentenceList
                sentences={sentences}
                searchTerm={searchTerm}
                isActive={isActive}
              />
            ) : (
              <SuggestionBox />
            )}
          </>
        )}
      </aside>
    </div>
  );
};

export default App;
