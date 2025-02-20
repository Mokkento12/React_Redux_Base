import SingleComment from "./SingleComment";

function Comments(props) {
  console.log("comments>>>", props);

  return (
    <div className="card-comments">
      <form className="comments-item-create">
        <input type="text" />
        <input type="submit" hidden />
      </form>

      <SingleComment />
    </div>
  );
}

export default Comments;
