import React from "react";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";
import "../styles/TopicList.scss";


const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <TopicListItem
          key={topic.id}
          topic={topic} // Pass the whole topic object
        />
      ))}
    </div>
  );
};

export default TopicList;
