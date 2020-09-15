import React from "react";
import { useSelector } from "react-redux";

function Comments(props) {
  const comment = useSelector((state) => state.comments);
  return (
    <div className="comments">
      <div className="date">{props.comment.date}</div>
      {props.comment.text}
    </div>
  );
}

export default Comments;
