import React, { useState, useEffect, useCallback } from "react";
import { storyChapter } from "./data/storyChapter";
import { nounData } from './data/nounData'
import InputWithLabel from "./components/InputWithLabel";
import CountStatus from "./components/CountStatus";
import SentenceList from "./components/SentenceList";
import NounList from './components/NounList'
import ConversationList from "./components/ConversationList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [wordCounter, setWordCounter] = useState(0);
  const [conversationsAndNouns, setConversationsAndNouns] = useState({conversations: [], nouns: []})
  const [sentences, setSentences] = useState([]);
  const [toggle, setToggle] = useState(false);

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
    const convertStoryChapterIntoArray = storyChapter.toLowerCase().split(" ")
    const totalNouns = convertStoryChapterIntoArray.filter(word => {
          return nounData.find(noun => noun.toLowerCase() === word)
    })
    setConversationsAndNouns(prev => {
        return {...prev, nouns: totalNouns}
    })
}, [])

const findConversation = useCallback(() => {
    const conversations = storyChapter.toLowerCase().split('"').filter((conversation, index) => (index & 1))
   
    setConversationsAndNouns(prev => {
        return {...prev, conversations}
    })
}, [])

  useEffect(() => {
    findNouns()
    findConversation()
  }, [])
 

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
    
    const conversationWordTimes = conversationsAndNouns.conversations.map(conversation => {
        if(conversation.includes(searchTerm)) {
            const times = conversation.split(" ").filter(word => word.includes(searchTerm))
            return {conversation, length: times.length}
        }
    })
    console.log(conversationWordTimes.filter(item => item))
}

  return (
    <div>
      <InputWithLabel
        id="search"
        value={searchTerm}
        onHandleChange={handleChange}
        onHandleSubmit={handleSubmit}
      >
        Search:{" "}
      </InputWithLabel>
      {searchTerm && toggle && (
        <CountStatus searchTerm={searchTerm} wordCounter={wordCounter} />
      )}
      <SentenceList sentences={sentences} searchTerm={searchTerm} />
      <NounList nouns={conversationsAndNouns.nouns}/>
      <ConversationList conversations={conversationsAndNouns.conversations}/>
    </div>
  );
};

export default App;
