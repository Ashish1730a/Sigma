import { useState } from "react";
import "./comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@ashish",
      remarks: "great job",
      rating: 3,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment])
    console.log("added new comment")
  }

  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
            <div className="comment" key={idx}>
          <span>{comment.remarks}</span> <br />
          <br />
          &nbsp;
          <span>(rating = {comment.rating})</span>
          <p>- {comment.username}</p>
        </div>
        ))}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment}/>
    </>
  );
}
