import React from "react";
export type IComment = {
  _id: string;
  user: string;
  comment: string;
  time: Date | string;
};

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date | string) {
  const date = new Date(time);
  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}



export default function Comment({ comment }: CommentProps) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "1rem",
      backgroundColor: "#f9f9f9"
    }}>
      <h4 style={{ margin: "0 0 0.5rem 0", color: "#333" }}>{comment.user}</h4>
      <p style={{ margin: "0 0 0.5rem 0", color: "#555" }}>{comment.comment}</p>
      <span style={{ fontSize: "0.85rem", color: "#888" }}>
        {parseCommentTime(comment.time)}
      </span>
    </div>
  );
}