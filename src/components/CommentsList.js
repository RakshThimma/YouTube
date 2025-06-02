import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={comment.id}>
        <Comment data={comment} />
        <div className="ml-8">
          <CommentsList comments={comment.reply}/>
        </div>
      </div>
    );
  });
};

export default CommentsList;
