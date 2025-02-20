import { useState } from "react";
import SingleComment from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  // console.log("comments>>>", props);

  const handleInput = (e) => {
    console.log("input >>>", e.target.value);
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit textComment>", textComment);
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>

      <SingleComment />
    </div>
  );
}

export default Comments;
