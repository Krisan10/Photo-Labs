import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onClick }) => {
  const { id, title } = topic;

  return (
    <div className="topic-list__item" onClick={() => onClick(topic)}>
      <div className="topic-list__title">{title}</div>
    </div>
  );
};

export default TopicListItem;
