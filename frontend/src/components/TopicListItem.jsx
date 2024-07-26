import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic }) => {
  const { id, title } = topic; // Destructure properties from topic object

  return (
    <div className="topic-list__item" key={id}>
      <div className="topic-list__title">{title}</div>
    </div>
  );
};

export default TopicListItem;
