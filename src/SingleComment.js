import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate, commentDelete } from "./redux/actions";

function SingleComment({ data }) {
  const [commentText, setTextComment] = useState("");
  const { text, id } = data;
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  useEffect(() => {
    if (text) {
      setTextComment(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
