import { useState, useEffect } from "react";

function SingleComment({ data }) {
  const [commentText, setTextComment] = useState("");
  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setTextComment(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  return (
    <form className="comments-item">
      <div className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
