import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { commentCreate } from "./redux/actions";
import SingleComment from "./SingleComment";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  // console.log("comments>>>", props);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit textComment>", textComment);

    const id = uniqid();
    dispatch(commentCreate(textComment, id));
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
